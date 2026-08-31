# The Gardens Behind the House

max_rooms: 14

## Story

### The story as the author wrote it

> You can leave the Turning House out the back and enter the gardens. It might start out
> as a lovely stroll, but you soon get caught in a hedge maze. Inside it is is the sword
> you need for the rest of this adventure… if you can find it and get out. A very little
> bit of time travel is required to successfully obtain the sword.

### What the story is

The Turning House has a back door, and behind it a garden that has been a garden in every
age. The player walks out of the world's first room into the second thing the House owns:
a walled plot with a well in it. The stroll is the first half of the story, and it is a
stroll through time as much as through a garden. The same ground is a kitchen plot under
the High Masonry, a fashionable puzzle newly pegged out under the Long Noon, a clipped and
kept yew maze in the Hush, a black wreck in the Morning Country, an allotment by the canal
in the Rekindling, and a mown reconstruction on a museum lawn in the Lettered Age. Only
the well is in all six, and nobody built the well to last.

The second half is the maze. It stands in two ages only: the Hush, when it is kept, and
the Morning Country, when it is a ruin nobody can read. A sword lies at its heart, put
there during the Hush by the woman who clipped the hedge, on the theory that a maze whose
plan lives in one head is the safest cupboard in the kingdom. She was right for longer
than she meant. Nobody came for it.

The player wants the sword because the rest of the adventure wants it. Getting it takes
one honest walk, one stride Before, one stride After, and one stride Before again. Neither
age gets you to the heart alone. The kept maze has open walks and solid walls; the ruined
maze has broken walls and closed walks. The route is the two of them laid over each other.

### The arc

**Open.** Out the back of the House into a garden, in whatever age the player is standing
in. It is pleasant. There is a well, an orchard, a wall. Time runs here, and the garden
rewards striding: six faces of one plot, and the maze appearing and going again.

**Turn.** In the Hush, or in the Morning Country, there is a way north out of the garden
into the maze. The player takes it. In the Morning Country the walk closes to thicket and
the heart cannot be reached. In the Hush the walks are open and the heart is walled. The
player is not trapped yet, only stopped, which is worse.

**Resolve.** The way through is a wall that died. When the sword was buried the hedge over
the heart was cut and replanted, and yew set in disturbed ground goes first. A thousand
years later that one hedge is dead and gapped while the rest stands. The player crosses
into the Hush to walk the kept east turn, crosses into the Morning Country to step through
the dead wall, takes the sword, and finds the pocket has no walking way out. One stride
Before, and they walk out through a maze that is still being clipped, carrying a sword the
hedger has not finished burying.

### The way through, concretely

This is the puzzle, and it is expressed only in exits. No locks, no keys, no flags.

- **The east turn, garden side to far side, opens in 99 BA (the Hush).** The maze is kept
  in the Hush. A hedger clips it, so the walks the plan intends are walks. `long-walk`
  runs east to `far-walk`. In 99 AA nobody has clipped it for an age and that turn has
  closed to thicket; `long-walk:99-aa` has no east exit, and `far-walk:99-aa` has no exit
  back west, because it is the same thicket seen from the other side.
- **The heart wall, far side to heart, opens in 99 AA (the Morning Country).** In 99 BA
  the heart is sealed by a wall of yew that was cut out and set again a few years back;
  it is the newest hedge in the maze and it is solid. `far-walk:99-ba` has no north exit.
  In 99 AA that one hedge is dead — yew planted over turned ground is the hedge that dies
  — and it is a gap you step through. `far-walk:99-aa` runs north to `maze-heart:99-aa`,
  and back south.
- **The way out is 99 BA.** `maze-heart:99-aa` and `far-walk:99-aa` are a pocket with no
  walking exit to the rest of the world. The player strides PAST from either one and walks
  out through the kept maze: west, south, south, south, and in at the back door of the
  House in the Hush.
- **The heart in 99 BA has no spatial exits at all.** It is reached only by striding PAST
  from the heart in 99 AA, and left only by striding FUTURE. That is deliberate: it is the
  one room in the story you can only arrive at out of time, and it is where the burial is
  happening.

Intended route from the world start, in full:

```
NORTH (out the back)  → back-garden:2099-ba
FUTURE ×3             → back-garden:99-aa        (the stroll: four faces of one garden)
NORTH, NORTH          → maze-mouth:99-aa, long-walk:99-aa   (caught: east is thicket)
PAST                  → long-walk:99-ba          (the maze kept)
EAST                  → far-walk:99-ba           (the heart behind a wall of new yew)
FUTURE                → far-walk:99-aa           (that wall is dead)
NORTH                 → maze-heart:99-aa         TAKE SWORD
SOUTH, PAST           → far-walk:99-ba
WEST, SOUTH, SOUTH    → back-garden:99-ba
SOUTH                 → turning-house:99-ba      (out, with the sword, into the Hush)
```

Three strides. `maze-heart:99-ba` sits one PAST off the heart and is worth the detour;
say so nowhere in the text, and let the player find it.

### The beats, in order

1. **Behind the House, 2099 BA (the High Masonry).** The back door gives on a plot walled
   in the same drystone as the House, a few young apple trees, and a well with a windlass.
   No maze. Nothing here is a puzzle; it is the stroll, and it establishes the well.
2. **Behind the House, 1099 BA (the Long Noon).** The maze is being made: whips of yew a
   hand high, string lines on pegs, and a gardener who has a drawing of it in gold letters.
   The drawing shows a heart with no way in. That was the joke, and the Long Noon was
   pleased with it. The well has a painted roof now.
3. **Behind the House, 99 BA (the Hush).** The maze has stood a thousand years and is
   clipped tight. The bells are going somewhere down the road. The way north is open. The
   well's rope has been cut, and nobody will say by whom.
4. **Behind the House, 99 AA (the Morning Country).** The garden has gone to grass. The
   maze is a black wall of dead and living yew with a fallen arch in it. The well is choked
   with what fell in it. The way north is open, and looks less like an invitation.
5. **Behind the House, 1099 AA (the Rekindling).** The maze was grubbed out for allotments
   and withy beds; there is a lock on the canal at the end of the plot. The well is capped
   and has a pump on it, and the guild that fitted the pump has stamped its name on the cap.
   No way north. This is the age that forgot there was a maze.
6. **Behind the House, 2099 AA (the Lettered Age).** The plan of the maze is mown into the
   turf each spring from a reconstruction, and the reconstruction is wrong. A placard says
   so without knowing it says so. The well is the same well, roped off, with a card on it.
   No way north; the maze is stumps under grass.
7. **The Maze Mouth, 99 BA.** An arch cut in yew, kept square. Inside, the light goes.
8. **The Maze Mouth, 99 AA.** The same arch, fallen in on one side and walkable anyway.
9. **The Long Walk, 99 BA.** A clipped corridor of yew, turning east. The walk is open.
10. **The Long Walk, 99 AA.** The same corridor, and the east turn is a thicket. This is
    where the player is caught, and where the years run. The room should make the player
    want to try PAST without telling them to.
11. **The Far Walk, 99 BA.** The end of the maze's outer round. The north side is a wall
    of yew younger than the rest, and it is solid.
12. **The Far Walk, 99 AA.** The same, and the young hedge is a dead one. There is a gap
    north. There is no way back west and no way back south. The player has just made
    themselves a prisoner, and can walk out of it in one word.
13. **The Heart of the Maze, 99 AA.** Grass, a bare square, and a sword lying in it where
    a thousand years of rain has found it. The story's object.
14. **The Heart of the Maze, 99 BA.** The same square, turned earth, and the hedger
    working. She has a bundle in oiled cloth at her feet and a reason she will give you
    if asked. This room can be entered only by striding PAST from the room above, so the
    player stands here holding the thing she is about to bury. She cannot know that, and
    the text must not know it either.

### The cast

- **The gardener** (1099 BA, `back-garden:1099-ba`). Laying out a maze from a drawing he
  is proud of and cannot fully read. He belongs to the Long Noon: the best wine, the worst
  maps. He answers TALK. One dry line about how long it will take and who it is for.
- **The hedger** (99 BA, `maze-heart:99-ba`). She keeps the maze and is the only person
  alive who holds its plan. She is burying something and is not furtive about it; the Hush
  has everyone putting things away. She answers TALK. Calm, brief, no prophecy. She must
  never say what the bundle is, and must never react to what the player carries.
- Nobody else. Keep the world thin, per the universe bible §3.

### Places and eras, and what each is for

- `back-garden` — six faces, one per landing. The stroll, the well, the two readable
  plans, and the two doors into the maze. It is the story's spine and its theme.
- `maze-mouth`, `long-walk`, `far-walk`, `maze-heart` — two faces each, 99 BA and 99 AA.
  The maze exists in no other age: it is string and whips in 1099 BA, and it is grubbed
  out by 1099 AA. Their strides are therefore closed at the outer ends (99 BA has no PAST,
  99 AA has no FUTURE); the one stride each of them offers crosses the Gap, which is a
  normal stride and needs no remark.

### The items

Item ids are unique across the whole world. These four are new; do not collide with
`lamp`, `bread`, `coin`, `road-map`, `waymark`, `license`, `family-history`, `sill-lamp`,
`cased-coin`.

- `sword` — `maze-heart:99-aa`, takeable. The goal, and it leaves with the player for
  whatever comes next. Plain, old, badly used by weather. Give it a `read` line: one word
  or mark cut in the blade, in the lettering of a kingdom two ages dead. It is not a tool;
  write nothing that invites the player to cut, draw, or swing it, because the parser has
  none of those verbs.
- `maze-plan` — `back-garden:1099-ba`, not takeable (it is the gardener's), with a `read`
  line. The Long Noon's drawing: gold lettering, a heart with no way in, and a confidence
  that is its own punchline.
- `maze-placard` — `back-garden:2099-aa`, not takeable, with a `read` line. The Lettered
  Age's reconstruction. It should record, as a dry fact and for the wrong reason, that the
  north hedge of the far walk was renewed once. That fact is the player's fair hint, and
  the placard is wrong about everything around it.
- `apple` — `back-garden:2099-ba`, takeable, with an `eat` line. The orchard's only
  business, and a companion to the House's heel of bread.

### Tone

Zork's smirk over deep time, exactly as the guide has it, and the joke is horticultural.
Two ages both fail the player, for opposite reasons, and both are doing their best. The
Long Noon builds a puzzle it thinks is clever. The Hush hides a weapon well. The Morning
Country cannot read what it inherited. The Lettered Age mows a wrong answer into the grass
every spring. Not one of them is mocked out loud.

The well carries the theme without a word of comment: six ages, one hole in the ground,
outliving the maze, the kingdom, and the drawing in gold letters. Let it be scenery in all
six rooms with a different one-sentence face each time and no summing up, ever.

Menace is stated calmly. In the Hush the bells are a clause, not a paragraph. In the
Morning Country the maze is dead in patches and that is all the text says about it.

### What the engine can do here

Checked against `src/types.ts`, `src/world.ts`, `src/engine.ts`, and `src/parser.ts` before
planning. Every one of these constrains a room in this story.

- **No conditional state of any kind.** No locks, keys, flags, counters, or inventory
  checks. Every line of every room must be true no matter what the player has done. The
  whole puzzle is therefore static exits, which is what the section above specifies.
- **A stride goes to the same `place` at the adjacent landing, or it fails.** It cannot be
  aimed. If a place has no face at the next landing, set that boolean `false` rather than
  leaning on the engine's refusal.
- **Exits are one-way as declared.** Every two-way passage in this story is written from
  both sides; every asymmetry above is deliberate and listed. Never add a reverse exit "for
  convenience" without checking it against the through-lines.
- **A dangling exit fails validation and the game refuses to start.** Register each room
  in `src/content/index.ts` in the same commit that references it.
- **`READ` works on items only, never on scenery.** `maze-plan` and `maze-placard` are
  therefore items with `takeable: false` and a `takeRefusal`, following `road-map` and
  `license` in the existing content.
- **`TALK` works on scenery carrying a `talk` line.** The gardener and the hedger are
  scenery.
- **The verb list is small**: look, examine, take, drop, inventory, go, past, future, when,
  wait, again, say, talk, mark, read, eat, help, quit. There is no OPEN, CUT, CLIMB, DIG,
  PULL, or PUSH. Do not furnish a room with a gate, a rope, a spade, or a locked thing.
- **Directions are `north south east west up down in out`.** No diagonals. This story uses
  north, south, east, west only.
- **An item native to a room must be named in that room's `look` text**; the engine only
  auto-lists items that have travelled.
- **Fixed engine text you cannot author**: the stride line, the stride refusals, `WHEN`,
  `WAIT`, and `SAY` (which answers with the landlady in every room in the world). Write
  around them.
- **`turning-house` rooms get a new north exit each.** That is the back door, and it is
  the only edit this story makes to existing content. Add `north` to all six faces, each
  pointing at its own `back-garden` face. Change nothing else in those files.

## Rooms

- [x] back-garden · 2099 BA (the High Masonry) — the walled plot, the orchard, and the well the story is really about
      as built: `src/content/back-garden-2099-ba.ts`, title "Behind the House". Exits: south
      → `turning-house`; `turning-house` gained north → here in the same commit. Time
      `{past: false, future: true}` (oldest landing). Items: `apple` (takeable, EAT).
      Scenery: the well (windlass, shaft, and nobody named who dug it), the young orchard,
      the beds, the drystone wall, the back door, the ground. No maze, and no mention of
      one: the plot is being eaten off, not laid out. Establishes the well and the back
      door for all six faces.
      Deviation: `test/engine.test.ts` builds a one-room world out of `turningHouse` and
      broke the moment that face gained a north exit. `newGame()` now strips exits from
      that copy (`new Game({ ...turningHouse, exits: {} })`) — one line, no assertion
      changed, and the one-room world behaves exactly as before.
- [x] back-garden · 1099 BA (the Long Noon) — the maze pegged out in string, and the gold-lettered plan of a heart with no way in
      as built: `src/content/back-garden-1099-ba.ts`. Exits: south → `turning-house:1099-ba`,
      which gained north → here. No north: there is nothing to walk into yet. Time
      `{past: true, future: true}`. Item: `maze-plan` (not takeable, READ — every walk
      drawn and named, the middle a square of grass with no gap anywhere in the hedge).
      Scenery: the gardener (TALK — "Sixty years before it's a hedge. The middle isn't for
      going in. It's for knowing about."), the well under its painted roof, the yew whips,
      the string lines, the barrow, the wall, the door, the turned ground. Gold on the
      names, as the road-map in the House of the same age. Sets up the first of the two
      wrong plans.
- [x] back-garden · 99 BA (the Hush) — the maze grown and clipped, bells down the road, the way north open
      as built: `src/content/back-garden-99-ba.ts`. Exits: south → `turning-house:99-ba`,
      which gained north → here; north → `maze-mouth:99-ba` is written in with that room,
      three commits later, and the look text names the arch from the start. Time
      `{past: true, future: true}`. No items. Scenery: the clipped hedge, the arch, the
      well (painted roof gone, rope cut off short at the windlass, recently, by somebody),
      the bells, the dug-over beds, the drystone wall down to knee height on the east side,
      the door, the barrow of clippings. The bells are one clause, as planned.
- [x] back-garden · 99 AA (the Morning Country) — the garden gone to grass and the maze a wreck, the way north open
      as built: `src/content/back-garden-99-aa.ts`. Exits: south → `turning-house:99-aa`,
      which gained north → here; north → `maze-mouth:99-aa` is written in with that room.
      Time `{past: true, future: true}`. No items. Scenery: the half-dead hedge, the arch
      fallen in on one side, the choked well (the stonework still the best work left in the
      garden), the grass with the beds showing under it in ridges, the drystone wall now
      mostly in the village being a house, the door. No number is put on how long it has
      been: the calendars are wrong and the narrator does not repeat them.
- [x] back-garden · 1099 AA (the Rekindling) — the maze grubbed out for allotments; the age that forgot there was one
      as built: `src/content/back-garden-1099-aa.ts`. Exits: south → `turning-house:1099-aa`
      only, which gained north → here; the look text says outright that there is no other
      way out of the garden. Time `{past: true, future: true}`. No items. Scenery: the
      allotments and cinder paths, the old roots at the north end (running in lines that
      nothing above ground follows — the maze, unrecognized), the well capped with iron and
      pumped, with the guild's name cast into the handle twice, the withy beds, the canal
      and its lock, the wall, the door. The guild's stamp is in EXAMINE, not READ: READ
      works on items only.
- [x] back-garden · 2099 AA (the Lettered Age) — the maze mown into the turf from a wrong reconstruction, and the placard that hints anyway
      as built: `src/content/back-garden-2099-aa.ts`. Exits: south → `turning-house:2099-aa`
      only, which gained north → here. Time `{past: true, future: false}` (newest landing).
      Item: `maze-placard` (not takeable, READ — "THE HOUSE MAZE. Nine walks and a fountain
      at the middle, entered from the west. The estate books record the north hedge of the
      far walk renewed once, at some expense, and do not say why."). It disagrees with
      `maze-plan` on the middle, the way in, and the count, and is right about the one thing
      that matters. The post stands where the arch was, and the mown plan does not put one
      there. Scenery: the mown stripes, the well behind its rope with its card, the stumps
      (the grass over them goes brown first in a dry August), the rebuilt wall, the door.
      The well's line was rewritten once: the first draft said it was dug before the maze
      and open after it, which is the one thing the through-line forbids the text to say.
- [x] maze-mouth · 99 BA (the Hush) — the kept arch into the maze
      as built: `src/content/maze-mouth-99-ba.ts`. Exits: south → `back-garden:99-ba`, which
      gained north → here in the same commit; north → `long-walk:99-ba` is written in with
      that room. Time `{past: false, future: true}` — the maze has no face in 1099 BA.
      No items. Scenery: the hedge (no seeing through it and no getting through it), the
      arch, the walk, the light. Rooms 3 and 7 now make a two-way passage.
- [x] maze-mouth · 99 AA (the Morning Country) — the same arch, fallen and still walkable
      as built: `src/content/maze-mouth-99-aa.ts`. Exits: south → `back-garden:99-aa`, which
      gained north → here in the same commit; north → `long-walk:99-aa` is written in with
      that room. Time `{past: true, future: false}`. No items. Scenery: the hedge (dead in
      patches and grown out, and that is all the text says about it), the fallen side of the
      arch with new yew coming out of it, the walk kept open down the middle by deer, the
      bramble, the light. Both `maze-mouth` faces now stride to each other across the Gap.
- [x] long-walk · 99 BA (the Hush) — the clipped walk whose east turn is open
      as built: `src/content/long-walk-99-ba.ts`. Exits: south → `maze-mouth:99-ba`, which
      gained north → here in the same commit; east → `far-walk:99-ba` is written in with
      that room. Time `{past: false, future: true}`. No items. Scenery: the hedge (not one
      gap in any of the three faces), the turn (swept, the way a thing is kept that gets
      used), the walk with a barrow track down one side of it going east, the strip of sky
      with the bells in it. The walk stops north against a face of hedge and there is no
      north exit; the text says so.
- [x] long-walk · 99 AA (the Morning Country) — the same walk, east closed to thicket; where the player is caught and where the years run
      as built: `src/content/long-walk-99-aa.ts`. Exits: south → `maze-mouth:99-aa`, which
      gained north → here in the same commit. **No east**, as planned. Time
      `{past: true, future: false}`. No items. Scenery: the thicket (wood, not leaves, going
      back further than you can see into it), the barrow track (beaten hard, never dug up,
      and the thicket grew over it and not out of it), the hedge, the sky that comes and
      goes. The track is the whole of the invitation to stride PAST; nothing in the room
      names the verb.
- [x] far-walk · 99 BA (the Hush) — the heart sealed behind the maze's youngest hedge
      as built: `src/content/far-walk-99-ba.ts`. Exits: west → `long-walk:99-ba`, which
      gained east → here in the same commit. **No north**, as planned. Time
      `{past: false, future: true}`. No items. Scenery: the young hedge (set from big
      cuttings, all of a size, closer planted than the hedge it was cut out of), the old
      hedge, the grass trodden thin along the north side where somebody has stood to look
      at their own work more than once, the walk west. "Somebody took that length out and
      set it again, and it took" is the clause; nothing explains it.
- [x] far-walk · 99 AA (the Morning Country) — that hedge dead and gapped; the pocket with no walking way out
      as built: `src/content/far-walk-99-aa.ts`. Exits: **none west, none south**, as
      planned; north → `maze-heart:99-aa` is written in with that room. Time
      `{past: true, future: false}`, and that stride is the only way out. No items.
      Scenery: the dead hedge ("Every yew in this length died together, which is what
      happens to yew set in turned ground. The rest of the maze did not."), the gap where
      two of the dead ones came out, the thicket west (the same thicket from the other end),
      the old hedge, the grass with the trodden line along the north side still showing.
      The room states the choice and never names the verb that gets the player out.
- [ ] maze-heart · 99 AA (the Morning Country) — the sword, in the grass, where the rain found it
- [ ] maze-heart · 99 BA (the Hush) — the hedger, the turned earth, and the bundle in oiled cloth; reachable only by striding

## Through-lines

- **The exit graph.** This is the puzzle and it must be built exactly. Two-way unless
  marked. `turning-house:<era>` N ↔ S `back-garden:<era>`, all six eras. `back-garden:99-ba`
  N ↔ S `maze-mouth:99-ba`. `back-garden:99-aa` N ↔ S `maze-mouth:99-aa`. `maze-mouth:99-ba`
  N ↔ S `long-walk:99-ba`. `maze-mouth:99-aa` N ↔ S `long-walk:99-aa`. `long-walk:99-ba`
  E ↔ W `far-walk:99-ba`. `far-walk:99-aa` N ↔ S `maze-heart:99-aa`. **No other spatial
  exits exist in the maze.** In particular: no east from `long-walk:99-aa`, no west from
  `far-walk:99-aa`, no north from `far-walk:99-ba`, and nothing at all from
  `maze-heart:99-ba`. The other four `back-garden` faces have no north exit. — planned,
  and simulated against the engine's own rules before writing: 20 rooms, 20 reachable from
  `turning-house`, no dangling exit, no room that cannot get back to the start, and the
  sixteen-command route above completes.
- **The stride table.** `back-garden`: 2099 BA `{past: false, future: true}`; 1099 BA,
  99 BA, 99 AA, 1099 AA all `{past: true, future: true}`; 2099 AA `{past: true, future:
  false}`. Every maze place: 99 BA `{past: false, future: true}` and 99 AA `{past: true,
  future: false}`. The maze's only stride is the one across the Gap, and both ends of it
  are needed. — planned
- **The sword.** Lies in `maze-heart:99-aa` and leaves with the player. It is the story's
  only takeable that matters, and later stories may ask for it. Nothing about the maze or
  the way out depends on carrying it; the engine could not express that if it did. — planned
- **The hedge that died is the hedge that was cut.** Burying the sword meant taking out a
  length of yew and setting it again, and yew set in turned ground is the yew that dies.
  `maze-heart:99-ba` (the burial), `far-walk:99-ba` (the young hedge, solid), and
  `far-walk:99-aa` (the dead hedge, gapped) are three faces of one fact, and it is the
  reason the puzzle has an answer. State it in a clause in each room and never explain it.
  — planned
- **The well.** Scenery in all six `back-garden` rooms, one sentence each, never remarked
  on. Windlass, painted roof, cut rope, choked, capped and pumped, roped off with a card.
  It outlasts the maze, and the text never says so. — planned
- **The two wrong plans.** `maze-plan` in 1099 BA shows a heart with no way in and is
  right for the wrong reason. `maze-placard` in 2099 AA records that the far walk's north
  hedge was renewed once and is wrong about everything around it. Between them the player
  has a fair hint from either end of the story, and neither age understood what it had.
  They must not agree with each other on anything else. — planned
- **The room budget.** Fourteen rooms, exactly at `max_rooms`. If a room must be given up,
  give up `back-garden:1099-aa`; nothing depends on it. That costs the back door in the
  Rekindling, and forces `back-garden:99-aa` to `future: false` and `back-garden:2099-aa`
  to `past: false`. Do not give up anything else. — planned

## Blockers
