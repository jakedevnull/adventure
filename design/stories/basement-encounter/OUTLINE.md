# Basement Encounter

max_rooms: 6

## Story

### The story as the author wrote it

> An homage to Zork, there is a stair from the House down to the basement. If you go down
> without a light, you get lost and can't get back out. In a turn, if you don't have a lit
> light you get eaten by a Gru. If you don't have a weapon, the Gru attacks and kills you.
> If you do have a weapon, you can attack and kill the Gru.

### What the story is

There is a cellar under the Turning House, and there has been one in every age the House
has stood. The stair down is behind the bar, and it is open, and nobody stops you.

The cellar is dark in five of the six landings. Go down without a light and you are blind:
you cannot find the stair, you cannot find the wall you touched a moment ago, and within a
move something in the dark takes you. The Lettered Age has a name for it, from a bad
reading of an older word, and the name has stuck: a **quench**. In the oldest year the
quench is not a rumour. It is standing at the edge of your lamplight, and a lamp will hold
it off for exactly as long as a lamp holds anything off.

The way through is the Everwyn way: the light is not in the room you need it in. The brass
lamp on the table in 2099 BA has no wick and never will. The lamp that burns is on the sill
of the same House five thousand years later, where the landlady keeps one lit for someone
expected back and would only fill another if you took it. So you walk the years forward for
fire, and you carry the fire back. The weapon is likewise already in the world: a plain old
sword at the heart of the maze in 99 AA, put there by an earlier story, with one word cut
into the blade below the hilt.

With the lamp, the cellar becomes six rooms instead of one death: the same corner of the
same undercroft in six ages, which is this game's favourite trick and its best argument.
With the sword as well, the quench comes apart, and the lamplight reaches the far wall of
2099 BA for the first time in an age.

### The arc

**Open.** The House, the hatch behind the bar, a stair going down into the dark, and a
brass lamp on the table that looks like the answer and is not. Everything in the room tells
you not to go down. Going down anyway is the correct instinct and the wrong move, and it
costs one walk.

**Turn.** The player learns three things, in any order: that the dark under the House is
occupied; that the far end of the years keeps a lamp burning; and that there is a sword in
the maze. The 2099 AA cellar is the safe classroom — lit, swept, catalogued, with a placard
that names the quench and is wrong about nearly everything else.

**Resolve.** Lamp in one hand, sword in the other, back down the years to 2099 BA, down the
stair, and `ATTACK QUENCH`. After that the cellar is a place instead of a hazard, and the
years run its whole length: five thousand years of the same cellar, walkable end to end
underground.

### The way through, concretely

The route uses the existing world for both objects and adds no rooms outside the cellar.

```
NORTH                    → back-garden:2099-ba
FUTURE, FUTURE, FUTURE   → back-garden:99-aa
NORTH                    → maze-mouth:99-aa
NORTH                    → long-walk:99-aa
PAST                     → long-walk:99-ba
EAST                     → far-walk:99-ba
FUTURE                   → far-walk:99-aa
NORTH                    → maze-heart:99-aa
TAKE SWORD
SOUTH                    → far-walk:99-aa
PAST                     → far-walk:99-ba
WEST                     → long-walk:99-ba
SOUTH                    → maze-mouth:99-ba
SOUTH                    → back-garden:99-ba
SOUTH                    → turning-house:99-ba
FUTURE, FUTURE, FUTURE   → turning-house:2099-aa
TAKE BURNING LAMP
DOWN                     → cellar:2099-aa      (lit; read the placard)
UP
PAST ×5                  → turning-house       (2099 BA, the legacy id)
DOWN                     → cellar:2099-ba
ATTACK QUENCH
UP
```

`TAKE BURNING LAMP` rather than `TAKE LAMP`: the sill lamp and the player's own brass lamp
both answer to "lamp", and if the player is carrying the brass one the reply is ambiguous.

Everything above the `DOWN` was played through the real engine before this outline was
written, and works today. `TAKE SWORD` answers `Taken.`, the walk back ends in
`turning-house:2099-aa` with the sword in hand, and `TAKE BURNING LAMP` resolves to
`sill-lamp` and answers `She would only fill another one.` — which is the one line this
story turns into a yes.

**Harness caveat, and it bites.** `scripts/play.ts` drops the first command unless
`--expect` is passed (its argument filter drops index `expectIdx + 1`, which is `0` when
`--expect` is absent). Quote every route with `--expect <room id>`.

> as built: fixed, in its own commit before anything depended on it. The filter is gated on
> `expectIdx >= 0`, so a route quoted without `--expect` keeps its first command.
> `--expect` is still worth passing, because it makes the harness exit non-zero when a route
> ends somewhere it should not.

Once the lamp is in hand the whole cellar column is walkable: `DOWN` from any face of the
House, then `PAST` / `FUTURE` along the cellar itself, `2099 BA` to `2099 AA`.

### The beats, in order

1. **The hatch.** The common room of the Turning House gains one clause: a hatch behind the
   bar, propped open, steps going down. The existing `stair` scenery is the stair *up* to
   the guest rooms and stays exactly as it is; the way down is a new, separately named
   thing in every age.
2. **The first death.** The player goes down with the brass lamp, or with nothing, and gets
   the guide's own sentence back at them with our noun in it. One move later they are dead,
   and awake at the fire upstairs with everything they were carrying.
3. **The lit cellar.** In 2099 AA the cellar is lit and safe. It is the only face a
   lightless player survives, and it holds the placard: the word *quench*, a wrong etymology,
   a wrong reading of the mason's mark downstairs, and a sentence about what the old cellars
   were like which is, for once, correct.
4. **The lamp.** The sill lamp in 2099 AA becomes takeable and becomes a light source. The
   landlady said she would only fill another one; she meant it.
5. **The sword.** Already at `maze-heart:99-aa`. It gains one field and no new prose. The
   gardens outline warned against inviting the player to swing it because the parser had no
   verb. This story adds the verb.
6. **The column.** With light, the four middle cellars are rooms rather than deaths: wine
   laid down by an age certain it would be there to drink it; stores and a bell's clapper
   brought down out of the way of the Hush; a year of someone's life scratched by the steps
   in the Morning Country; a guild's brickwork closing off the old end in the Rekindling.
7. **The quench.** 2099 BA, lit, sword in hand. It comes apart without much comment.

### Places and eras, and what each is for

One place, `cellar`, one face per landing, entered by `DOWN` from the House above it and
leaving by `UP`. The cellar is under the common room in every age, so the underside of the
hearthstone is overhead in every age, warm in most of them.

- **2099 BA, the High Masonry.** Dry-laid footings larger than the House needs. The House is
  younger than its own cellar. The quench lives here and nowhere else.
- **1099 BA, the Long Noon.** Wine laid down by people sure of their own future, and a map
  of the House chalked on the wall by someone who had never been sober in it.
- **99 BA, the Hush.** Stores laid in against something nobody can name, and the bell's
  clapper carried down here so the bell cannot ring by accident.
- **99 AA, the Morning Country.** Somebody lived down here for a year. A tally by the steps
  stops at forty-one and does not say what it was counting.
- **1099 AA, the Rekindling.** Guild-stamped bottles, an iron bracket with no lamp in it,
  and a bricked arch where the old end used to start.
- **2099 AA, the Lettered Age.** Lit, swept, labelled, and open to the public. The placard.

### The cast

No new people. The only living thing the story adds is the quench, and it is not a person;
it is a `menace`, declared as data on one room, announced by the engine, examinable, and
killable exactly once. The landlady of 2099 AA already exists; if her `talk` line can carry
one more clause about the lamp without swelling, add it, and change nothing else about her.

### The items

New engine fields, existing items:

- **`lamp`** (`turning-house`, 2099 BA). Unchanged except for a `lightRefusal` so that
  `LIGHT LAMP` answers in voice instead of dying at the parser. It stays a red herring for
  the whole game. Its own description already says so.
- **`sill-lamp`** (`turning-house:2099-aa`). Becomes `takeable: true` and `light: true`. Its
  `takeRefusal` goes; the description ("burning, dented in three places and rubbed bright
  where a hand goes") stays exactly as written and is now the description of the object that
  saves the player's life.
- **`sword`** (`maze-heart:99-aa`). Gains `weapon: true`. No prose change.

New items, all in the cellar:

- **`cellar-placard`** (`cellar:2099-aa`, not takeable, readable). The word *quench*, its
  wrong etymology, and the museum's reading of the mason's mark in 2099 BA, which has the
  direction of the borrowing backwards.
- **`chalked-map`** (`cellar:1099-ba`, not takeable, readable). The Long Noon's cellar map.
  It puts the stair on the wrong wall. It is not a puzzle; it is a joke about an age.
- **`clapper`** (`cellar:99-ba`, takeable). A bell's clapper, out of its bell. It does
  nothing. It is the only takeable thing in the cellar and it is worth carrying anyway.

Load-bearing scenery: the **hearthstone** seen from below, in every face; the **footings**
and the **mason's mark** in 2099 BA; the **bricked arch** in 1099 AA; the **tally** in
99 AA; the **cellar steps** in all six, so that `EXAMINE STEPS` answers.

Item ids are unique world-wide, so none of `lamp`, `sword`, `coin`, `waymark`, `placard`,
`maze-placard`, `cased-coin`, `sill-lamp` may be reused.

### Tone

Zork's cellar, played straight, in Everwyn's voice. The famous line is delivered flat and
verbatim in shape, with our noun in it, because that is the homage and the writing guide
already quotes it as the model for how menace is stated. Nothing else nods at Zork: no
white house, no trophy case, no thief, no lamp timer, no maze of twisty passages. The
cellar is an inn's cellar and behaves like one.

Death is administrative. It is stated in one calm sentence, and the House takes you back
without comment. Nobody exclaims. The quench never speaks and is never described as
frightening; it is described by size and by patience, which is worse.

---

## Mechanics

Everything below is new engine work. It is written as data plus a small engine, in the
existing spirit: no room ids appear anywhere in `src/engine.ts`.

### New fields

`src/types.ts`:

```ts
/** A thing in a room that will kill the player if they stay. At most one per room. */
export interface Menace extends Examinable {
  /** Appended at the end of the first turn the player shares the room with it. */
  warning: string;
  /** Appended at the end of the second. The player dies. */
  kill: string;
  /** ATTACK, with a weapon in hand. */
  slain: string;
  /** ATTACK, with nothing in hand. */
  unarmed: string;
}

// Item
  /** Whether the thing burns. A burning thing lights the room it is in or the hands it is in. */
  light?: boolean;
  /** Whether the thing will kill a menace. */
  weapon?: boolean;
  /** In-voice reply to LIGHT for something that cannot be lit. */
  lightRefusal?: string;

// Room
  /** Whether the place has no light of its own. Without light here the player is blind. */
  dark?: boolean;
  /** What lives here. */
  menace?: Menace;

// World
  /** Where the dead wake. Defaults to `start`. */
  hearth?: string;

// Turn
  /** Set on the turn the player dies. Nothing consumes it yet; tests do. */
  died?: boolean;
```

`Menace` deliberately has no `start` field, so `isScenery` in `src/engine.ts` already
classifies it correctly and `EXAMINE QUENCH` works with no change to `examine`.

### Light

`hasLight()` is true when any item with `light: true` is **carried by the player or lying in
the current room**. Lying in the room counts, which removes the only deadlock this mechanic
could otherwise create: a player who drops the lamp in a dark room has lit the room, can see,
and can pick it up again. There is no fuel, no timer, and no `EXTINGUISH`. A burning thing
burns.

A room is **blind** when `room.dark && !hasLight()`.

### Blindness

When blind, the room is not described and is **not marked visited** (so the first lit visit
still gets the `look` text, not `lookAgain`). Commands that need eyes refuse in voice:

| command | reply |
|---|---|
| arriving (`GO`, `PAST`, `FUTURE` into a dark room) | *(no description; the hazard line below is the whole turn)* |
| `LOOK` | `It is pitch black.` |
| `GO`, `PAST`, `FUTURE` | `You put out a hand. There is no wall where the wall was.` |
| `EXAMINE`, `READ`, `TAKE`, `TALK` | `You can't see a thing.` |
| `ATTACK` | `You swing at the dark. The dark takes no notice.` |

`INVENTORY`, `WHEN`, `WAIT`, `SAY`, `MARK`, `DROP`, `AGAIN`, `HELP` and `QUIT` work as
normal. Nothing needs eyes.

> as built: `LIGHT` is in that second list, and the table above does not cover it. A hand in a
> pocket knows what it finds there, and `LIGHT LAMP` in the pitch dark is the exact moment the
> brass lamp's *There is no wick in it* has been waiting the whole game for. It still solves
> nothing.

**Being blind is fatal and is meant to be.** The author's "lost and can't get back out" is
implemented literally: no spatial exit and no stride works while blind, so the only way out
of a dark room is a light you already have. The resolution of the unwinnable state is that it
is not a state, it is a delay: the quench arrives on the next turn and the run continues from
the hearth. See *Death*, below, for why this is fair.

### The hazard clock

One counter, `danger`, reset to zero on every change of room and on death. After each
command (and never on the `QUIT` turn), the engine runs one step:

```
blind  = room.dark && !hasLight()
menace = room.menace, unless already slain

if (!blind && !menace)  danger = 0; nothing appended
else {
  danger += 1
  danger === 1  → append blind ? DARK_WARNING : menace.warning
  danger >= 2   → append blind ? DARK_DEATH   : menace.kill, then die
}
```

The step runs **after** the command resolves, so the turn you kill the quench is the turn
you survive, and the turn you walk out of the room is the turn you survive. Blind, `GO`
fails, so the counter reaches two and you die: one move of grace, exactly as the author
wrote it. Lit, with the quench, `UP` works, so an unarmed player can always flee.

Two clocks, one rule, and it is learnable in one death: **in a room that means you harm, you
get one move.**

### The exact lines

Engine constants, in the same place as `HELP` and the stride lines:

```
DARK_WARNING   It is pitch black. You are likely to be eaten by a quench.
DARK_DEATH     The quench does not hurry. There is no need. You are dead.
HEARTH_RETURN  You wake at the fire in the Turning House, in the year you first came in
               by. Nothing is missing but the walk.
```

The quench, declared on `cellar:2099-ba`:

```
id           quench
nouns        quench, thing, shape
description  It is the size of the dark it stands in, and the lamp does not improve on that.
warning      A quench stands at the edge of the lamplight. The lamp will hold it there for
             about as long as you would expect.
kill         The lamp holds it off for exactly as long as it holds it off. You are dead.
slain        You put the sword through it. It comes apart without much comment, and the
             lamplight reaches the far wall.
unarmed      You have nothing to fight it with. Your hands are noted, and dismissed.
```

`ATTACK`, elsewhere:

```
ATTACK (bare, nothing here)    There is nothing here that wants killing.
ATTACK <item or scenery>       That would not improve either of you.
ATTACK <nothing named>         Attack what?
```

`LIGHT`:

```
LIGHT (bare)                   Light what?
LIGHT <already burning>        It is already burning.
LIGHT <has lightRefusal>       (that item's lightRefusal)
LIGHT <anything else>          That isn't for lighting.
```

and the brass lamp's `lightRefusal`:

```
There is no wick in it. Whatever it was for, it was long ago.
```

`LIGHT` exists only so that the obvious command gets an answer in voice rather than
`I don't know the word "light".` It never solves anything.

### Death

The player dies. They do not lose the run and they do not lose their things.

```
<the kill line>

You wake at the fire in the Turning House, in the year you first came in by. Nothing is
missing but the walk.

<the hearth room, described>
```

Mechanically: `danger = 0`, `room = world.hearth ?? world.start`, inventory untouched,
`visited` untouched (so the hearth gives its `lookAgain`), `Turn.died = true`.

**Why this is fair.** The player is told four times before it can happen: the common room
says the hatch goes down into the dark, the cellar steps say it when examined, the landlady
says the brass lamp is no use, and the 2099 AA placard says what the old cellars were like.
The cost of ignoring all four is one walk, and the walk is the game. Nothing is consumed,
nothing is locked out, no object can be stranded, and the world after a death is exactly the
world before it minus the quench if you killed it. A Traveler who dies under the Turning
House wakes in the Turning House in the year they first came in by, which is the only place
in Everwyn that could be said to owe them that.

### Parser

`src/parser.ts`, two new verbs in the `Verb` union and the `VERBS` table:

```
attack: attack, kill, hit, fight, strike, stab, slay
light:  light
```

`ATTACK QUENCH WITH SWORD` parses to `noun: "quench with sword"`, which the existing
single-word fallback in `resolve` matches to the quench. Bare `ATTACK` targets the living
menace in the room if there is one. No indirect-object slot is added.

> as built: it does not, and the plan was wrong here. `resolve`'s single-word fallback walks
> carried items before the menace, and the sword is in hand by definition on that command, so
> the phrase resolved to the sword and the reply was *That would not improve either of you.*
> `attack` now gives the living menace first refusal on the noun phrase, and falls through to
> `resolve` only if the phrase does not name it. `resolve` itself is unchanged apart from
> having the menace appended to its candidates, so EXAMINE, TAKE and TALK behave as planned.
> Covered by *attacking the quench with a sword slays it* in `test/dark.test.ts`.

`run()`'s switch in `src/engine.ts` is exhaustive over `Verb` with no `default`, so
`npm run typecheck` fails until both verbs are handled. That is the intended hook.

### Validation and the harness

`validateWorld` gains two checks:

- a menace id must not collide with any item id or any other menace id;
- if any room is `dark`, the world must contain at least one takeable item with
  `light: true`. A dark world with no lamp in it is an authoring bug, and the engine should
  refuse to start rather than ship an unwinnable game.

`movesFrom` in `src/world.ts` is **not** changed. `npm run eval:reach` stays a pure topology
check: it walks exits and strides and ignores what the player is carrying, which is why the
room plan below states the carrying requirement for every room. Gating the harness on
inventory would make it a solver, and it is not one. It may usefully print `(dark)` beside
those rooms in its markdown report; that is presentation only and must not affect pass/fail.

> as built: all of it. `movesFrom` is untouched, and `eval-reach.ts` appends `(dark)` to a
> room's line in the markdown report only. Five of the twenty-six lines carry it. The `pass`
> flag is computed from `validateWorld` and `reachability.unreachable` exactly as before.

### Files the generator touches

New: `src/content/cellar-2099-ba.ts` and five siblings; registered in `src/content/index.ts`.

Changed: `src/types.ts`, `src/engine.ts` (state, hazard step, blindness, `ATTACK`, `LIGHT`,
death, `HELP`), `src/parser.ts`, `src/world.ts` (validation), the six `turning-house-*.ts`
faces (a `down` exit, a cellar-steps scenery, one clause in `look`),
`turning-house-2099-aa.ts` (the sill lamp), `maze-heart-99-aa.ts` (the sword).

Tests to add alongside: blind arrival prints the pitch-black line and nothing else; blind
movement refuses; two blind turns kill and land the player at the hearth with their
inventory intact; a lamp in hand makes a dark room describe itself; a lamp on the floor of a
dark room lights it; the quench warns then kills; `ATTACK` unarmed refuses and the clock
keeps running; `ATTACK` armed slays it and the room is safe forever after; `LIGHT LAMP`
answers in voice. `test/engine.test.ts` builds its world from `turning-house` with `exits: {}`,
so adding a `down` exit there is safe, but the opening of the `look` text must keep matching
`/The common room, low and warm/`.

> as built: all nine, and eight more, in `test/dark.test.ts` — its own file, over a fixture
> world (a hall with a burning lamp, a brass one that will never burn, a sword and a stone,
> over a pit that is dark, occupied, or both) rather than over shipped content, so the tests
> do not have to be rewritten every time a room's prose changes. The extra eight: the verbs
> that need eyes each refuse in voice; the verbs that do not still work; a blind visit does
> not spend the room's first `look`; the clock resets on leaving, so an unarmed player can
> always flee; the quench is examinable while it lives; bare `ATTACK` finds it; `ATTACK`
> answers in voice where there is nothing to kill; `QUIT` does not run the clock. Two more
> in `test/world.test.ts` cover the new validation. `test/engine.test.ts` is unchanged and
> its 17 tests still pass: 36 before, 55 after.

Build order: the engine and `cellar:2099-ba` land together, because that room is the only
one that exercises the whole mechanic; the sill lamp and the sword change with it. The other
five cellars are ordinary rooms after that.

---

## Rooms

- [x] cellar · 2099 BA (the High Masonry) — the encounter: footings older than the House, the hearthstone overhead, and the quench
      carry: **dark.** A lit light to see, a weapon to survive. Lightless, the player dies in two turns. Lit and unarmed, they must leave within one move. `UP` → `turning-house`; time `{past: false, future: true}`.
      as built: `src/content/cellar-2099-ba.ts`. `dark: true`, `menace: quench` with the four lines
      as written in *The exact lines*. `UP` → `turning-house`; time `{past: false, future: true}`.
      No items. Scenery: `cellar-footings`, `masons-mark`,
      `cellar-hearthstone`, `cellar-steps`, `far-wall` — the far wall is named in `look` ("out past
      where the light reaches") so it answers to EXAMINE, and the quench's `slain` line pays it off.
      The mason's mark is described as a name and nothing else; 2099 AA's placard is what gets it
      wrong. `lookAgain` does not mention the far wall, so the slain line stays true afterwards.
      Landed with the engine, per the build order. Two things went differently from the plan, both
      recorded under *Mechanics*: `ATTACK QUENCH WITH SWORD` needed the menace to get first refusal
      on the noun phrase, and `LIGHT` is not gated on sight.
- [x] cellar · 1099 BA (the Long Noon) — wine laid down by an age certain of itself, and a chalked map that is wrong about the stair
      carry: **dark.** A lit light. No menace; with light it is safe to stand in. `UP` → `turning-house:1099-ba`; time `{past: true, future: true}`.
      as built: `src/content/cellar-1099-ba.ts`. `dark: true`, no menace, exits and time as planned.
      Item `chalked-map` (not takeable, readable): EXAMINE gives the hand it was drawn in,
      READ gives the House with the stair on the wrong wall. Scenery: `wine`, `cellar-hearthstone`,
      `cellar-footings`, `cellar-steps`. The footings carry the same description shape in all six
      faces, which is the persistence beat doing its own work. `turning-house:1099-ba` gained
      `down`, a `cellar-hatch` scenery, and one clause of `look` ("a hatch in the floor stands open
      on steps down to the wine").
- [x] cellar · 99 BA (the Hush) — stores laid in against something nobody can name, and the bell's clapper brought down out of the way
      carry: **dark.** A lit light. No menace. `UP` → `turning-house:99-ba`; time `{past: true, future: true}`.
      as built: `src/content/cellar-99-ba.ts`. Item `clapper` (takeable, readable) — the only
      takeable thing in the column, and it does nothing. Its description places it "two floors
      under the bell it belongs to", which is all that is said: the keeper upstairs stands with the
      bell-rope knotted at her shoulder and has not pulled it, and the two facts are left a floor
      apart for the player to put together. Scenery: `stores`, `cellar-hearthstone` (barely warm
      this age — the fire above is banked), `cellar-footings`, `cellar-steps`.
      `turning-house:99-ba` gained `down`, `cellar-hatch`, and the clause "The hatch to the cellar
      is open, and it is the only thing in this House that is."
- [x] cellar · 99 AA (the Morning Country) — a year of somebody's life spent down here, tallied by the steps and stopped at forty-one
      carry: **dark.** A lit light. No menace. `UP` → `turning-house:99-aa`; time `{past: true, future: true}`.
      as built: `src/content/cellar-99-aa.ts`. **Deviation:** the tally is a non-takeable *item*
      with a `read`, not scenery, because scenery has no `read` and READ TALLY deserved better than
      "There's nothing to read there." Same shape as `waymark` in the House above, and for the same
      reason. Id `cellar-tally`; READ gives "Forty-one. It does not say what it was counting, and
      it stops rather than finishes." Scenery: `bed-frame`, `small-fires`, `cellar-hearthstone`
      (warm again, "which it was not for whoever laid those fires" — the Gap, in one clause),
      `cellar-footings` ("Nothing down here needed putting back"), `cellar-steps`.
      `turning-house:99-aa` gained `down`, `cellar-hatch` ("Nobody rebuilt it. Nobody had to."),
      and the clause "the hatch in the floor is open on steps older than the wall above them".
- [x] cellar · 1099 AA (the Rekindling) — the guild's bottles, an empty lamp bracket, and a bricked arch where the old end started
      carry: **dark.** A lit light. No menace. `UP` → `turning-house:1099-aa`; time `{past: true, future: true}`.
      as built: `src/content/cellar-1099-aa.ts`. No items. Scenery: `guild-bottles`,
      `lamp-bracket` ("empty. The guild has a form for the lamp"), `bricked-arch` ("What it closes
      off is not in the book"), `cellar-hearthstone`, `cellar-footings`, `cellar-steps`. The empty
      bracket rhymes with the empty bracket on the House's own sill in this age, which 2099 AA
      fills; no room text depends on the player noticing. `turning-house:1099-aa` gained `down`,
      `cellar-hatch`, and the clause "behind the counter a hatch stands open on the cellar steps".
- [x] cellar · 2099 AA (the Lettered Age) — lit, swept and labelled: the placard that names the quench and gets everything else wrong
      carry: **not dark.** Nothing. The only face a lightless player survives, and the room that teaches the word. `UP` → `turning-house:2099-aa`; time `{past: true, future: false}`.
      as built: `src/content/cellar-2099-aa.ts`. `dark` omitted, so this face is lit and safe with
      nothing in hand. Item `cellar-placard` (not takeable, readable), in the caps voice the other
      placards in this House use: "THE UNDERCROFT. THE WORD QUENCH IS A MISREADING OF AN OLDER WORD
      FOR A SNUFFER AND HAS NOTHING TO DO WITH THE DARK. THE NAME CUT IN THE FOOTING IS COPIED FROM
      A SWORD OF THE SAME PERIOD, NOW LOST. BEFORE LAMPS, NOBODY CAME DOWN HERE ALONE." Two of the
      four sentences are wrong, the third is the borrowing backwards, and "NOW LOST" is read by a
      player who is usually holding it. Scenery: `vault-lamps` ("Filled every morning by whoever
      fills the one on the sill upstairs"), `masons-mark` (the same mark as 2099 BA, still in the
      footing, now with a brass label under it), `cellar-hearthstone`, `cellar-footings`,
      `cellar-steps`. `turning-house:2099-aa` gained `down`, `cellar-hatch`, and the clause "A
      hatch behind the bar is open on the way down, and there is a placard about that too."
      **Deviation:** the keeper's `talk` line takes one more clause — *"Take it if you're going
      down. I'd only fill another."* The sill lamp is takeable now and has no `takeRefusal` to
      carry "She would only fill another one", which the outline calls the one line this story
      turns into a yes. It moves to her mouth and becomes the hint.

## Through-lines

- **The lamp that is not the answer.** The brass lamp in `turning-house` (2099 BA) has no
  wick and never gets one. The lamp that works is `sill-lamp` in `turning-house:2099-aa`,
  five thousand years forward, and it has to be carried back. Rooms: `turning-house`,
  `turning-house:2099-aa`, and every dark cellar. — **built.** `lamp` keeps
  `takeable: true` and gains only `lightRefusal: "There is no wick in it. Whatever it was
  for, it was long ago."`, which is the reply to `LIGHT LAMP` — including in the pitch dark
  of `cellar:2099-ba`, one turn before the quench takes them. `sill-lamp` is
  `takeable: true, light: true` and its `takeRefusal` is gone; the keeper says the refusal
  instead, as an offer. The two answer to different nouns (`lamp`/`brass lamp` against
  `burning lamp`/`lit lamp`), so a player carrying both can still name either.
- **The sword from the maze.** `sword` at `maze-heart:99-aa`, left there by *The Gardens
  Behind the House* against exactly this, gains `weapon: true` and no new prose. Rooms:
  `maze-heart:99-aa`, `cellar:2099-ba`. — **built.** One field, no prose change. Its `read`
  ("One word is cut into the blade below the hilt … It reads as a name") is what the 2099 AA
  placard mishandles.
- **The hearthstone from below.** The cellar is under the common room in every age, so the
  underside of the hearthstone is overhead in every face, warm where the fire is lit above
  it. `cased-coin` in `turning-house:2099-aa` already reads FOUND UNDER THE HEARTHSTONE.
  The player who has read the case and then stood under the stone in 2099 BA knows where
  that coin came from; the museum does not. No room text depends on the player having done
  either. Rooms: all six cellars, `turning-house:2099-aa`. — **built.** Scenery id
  `cellar-hearthstone` in all six faces, and the temperature tracks the fire above it:
  warm in 2099 BA, 1099 BA, 99 AA, 1099 AA and 2099 AA; "barely warm" in 99 BA, where the
  keeper has banked the fire to a red seam against the night.
- **The mason's mark and the placard.** A name cut small in a footing in `cellar:2099-ba`;
  the placard in `cellar:2099-aa` matches it to the word on the sword and has the direction
  of the borrowing backwards. Wrong answers are canon; evidence is not. Rooms:
  `cellar:2099-ba`, `cellar:2099-aa`, `maze-heart:99-aa`. — **built.** Scenery id
  `masons-mark` in both faces of the cellar: in 2099 BA it is "on the one course that was
  never going to be looked at"; in 2099 AA it is the same cut with "a brass label under it
  that is very sure whose it is". The placard's clause is THE NAME CUT IN THE FOOTING IS
  COPIED FROM A SWORD OF THE SAME PERIOD, NOW LOST. Nothing anywhere corrects it.
- **One place, six ages, one title.** Every face is titled *The Cellar*. With the lamp the
  column strides end to end, `2099 BA` to `2099 AA`, underground. Rooms: all six. —
  **built,** and played: after `TAKE BURNING LAMP` in 2099 AA, `DOWN` then `PAST` ×5 lands
  in `cellar:2099-ba` without surfacing. Time flags are `{past: false, future: true}` at
  2099 BA, both at the four middles, `{past: true, future: false}` at 2099 AA.

## Blockers
