# A Brief Tour of the Turning House

max_rooms: 6

## Story

The Turning House stands at its crossroads in every age, kept by the same stubborn
family, and tonight the landlady of 2099 BA has decided you should see it. Not told —
shown. She has kept this fire a long time and knows what you are; the years run from her
common room, and she says so plainly for once.

This is a short walk through the House across space and time. The player steps outside
into the yard at the crossroads, where the High Roads are still new and already meant to
outlast everyone, and comes back in. Then the years: the player strides forward through
the House's own faces — the Long Noon, when the inn is loud and the wine is good and
nobody is worried about anything; the Hush, when the bells are ringing and the common
room is quiet and the landlady of that age keeps looking at the door — and, if the House
allows it, across the Gap to the Morning Country, where the inn is half ruin and wholly
open, a lamp burning in the window for someone expected to return.

Every face should be recognizably the same room: the beams, the long table, the stair, a
fire. What changes is the age around it — the people, the objects, what's said and what
isn't. The unlit brass lamp from the 2099 BA common room is the through-line: the
landlady presses it on you before you go. Carry it forward. Where it finally burns is the
end of the tour.

The tour should be walkable in a few minutes and should always lead back to the start.
The player's goal is simple: see the House in its ages, return to the landlady, and tell
her where the lamp was lit. She will not be surprised.

Tone: dry on the surface, deep underneath. Let the ages speak through nouns and what
people say, never through exposition. The narrator is never sentimental; the world is
allowed to be.

### The arc

- **Open — the charge (2099 BA, the High Masonry).** The player draws breath in the
  common room of the Turning House, the game's front door. The landlady is the one who
  keeps this fire; she does not ask your business because she already knows what you are.
  Tonight she means to show you the House rather than tell you about it. She takes the
  unlit brass lamp from the long table and presses it on you: carry it. This is the hub;
  every leg of the tour returns here.
- **Turn 1 — the yard (2099 BA).** The player steps out the door into the yard at the
  crossroads. The High Roads are newly laid and already built to outlast their makers. A
  short spatial excursion, out and back — the only step the tour takes on foot rather
  than through the years. Then back inside.
- **Turn 2 — the Long Noon (1099 BA).** The player strides forward. The same room, at its
  loudest: the inn is full, the wine is good, and nobody is worried about anything. A
  golden, complacent face of the House. The lamp rides in your pack, still unlit.
- **Turn 3 — the Hush (99 BA).** Stride forward again. The same room gone quiet: bells
  are ringing outside against something no one can name, the common room has emptied, and
  the landlady of that age keeps looking at the door. Same beams, same table, colder.
- **Resolve — the Morning Country (99 AA).** Stride forward once more; the step from 99
  BA carries clean over the Gap to 99 AA. The House is half ruin and wholly open, no bar
  on the door and no need for one. A lamp burns in the window for someone expected to
  return — and it is the brass lamp you have carried, lit at last. This is the end of the
  tour: where the lamp finally burns.
- **Return.** The tour always leads back to the start. The player strides back through the
  years — 99 BA, 1099 BA, 2099 BA — to the landlady who sent them out. The goal is to
  tell her where the lamp was lit: the Morning Country, across the Gap. She will not be
  surprised; she kept the fire, and she knew.

### Places and eras this tour touches

- **turning-house** — the inn's common room, the House's own face, shown in four eras:
  2099 BA (the High Masonry, the start and hub), 1099 BA (the Long Noon), 99 BA (the
  Hush), and 99 AA (the Morning Country, the end). The 2099 BA room already exists in the
  engine and keeps its legacy id `turning-house`; the others are new rooms with ids
  `turning-house:<landing-slug>`. Time strides carry the player forward and back along
  this chain: 2099 BA → 1099 BA → 99 BA → (Gap) → 99 AA, two-way, so the tour returns to
  the start.
- **crossroads** — the yard outside the door, shown only in 2099 BA. Reached by a spatial
  exit from the 2099 BA common room and returned from the same way. Its work is the High
  Roads: new-laid and already meant to outlast everyone, the persistence note stated in
  stone before the player ever touches the years.

### What the ages should say through their nouns

Do not narrate history. Let each face carry its age in objects and in what the keeper of
that age does or does not say. The Long Noon: a crowded board, spilled wine, good maps
nowhere in sight, an easy landlady with no time for you. The Hush: bells, an empty room,
a barred door watched too often, a keeper who answers the door's silence instead of you.
The Morning Country: a fallen roof-beam let be, an open threshold, ruins nobody can read
including the House's own, and the lit lamp in the window. Every era keeps the beams, the
long table, the stair, and a fire — the constants are the point.

### Tone notes (from the issue, binding)

Dry on the surface, deep underneath. The ages speak through nouns and dialogue, never
through exposition. The narrator is never sentimental; the world is allowed to be. The
notes this tour sounds, from `design/UNIVERSE.md` §6: **persistence** (the House and the
road outlast every age that passes through them), **the forgotten thing** (the Morning
Country burns a lamp for someone expected to return, coping with an absence it cannot
name), and **the traveler's melancholy** (to walk these faces is to love a House full of
people already gone and not yet born).

## Rooms

- [x] turning-house · 2099 BA (the High Masonry) — start and hub; the landlady presses the unlit brass lamp on you and sends you to see the House; every leg returns here
  - as built: legacy id `turning-house`; extended, not replaced. `time.future: true` (FUTURE → `turning-house:1099-ba`), `time.past: false` (oldest landing, declines in voice). `exits: { out: "crossroads:2099-ba" }`. The landlady's `talk` now sets the goal ("Take the lamp with you… tell me where it burns"); door text opened onto the yard. Lamp/bread/coin unchanged; lamp still `start: "room"`, unlit, the through-line's origin. `engine.test.ts` retargeted to the assembled `world` (the room is no longer a valid one-room world once it opens FUTURE).
- [x] crossroads · 2099 BA (the High Masonry) — the yard at the door; the High Roads new and already meant to outlast everyone; a spatial step out and back
  - as built: `crossroads:2099-ba` in `src/content/crossroads-2099-ba.ts`. `exits: { in: "turning-house" }`; time both `false` (a foot excursion, not a stride). Scenery: roads ("Cut this year, and meant for a thousand"), milestone ("distances to towns that are not built yet"), house, door, night — the persistence note stated in stone before any era is touched. No items. Reached by OUT from the hub, returned by IN.
- [x] turning-house · 1099 BA (the Long Noon) — the same room at its loudest: full board, good wine, nobody worried; the lamp still unlit
  - as built: `turning-house:1099-ba` in `src/content/turning-house-1099-ba.ts`. `time.past: true` (→ `turning-house`, 2099 BA) and `time.future: true` (→ `turning-house:99-ba`); no spatial exits (the yard is 2099 BA only). Constants kept: black beams, long table, stair, fire — each noted as "the same". Age carried by the crowd, spilled wine, and the absent maps ("the roads are new enough that everyone still trusts them"); the landlady of this age brushes past ("Later, love"). No lamp item here — the brass lamp rides in the player's inventory, still unlit.
- [x] turning-house · 99 BA (the Hush) — the same room gone quiet: bells ringing, the common room empty, the keeper watching the door
  - as built: `turning-house:99-ba` in `src/content/turning-house-99-ba.ts`. `time.past: true` (→ `turning-house:1099-ba`) and `time.future: true` — and since `World.landings` has no year-0 entry, the FUTURE stride from 99 BA crosses the Gap clean to `turning-house:99-aa` (the next landing). No spatial exits. Constants kept: beams, table, stair, low fire (all "the same"). Age carried by the bells ("against something coming"), the barred-and-rebarred door, the empty table, and the keeper who answers the door instead of you ("Did you bar it behind you," she says, to the door).
- [x] turning-house · 99 AA (the Morning Country) — the same room half ruin and wholly open; the carried brass lamp burns in the window here; the tour's end
  - as built: `turning-house:99-aa` in `src/content/turning-house-99-aa.ts`. `time.past: true` (→ `turning-house:99-ba`, back over the Gap) and `time.future: false` (1099 AA is not built in this tour; the tour ends here and turns home). No spatial exits. The look narrates the payoff: a fallen roof-beam let be, a doorless threshold with grass in the sill, the table's own inscription worn past reading, and in the window the brass lamp burning, "the one you carried". Constants kept: the same table, a swept fire, the drystone. The keeper is absent ("someone tends this place and is not here").
  - engine note (not a blocker): the engine has no LIGHT verb and no per-room item state, so the lamp's lighting is authored in this room's text (DESIGN §4.4 authored era-states), not simulated. The player carries the `lamp` item in; the room and its `window` scenery narrate it lit. Examining the carried item still shows its static "unlit" line — a known limitation, so the payoff is delivered through the room look, `lookAgain`, and `X WINDOW`.

Room ids: the 2099 BA common room keeps its legacy id `turning-house`; the yard is
`crossroads:2099-ba`; the later faces are `turning-house:1099-ba`, `turning-house:99-ba`,
`turning-house:99-aa`. Five rooms, one under the cap of six.

## Through-lines

- **The brass lamp (item `lamp`)** — begins unlit on the long table in `turning-house`
  (2099 BA), where it already exists in the engine; the landlady presses it on the player
  before the tour. Carried forward through the Long Noon and the Hush, still unlit. In the
  Morning Country (99 AA) it is lit — the lamp burning in the window for someone expected
  to return is this lamp. The player carries the fact of it back and tells the 2099 BA
  landlady where it burned. This is the whole spine of the tour. — built:
  `lamp` starts `start: "room"`, unlit, on the long table in `turning-house` (2099 BA); the
  landlady's `talk` presses it on the player and sets the goal. It rides in inventory (no
  lamp item in the 1099 BA / 99 BA faces), still unlit, and in `turning-house:99-aa` the
  room text burns it in the window as "the one you carried". The return beat is the engine's
  `SAY` reply — the landlady "nods, as if she has heard it before" (she is not surprised).
  Lighting is authored text, not engine state (see the 99 AA engine note).
- **The House's one face across eras** — the beams, the long table, the stair, and a fire
  persist unchanged in every `turning-house` room; only the people, the objects, and what
  is said or unsaid change. The four faces form a two-way FUTURE/PAST chain
  (2099 BA → 1099 BA → 99 BA → 99 AA, the last stride crossing the Gap), so the player can
  walk out to the end and back to the start. — built: the FUTURE/PAST chain runs both ways
  end to end (verified: FUTURE×3 reaches 99 AA, PAST×3 returns to the start); every face
  keeps the black beams, the long table, the stair, and a fire, each marked "the same".
- **The High Roads / the crossroads** — the yard (`crossroads:2099-ba`) exists only in
  2099 BA for this tour, reached by a spatial out-and-back from the start room. The roads'
  persistence, stated once outside in stone, is the note the whole House later plays; it
  may be referenced from inside the later faces but is not re-entered. — built: OUT from
  `turning-house` reaches the yard, IN returns; the roads/milestone carry the persistence
  note. The later faces keep the `road` scenery inside but offer no OUT exit.

## Blockers
