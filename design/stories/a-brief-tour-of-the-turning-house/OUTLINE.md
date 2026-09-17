# A Brief Tour of the Turning House

max_rooms: 6

## Story

The author's story, carried over as written (the ellipsis is the author's own):

> The Turning House stands at its crossroads in every age, kept by the same stubborn family,
> and tonight the landlady of 2099 BA has decided you should see it. … The unlit brass lamp
> from the 2099 BA common room is the through-line: carry it forward. Where it finally burns
> is the end of the tour. Tone: dry on the surface, deep underneath.

### What this story is

The tour is through time, not through space. One place — the Turning House — in all six of
its landings, walked oldest to newest. The player never leaves the inn; the inn is what
changes. That is the whole conceit, and it is the cheapest possible demonstration of the
universe's favorite theme: place persists, time varies (DESIGN.md §4.4), and what lasts a
thousand years is never what anyone intended (UNIVERSE.md §6.1).

The Turning House is core canon (UNIVERSE.md §5): an inn at a crossroads that exists in
every landing, kept in every age by someone of the same stubborn family line. Its founding
is one of the three fixed points. Two sentences of that section are the spine of this
story and must not be contradicted: in 2099 BA *"it is already old, and the landlady will
not say how old"*; in 2099 AA *"it is still open, still warm, lamps lit for someone
expected to return."*

That second sentence is the ending. The lamp the landlady hands you in the first room is
the lamp that burns in the window of the last one, and the someone expected to return is
you. The story never says so. The last room simply shows a window of lit lamps and an
empty hook that fits the one in your hands.

### What the player is doing, and why

The landlady of 2099 BA tells you to take the unlit brass lamp and see the House. She does
not explain, because she does not explain things. There is no puzzle to solve and nothing
to defeat: the player's task is to carry one object forward through six eras and notice
what the House does with it. The pleasure is recognition, not challenge — each era gives
the lamp a different meaning, and the last one gives it a home.

This is a tour, and it should feel like one: short rooms, dry guide, six stops.

### The arc

Open in warmth (2099 BA), go comic (1099 BA), turn cold (99 BA), cross the Gap into ruin
(99 AA), find the lamp turned into a custom nobody understands (1099 AA), and end at the
lit window (2099 AA). The tonal floor is the Gap crossing; everything after it is the
world getting its light back, badly at first, then properly.

### The beats, in order

1. **2099 BA · the High Masonry.** The common room, the fire, the landlady who will not
   say how old the House is. She sets the tour going and the lamp is on the table, unlit,
   dented, with no wick you can find. The years open forward for the first time.
2. **1099 BA · the Long Noon.** The House at its fattest: crowded, loud, the family
   prosperous and careless, the wine good and the maps bad. The room is already full of
   light, so the lamp you carry is a curiosity — an heirloom somebody's grandmother used
   to fuss about. Nobody here can imagine needing it. The joke is structural and the
   narrator does not point at it.
3. **99 BA · the Hush.** Bells rung against something coming; everyone feels it, no one can
   say what. This is a fixed point and the story may not explain it. The House is barred
   and quiet, the family sitting up. Someone asks you, politely, to keep the lamp unlit —
   light draws attention, and they would rather not be noticed tonight. This is the story's
   turn, and the calm delivery is the whole effect (WRITING-GUIDE Rule 5).
4. **99 AA · the Morning Country.** One stride, a thousand years, straight over the Gap.
   Survivors living in a half-ruined House among ruins nobody can read, their own included.
   The drystone walls from the first room are still standing, because drystone does not
   need mortar and nothing holds it up but the fit of it. The family is still here and no
   longer knows why they keep the place. They keep it anyway. This is the story's deepest
   point and its clearest statement of persistence.
5. **1099 AA · the Rekindling.** Guilds, canals, print, and history rewritten by people
   guessing. The House is rebuilt and prosperous, and the family now keeps a lamp lit in
   the window as a tradition — with a printed card on the wall explaining the tradition's
   origin, confidently and wrongly. The custom outlived its reason. Dry comedy on the
   surface, consequence at a distance underneath: the thing you are carrying is why, and
   the card does not know that.
6. **2099 AA · the Lettered Age.** Universities, museums, scholars of the Awakening and
   the Lapse, all wrong. The House is still open and still warm. The window holds a row of
   lit lamps, kept burning every night for someone expected to return, and one hook in the
   row is empty. The keeper — same line, same refusal to explain — does not ask your
   business either. End of tour.

### Places and eras

One place, `turning-house`, in six landings. No second place. The six landings are the
full launch span (DESIGN.md §4.1), oldest first:

`2099 BA` → `1099 BA` → `99 BA` → [ the Gap ] → `99 AA` → `1099 AA` → `2099 AA`

Every stride is one thousand years, including the one over the Gap. No scene may be set
inside the Gap; the stride from 99 BA lands clean in 99 AA.

### What carries across rooms

- **The brass lamp** — the through-line, taken in 2099 BA and carried to 2099 AA.
- **The family line** — one keeper in every room, never named as the same person, always
  recognizably the same stubbornness. Each is a `talk`-bearing scenery object.
- **The drystone walls** — mentioned in all six rooms, in one clause each, in whatever
  state the age has left them. This is the persistence motif doing its work quietly.
- **The face-down coin** — the Traveler's sign for *I was here*, on the table in 2099 BA.
  It may reappear in a late room behind museum glass with a placard that gets it wrong.

### Tone notes

Dry on the surface, deep underneath (the author's line, and UNIVERSE.md §7). Zork's
smirk, Tolkien's long shadow. The narrator notices and reports; it never emotes for the
player and never concludes on their behalf. One voice across all six rooms with the nouns
doing the era work — unmortared stone in 2099 BA, print and canal locks in 1099 AA — and
no archaic grammar anywhere. The ending is the one place where sentiment is available, and
it must be delivered flat: a window, a row of lamps, an empty hook. The narrator does not
say what it means.

The emotional load of this story is carried entirely by recognition, which means the last
room fails if it explains itself.

### What the engine can and cannot do here

Binding constraints, confirmed against `src/types.ts`, `src/parser.ts` and `src/world.ts`.
The generator should plan within these rather than discover them:

- **There is no `LIGHT` verb.** The parser knows `look, examine, take, drop, inventory, go,
  past, future, when, wait, again, say, talk, mark, read, eat, help, quit` and nothing else.
  The lamp cannot be lit by a player action. "Where it finally burns" is therefore narrated
  by the 2099 AA room's `look` text, not performed.
- **There is no world state, no flags, and no conditional text.** A room cannot check
  whether the player is carrying the lamp. The 2099 AA room must read well either way, and
  should be written so it lands hardest for a player who has the lamp in hand.
- **Item ids are globally unique across the world.** The lamp is already declared once, in
  `turning-house` (id `lamp`). No later room may declare another item with that id; the
  lamp travels in the player's inventory, which is how it gets there. The same applies to
  `bread` and `coin`. Recurring objects in later rooms must be `scenery`, or items with
  fresh ids.
- **An item's `description` is fixed for the whole game.** The lamp reads the same in every
  era, so the change must live in the rooms around it.
- **A time exit only works if the same `place` string exists at the adjacent landing.** Set
  `time.past` / `time.future` to match actual neighbors, and add each new landing to
  `landings` in `src/content/index.ts` in chronological order.

## Rooms

- [ ] turning-house · 2099 BA (the High Masonry) — the landlady starts the tour and the unlit lamp is taken
- [ ] turning-house · 1099 BA (the Long Noon) — a House too rich and too lit to need a lamp
- [ ] turning-house · 99 BA (the Hush) — barred and waiting; keep the lamp unlit tonight
- [ ] turning-house · 99 AA (the Morning Country) — across the Gap: ruin, survivors, and the walls still standing
- [ ] turning-house · 1099 AA (the Rekindling) — the lamp in the window is a custom now, explained wrongly in print
- [ ] turning-house · 2099 AA (the Lettered Age) — the lit window, the empty hook, the end of the tour

## Through-lines

- **The brass lamp** (item id `lamp`, declared once in `turning-house`, 2099 BA) — taken in
  room 1, carried in inventory through all six. Never redeclared. Its meaning changes room
  by room: heirloom, curiosity, liability, forgotten purpose, misremembered custom, and
  finally the lamp the window was always missing. — planned
- **The time chain** — all six rooms share `place: "turning-house"`, one per landing, and
  their `time.past` / `time.future` must agree with their neighbors: 2099 BA opens future
  only; 2099 AA opens past only; the four between open both. The existing room currently
  has both closed and must have `future` opened. — planned
- **The Gap crossing** (99 BA → 99 AA) — the story's tonal pivot and the one stride the
  player will remember. Both rooms must be written as a pair: what the Hush was braced for
  is never answered, and the Morning Country is the answer's aftermath without knowing it.
  No evidence about the Awakening in either room, only how each age copes. — planned
- **The keeper of the House** — one family member per room as scenery with a `talk` line,
  each a thousand years apart and recognizably the same line. The 2099 BA landlady "will
  not say how old" the House is; the 2099 AA keeper should decline just as flatly, which is
  how the player knows the family held. — planned
- **The drystone walls** — one clause per room, six states, mortarless throughout. The
  cheapest and most reliable carrier of the persistence theme. — planned
- **The face-down coin** (`coin`, 2099 BA, not takeable) — the Traveler's sign for *I was
  here*. Optional payoff: it reappears in a late room as scenery behind glass, with a
  placard confidently wrong about it. Use it in at most one later room, and only if the
  room has space for it. — optional

## Blockers

None.
