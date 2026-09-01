import { test } from "node:test";
import assert from "node:assert/strict";
import type { Room, World } from "../src/types.ts";
import { Game } from "../src/engine.ts";

// The dark, the thing in it, and the two verbs that answer it. A hall with a
// burning lamp, a brass one that will never burn, a sword and a stone, over a
// pit that is dark, occupied, or both.

function room(overrides: Partial<Room> & Pick<Room, "id" | "place" | "landing">): Room {
  return {
    title: overrides.id,
    age: "an age",
    look: `You are in ${overrides.id}.`,
    items: [],
    scenery: [],
    time: { past: false, future: false },
    ...overrides,
  };
}

const MENACE = {
  id: "quench",
  nouns: ["quench", "thing"],
  description: "It is the size of the dark it stands in.",
  warning: "A quench stands at the edge of the lamplight.",
  kill: "The lamp holds it off for exactly as long as it holds it off. You are dead.",
  slain: "You put the sword through it. It comes apart without much comment.",
  unarmed: "You have nothing to fight it with. Your hands are noted, and dismissed.",
};

function build(pit: Partial<Room>): World {
  return {
    start: "hall:2099-ba",
    landings: ["2099 BA", "2099 AA"],
    rooms: [
      room({
        id: "hall:2099-ba",
        place: "hall",
        landing: "2099 BA",
        lookAgain: "The hall again.",
        exits: { down: "pit:2099-ba" },
        items: [
          {
            id: "lamp",
            nouns: ["burning lamp", "lamp"],
            description: "A lamp, burning.",
            takeable: true,
            light: true,
            start: "room",
          },
          {
            id: "brass-lamp",
            nouns: ["brass lamp", "brass"],
            description: "A brass lamp, unlit.",
            takeable: true,
            lightRefusal: "There is no wick in it. Whatever it was for, it was long ago.",
            start: "room",
          },
          {
            id: "sword",
            nouns: ["sword"],
            description: "A plain old sword.",
            takeable: true,
            weapon: true,
            start: "room",
          },
          { id: "stone", nouns: ["stone"], description: "A stone.", takeable: true, start: "room" },
        ],
      }),
      room({
        id: "pit:2099-ba",
        place: "pit",
        landing: "2099 BA",
        lookAgain: "The pit again.",
        time: { past: false, future: true },
        exits: { up: "hall:2099-ba" },
        ...pit,
      }),
      room({ id: "pit:2099-aa", place: "pit", landing: "2099 AA" }),
    ],
  };
}

/** A dark, empty pit. */
const darkGame = () => new Game(build({ dark: true }));
/** A lit pit with a quench in it. */
const menacedGame = () => new Game(build({ menace: MENACE }));
/** One command typed on the first turn of blindness, and its reply. */
function blindReply(command: string): string {
  const g = darkGame();
  g.handle("down");
  return g.handle(command).text;
}

test("arriving blind prints the pitch-black line and nothing else", () => {
  const g = darkGame();
  assert.equal(g.handle("down").text, "It is pitch black. You are likely to be eaten by a quench.");
  assert.equal(g.where(), "pit:2099-ba");
});

test("blind, no exit and no stride works", () => {
  assert.match(blindReply("up"), /^You put out a hand\. There is no wall where the wall was\./);
  assert.match(blindReply("future"), /^You put out a hand\. There is no wall where the wall was\./);
});

test("blind, the verbs that need eyes refuse in voice", () => {
  assert.match(blindReply("examine lamp"), /^You can't see a thing\./);
  assert.match(blindReply("read stone"), /^You can't see a thing\./);
  assert.match(blindReply("take stone"), /^You can't see a thing\./);
  assert.match(blindReply("talk to nobody"), /^You can't see a thing\./);
  assert.match(blindReply("attack"), /^You swing at the dark\. The dark takes no notice\./);
});

test("blind, the verbs that do not need eyes work as normal", () => {
  const g = darkGame();
  g.handle("take stone");
  g.handle("down");
  assert.match(g.handle("inventory").text, /stone/);
});

test("two blind turns kill, and the dead wake at the hearth carrying everything", () => {
  const g = darkGame();
  g.handle("take stone");
  g.handle("down");
  const turn = g.handle("look");
  assert.match(turn.text, /^It is pitch black\.\n/);
  assert.match(turn.text, /The quench does not hurry\. There is no need\. You are dead\./);
  assert.match(turn.text, /You wake at the fire in the Turning House, in the year you first came in by\./);
  assert.equal(turn.died, true);
  assert.equal(g.where(), "hall:2099-ba");
  assert.match(g.handle("inventory").text, /stone/);
});

test("a blind visit does not spend the room's first look", () => {
  const g = darkGame();
  g.handle("down");
  g.handle("look"); // dies; back in the hall
  g.handle("take lamp");
  assert.match(g.handle("down").text, /You are in pit:2099-ba\./);
});

test("a lamp in hand makes a dark room describe itself, and keeps describing it", () => {
  const g = darkGame();
  g.handle("take lamp");
  const arrival = g.handle("down").text;
  assert.match(arrival, /You are in pit:2099-ba\./);
  assert.doesNotMatch(arrival, /pitch black/);
  g.handle("wait");
  g.handle("wait");
  assert.equal(g.where(), "pit:2099-ba");
});

test("a lamp on the floor of a dark room lights it, and can be picked up again", () => {
  const g = darkGame();
  g.handle("take lamp");
  g.handle("down");
  assert.equal(g.handle("drop lamp").text, "Dropped.");
  assert.match(g.handle("look").text, /The pit again\./);
  assert.equal(g.handle("take lamp").text, "Taken.");
  assert.match(g.handle("up").text, /You are in hall:2099-ba\./);
});

test("the quench warns, and then kills", () => {
  const g = menacedGame();
  assert.match(g.handle("down").text, /A quench stands at the edge of the lamplight\.$/);
  const turn = g.handle("look");
  assert.match(turn.text, /The lamp holds it off for exactly as long as it holds it off\. You are dead\./);
  assert.equal(turn.died, true);
  assert.equal(g.where(), "hall:2099-ba");
});

test("the clock resets on leaving, so an unarmed player can always flee", () => {
  const g = menacedGame();
  g.handle("down");
  assert.match(g.handle("up").text, /You are in hall:2099-ba\./);
  assert.equal(g.where(), "hall:2099-ba");
  assert.match(g.handle("down").text, /A quench stands at the edge of the lamplight\./);
});

test("attacking the quench unarmed refuses, and the clock keeps running", () => {
  const g = menacedGame();
  g.handle("down");
  const turn = g.handle("attack quench");
  assert.match(turn.text, /^You have nothing to fight it with\. Your hands are noted, and dismissed\./);
  assert.equal(turn.died, true);
  assert.equal(g.where(), "hall:2099-ba");
});

test("attacking the quench with a sword slays it, and the room is safe after", () => {
  const g = menacedGame();
  g.handle("take sword");
  g.handle("down");
  assert.equal(
    g.handle("attack quench with sword").text,
    "You put the sword through it. It comes apart without much comment.",
  );
  g.handle("wait");
  g.handle("wait");
  assert.equal(g.where(), "pit:2099-ba");
  assert.equal(g.handle("examine quench").text, "You can't see any such thing.");
  assert.equal(g.handle("attack").text, "There is nothing here that wants killing.");
});

test("the quench is examinable while it lives", () => {
  const g = menacedGame();
  g.handle("down");
  assert.match(g.handle("x quench").text, /the size of the dark it stands in/);
});

test("bare ATTACK finds the menace in the room", () => {
  const g = menacedGame();
  g.handle("take sword");
  g.handle("down");
  assert.match(g.handle("attack").text, /comes apart/);
});

test("attack answers in voice where there is nothing to kill", () => {
  const g = menacedGame();
  assert.equal(g.handle("attack").text, "There is nothing here that wants killing.");
  assert.equal(g.handle("attack sword").text, "That would not improve either of you.");
  assert.equal(g.handle("attack dragon").text, "Attack what?");
});

test("light answers in voice and never solves anything", () => {
  const g = menacedGame();
  assert.equal(g.handle("light").text, "Light what?");
  assert.equal(g.handle("light lamp").text, "It is already burning.");
  assert.equal(
    g.handle("light brass lamp").text,
    "There is no wick in it. Whatever it was for, it was long ago.",
  );
  assert.equal(g.handle("light stone").text, "That isn't for lighting.");
  assert.equal(g.handle("light dragon").text, "You can't see any such thing.");
});

test("quitting in the dark does not run the clock", () => {
  const g = darkGame();
  g.handle("down");
  const turn = g.handle("quit");
  assert.equal(turn.quit, true);
  assert.equal(turn.died, undefined);
});
