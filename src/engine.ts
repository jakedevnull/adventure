import type { Room, Item, Scenery, Menace, Examinable, World, Direction } from "./types.ts";
import { parse, type Command } from "./parser.ts";
import { roomMap, strideTarget, validateWorld } from "./world.ts";

export interface Turn {
  text: string;
  /** True when the player has asked to leave. */
  quit?: boolean;
  /** Set on the turn the player dies. */
  died?: boolean;
}

/** Where an item is: carried, consumed, or the id of the room it lies in. */
type ItemPlace = "inventory" | "gone" | string;

/**
 * The game. Holds the world and turns typed lines into replies. Pure with
 * respect to I/O: `handle` takes a string and returns text, so it is trivially
 * testable and the same engine can back a terminal, a socket, or the web.
 */
export class Game {
  private readonly world: World;
  private readonly rooms: Map<string, Room>;
  private readonly itemIndex = new Map<string, Item>();
  private readonly itemHome = new Map<string, string>();
  private readonly itemPlace = new Map<string, ItemPlace>();
  private room: Room;
  private readonly visited = new Set<string>();
  private readonly slain = new Set<string>();
  private mark: string | null = null;
  private lastCommand: Command | null = null;
  /** Turns spent in a room that means the player harm. Two is fatal. */
  private danger = 0;

  /** Accepts a whole world, or a single room for a one-room world. */
  constructor(worldOrRoom: World | Room) {
    this.world = isWorld(worldOrRoom)
      ? worldOrRoom
      : { start: worldOrRoom.id, landings: [worldOrRoom.landing], rooms: [worldOrRoom] };
    const problems = validateWorld(this.world);
    if (problems.length > 0) {
      throw new Error(`invalid world:\n  ${problems.join("\n  ")}`);
    }
    this.rooms = roomMap(this.world);
    this.room = this.rooms.get(this.world.start)!;
    for (const room of this.world.rooms) {
      for (const item of room.items) {
        this.itemIndex.set(item.id, item);
        this.itemHome.set(item.id, room.id);
        this.itemPlace.set(item.id, item.start === "inventory" ? "inventory" : room.id);
      }
    }
  }

  /** The id of the room the player is in. For tests and evaluators. */
  where(): string {
    return this.room.id;
  }

  /** The opening banner and first look, for the start of a session. */
  intro(): string {
    return [
      "EVERWYN",
      "An adventure in deep time.",
      "Type HELP for help, QUIT to leave.",
      "",
      this.describeRoom(),
    ].join("\n");
  }

  /** Handle one line of input. Never throws on bad input. */
  handle(input: string): Turn {
    const result = parse(input);
    if (result === null) {
      return { text: "I beg your pardon?" };
    }
    if (!result.ok) {
      return { text: `I don't know the word "${result.error.unknownWord}".` };
    }

    let command = result.command;
    if (command.verb === "again") {
      if (!this.lastCommand) return { text: "You have done nothing to repeat." };
      command = this.lastCommand;
    } else {
      this.lastCommand = command;
    }

    const turn = this.run(command);
    // The hazard clock runs after the command resolves, so the turn you kill
    // the thing, or walk out of its room, is a turn you survive. Never on the
    // way out of the game.
    return turn.quit ? turn : this.hazardStep(turn);
  }

  private run(command: Command): Turn {
    switch (command.verb) {
      case "look":
        return { text: this.blind() ? DARK_LOOK : this.describeRoom() };
      case "examine":
        return { text: this.examine(command.noun) };
      case "take":
        return { text: this.take(command.noun) };
      case "drop":
        return { text: this.drop(command.noun) };
      case "inventory":
        return { text: this.inventory() };
      case "go":
        return { text: this.go(command.noun) };
      case "past":
        return { text: this.stride("past") };
      case "future":
        return { text: this.stride("future") };
      case "when":
        return { text: this.when() };
      case "wait":
        return { text: "Time passes. Here, that is a great deal of it." };
      case "say":
        return { text: this.say(command.rest) };
      case "talk":
        return { text: this.talk(command.noun) };
      case "mark":
        return { text: this.leaveMark(command.rest) };
      case "read":
        return { text: this.read(command.noun) };
      case "eat":
        return { text: this.eat(command.noun) };
      case "attack":
        return { text: this.attack(command.noun) };
      case "light":
        return { text: this.light(command.noun) };
      case "help":
        return { text: HELP };
      case "quit":
        return { text: "The fire burns down. Come back; the lamps stay lit.", quit: true };
      // `again` is resolved before we get here.
      case "again":
        return { text: "You have done nothing to repeat." };
    }
  }

  // --- light and the hazard clock ---------------------------------------------

  /**
   * A burning thing lights the room it is in or the hands it is in. Lying on
   * the floor counts, which is what keeps a player who drops the lamp in the
   * dark from being stuck in a room they cannot see to pick it up in.
   */
  private hasLight(): boolean {
    for (const item of this.itemIndex.values()) {
      if (!item.light) continue;
      const place = this.itemPlace.get(item.id);
      if (place === "inventory" || place === this.room.id) return true;
    }
    return false;
  }

  /** In a room with no light of its own, and nothing burning. */
  private blind(): boolean {
    return this.room.dark === true && !this.hasLight();
  }

  /** What lives here, if it is still alive. */
  private liveMenace(): Menace | null {
    const menace = this.room.menace;
    return menace && !this.slain.has(menace.id) ? menace : null;
  }

  /** Move the player, and give them a fresh turn's grace wherever they land. */
  private enter(room: Room): void {
    this.room = room;
    this.danger = 0;
  }

  /**
   * One tick of the clock, run after every command but QUIT. A room that means
   * the player harm — dark, or occupied — gives them one move, and takes them
   * on the second.
   */
  private hazardStep(turn: Turn): Turn {
    const blind = this.blind();
    const menace = this.liveMenace();
    if (!blind && !menace) {
      this.danger = 0;
      return turn;
    }

    this.danger += 1;
    const lines: string[] = [];
    if (turn.text !== "") lines.push(turn.text);

    if (this.danger === 1) {
      lines.push(blind ? DARK_WARNING : menace!.warning);
      return { ...turn, text: lines.join("\n") };
    }

    lines.push(blind ? DARK_DEATH : menace!.kill);
    lines.push("", HEARTH_RETURN, "");
    // The House takes them back. Nothing is lost but the walk: inventory, the
    // rooms they have seen, and anything they have killed all stand.
    this.enter(this.rooms.get(this.world.hearth ?? this.world.start)!);
    lines.push(this.describeRoom());
    return { ...turn, text: lines.join("\n"), died: true };
  }

  // --- world description -----------------------------------------------------

  private describeRoom(): string {
    // Blind, there is nothing to describe and nothing is learned, so the room
    // keeps its first-visit text for the visit the player can see.
    if (this.blind()) return "";
    const first = !this.visited.has(this.room.id);
    this.visited.add(this.room.id);
    const body = first ? this.room.look : this.room.lookAgain ?? this.room.look;

    const lines = [this.room.title, body];

    // Items lying here that the look text doesn't already account for — things
    // dropped here, or carried in from elsewhere — are listed, Zork-style.
    for (const it of this.itemsHere()) {
      const native = this.itemHome.get(it.id) === this.room.id && it.start === "room";
      if (!native) lines.push(`There is ${article(it.nouns[0]!)} here.`);
    }

    const timeLine = this.timeLine();
    if (timeLine) lines.push(timeLine);

    return lines.join("\n");
  }

  private timeLine(): string | null {
    const { past, future } = this.room.time;
    if (past && future) return "Here, the years run both ways.";
    if (future) return "Here, the years run forward.";
    if (past) return "Here, the years run back.";
    return null;
  }

  // --- verbs -----------------------------------------------------------------

  private examine(noun: string): string {
    if (this.blind()) return DARK_REFUSAL;
    if (noun === "") return "Examine what?";
    const target = this.resolve(noun);
    if (!target) return "You can't see any such thing.";
    return target.description;
  }

  private take(noun: string): string {
    if (this.blind()) return DARK_REFUSAL;
    if (noun === "") return "Take what?";
    if (noun === "all" || noun === "everything") return this.takeAll();

    const target = this.resolve(noun);
    if (!target) return "You can't see any such thing.";

    if (!isItem(target)) {
      return `The ${target.nouns[0]} stays where it is.`;
    }
    const place = this.itemPlace.get(target.id);
    if (place === "inventory") return "You already have it.";
    if (!target.takeable) {
      return target.takeRefusal ?? "That's hardly yours to take.";
    }
    this.itemPlace.set(target.id, "inventory");
    return "Taken.";
  }

  private takeAll(): string {
    const here = this.itemsHere();
    if (here.length === 0) return "There is nothing here to take.";
    const lines: string[] = [];
    for (const it of here) {
      if (it.takeable) {
        this.itemPlace.set(it.id, "inventory");
        lines.push(`${capitalize(it.nouns[0]!)}: Taken.`);
      } else {
        lines.push(`${capitalize(it.nouns[0]!)}: ${it.takeRefusal ?? "You leave it."}`);
      }
    }
    return lines.join("\n");
  }

  private drop(noun: string): string {
    if (noun === "") return "Drop what?";
    const target = this.resolve(noun);
    if (!target || !isItem(target) || this.itemPlace.get(target.id) !== "inventory") {
      return "You aren't carrying that.";
    }
    this.itemPlace.set(target.id, this.room.id);
    return "Dropped.";
  }

  private inventory(): string {
    const held = this.carried();
    if (held.length === 0) return "You are carrying nothing.";
    return ["You are carrying:", ...held.map((it) => `  ${it.nouns[0]}`)].join("\n");
  }

  private go(direction: string): string {
    if (this.blind()) return DARK_MOVE;
    if (direction === "") return "Go where?";
    const target = this.room.exits?.[direction as Direction];
    const next = target === undefined ? undefined : this.rooms.get(target);
    if (!next) return "You can't go that way.";
    this.enter(next);
    return this.describeRoom();
  }

  private stride(way: "past" | "future"): string {
    if (this.blind()) return DARK_MOVE;
    const open = way === "past" ? this.room.time.past : this.room.time.future;
    const reach = way === "past" ? "back" : "on";
    if (!open) {
      return `You reach ${reach}. The years do not give. Tonight the House holds still.`;
    }
    const next = strideTarget(this.world, this.room, way);
    if (!next) {
      // The years run here, but no face of this place is built in that age.
      return `You reach ${reach}. The years give — but nothing of this place stands in that age, and they set you down where you were.`;
    }
    this.enter(next);
    const arrival = "The years pour past. You arrive, and it is a different world.";
    const description = this.describeRoom();
    return description === "" ? arrival : [arrival, "", description].join("\n");
  }

  private when(): string {
    return `The year is ${this.room.landing}. They call it ${this.room.age}, and mean the walls.`;
  }

  private say(words: string): string {
    if (words.trim() === "") return "Say what?";
    return `You say, "${sentence(words)}" The landlady nods, as if she has heard it before.`;
  }

  private talk(noun: string): string {
    if (this.blind()) return DARK_REFUSAL;
    const target = noun === "" ? this.findTalker() : this.resolve(noun);
    if (!target) return "There is no one here by that name.";
    if (isScenery(target) && "talk" in target && target.talk) return target.talk;
    return "That doesn't answer.";
  }

  private leaveMark(words: string): string {
    const text = words.trim();
    if (text === "") return "Mark it with what?";
    this.mark = text;
    return `You leave your mark: "${sentence(text)}" You will find it here again.`;
  }

  private read(noun: string): string {
    if (this.blind()) return DARK_REFUSAL;
    if (noun === "mark") {
      return this.mark === null
        ? "You have left no mark here."
        : `Your mark reads: "${sentence(this.mark)}"`;
    }
    if (noun === "") return "Read what?";
    const target = this.resolve(noun);
    if (!target) return "You can't see any such thing.";
    if (isItem(target) && target.read) return target.read;
    return "There's nothing to read there.";
  }

  private eat(noun: string): string {
    if (noun === "") return "Eat what?";
    const target = this.resolve(noun);
    if (!target || !isItem(target)) return "That's not for eating.";
    if (!target.eat) return "That's not for eating.";
    this.itemPlace.set(target.id, "gone");
    return target.eat;
  }

  private attack(noun: string): string {
    if (this.blind()) return DARK_ATTACK;
    const menace = this.liveMenace();
    if (noun === "") {
      return menace ? this.strike(menace) : "There is nothing here that wants killing.";
    }
    // ATTACK QUENCH WITH SWORD names two things, and the sword is in hand, so
    // the general lookup would find it first. What is being attacked gets first
    // refusal on the phrase.
    if (menace && names(menace, noun)) return this.strike(menace);
    const target = this.resolve(noun);
    if (!target) return "Attack what?";
    return "That would not improve either of you.";
  }

  private strike(menace: Menace): string {
    if (!this.carried().some((it) => it.weapon)) return menace.unarmed;
    this.slain.add(menace.id);
    return menace.slain;
  }

  /**
   * LIGHT exists so that the obvious command gets an answer in voice instead of
   * dying at the parser. It solves nothing. It is not gated on sight: a hand in
   * a pocket knows what it finds there.
   */
  private light(noun: string): string {
    if (noun === "") return "Light what?";
    const target = this.resolve(noun);
    if (!target) return "You can't see any such thing.";
    if (isItem(target)) {
      if (target.light) return "It is already burning.";
      if (target.lightRefusal) return target.lightRefusal;
    }
    return "That isn't for lighting.";
  }

  // --- lookup ----------------------------------------------------------------

  private itemsHere(): Item[] {
    return [...this.itemIndex.values()].filter((it) => this.itemPlace.get(it.id) === this.room.id);
  }

  private carried(): Item[] {
    return [...this.itemIndex.values()].filter((it) => this.itemPlace.get(it.id) === "inventory");
  }

  /** Find an item (here or in hand), scenery, or the menace matching a noun phrase. */
  private resolve(noun: string): Item | Scenery | Menace | null {
    const menace = this.liveMenace();
    const candidates: Array<Item | Scenery | Menace> = [
      ...this.itemsHere(),
      ...this.carried(),
      ...this.room.scenery,
      ...(menace ? [menace] : []),
    ];

    // Exact phrase match wins.
    for (const c of candidates) {
      if (c.nouns.includes(noun)) return c;
    }
    // Otherwise, match any single word of the phrase against a noun.
    const words = noun.split(" ").filter(Boolean);
    for (const c of candidates) {
      if (words.some((w) => c.nouns.includes(w))) return c;
    }
    return null;
  }

  private findTalker(): Scenery | null {
    return this.room.scenery.find((s) => s.talk) ?? null;
  }
}

// --- helpers -----------------------------------------------------------------

function isWorld(x: World | Room): x is World {
  return "rooms" in x;
}

function isItem(x: Examinable): x is Item {
  return "start" in x;
}

function isScenery(x: Examinable): x is Scenery {
  return !("start" in x);
}

/** Whether a noun phrase names a thing: the whole phrase, or any word of it. */
function names(thing: Examinable, noun: string): boolean {
  if (thing.nouns.includes(noun)) return true;
  return noun.split(" ").some((w) => w !== "" && thing.nouns.includes(w));
}

function capitalize(s: string): string {
  return s.length === 0 ? s : s[0]!.toUpperCase() + s.slice(1);
}

/** End a quoted phrase with a period unless it already carries its own stop. */
function sentence(s: string): string {
  const trimmed = s.trim();
  return /[.!?]$/.test(trimmed) ? trimmed : trimmed + ".";
}

/** "brass lamp" -> "a brass lamp"; "oak" -> "an oak". */
function article(noun: string): string {
  const a = /^[aeiou]/i.test(noun) ? "an" : "a";
  return `${a} ${noun}`;
}

// The dark, and what comes out of it. Content declares the menace; these are
// the engine's own lines, for the hazard every dark room shares.
const DARK_LOOK = "It is pitch black.";
const DARK_WARNING = "It is pitch black. You are likely to be eaten by a quench.";
const DARK_DEATH = "The quench does not hurry. There is no need. You are dead.";
const DARK_MOVE = "You put out a hand. There is no wall where the wall was.";
const DARK_REFUSAL = "You can't see a thing.";
const DARK_ATTACK = "You swing at the dark. The dark takes no notice.";
const HEARTH_RETURN =
  "You wake at the fire in the Turning House, in the year you first came in by. " +
  "Nothing is missing but the walk.";

const HELP = [
  "This is a text adventure. You type; the House answers.",
  "",
  "Useful words:",
  "  LOOK (L)         see where you are",
  "  EXAMINE (X) it   look closer at a thing",
  "  TAKE / DROP it   pick things up, set them down",
  "  INVENTORY (I)    what you are carrying",
  "  LIGHT it         set a light going, if it will go",
  "  ATTACK it        when the room holds something that means you harm",
  "  WHEN             what year it is",
  "  SAY something    speak aloud",
  "  MARK something   leave a private note; READ MARK to find it",
  "  WAIT (Z)         let time pass",
  "  AGAIN (G)        do that again",
  "  QUIT             leave (the lamps stay lit)",
  "",
  "Directions are NORTH, SOUTH, EAST, WEST, UP, DOWN.",
  "Two more you will not need tonight: PAST and FUTURE.",
].join("\n");
