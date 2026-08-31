# A Brief Tour of the Turning House

max_rooms: 6

## Story

### The story as the author wrote it

> The Turning House stands at its crossroads in every age, kept by the same stubborn
> family, and tonight the landlady of 2099 BA has decided you should see it. … The unlit
> brass lamp from the 2099 BA common room is the through-line: carry it forward. Where it
> finally burns is the end of the tour. Tone: dry on the surface, deep underneath.

### What the story is

One building, six ages, in order. There is no second place. The Turning House is the whole
map for this story: six faces of one inn at one crossroads, walked oldest to newest with
`FUTURE`. The player takes the brass lamp off the table in 2099 BA and carries it up the
years. In 2099 AA a brass lamp is burning on the windowsill, dented in the same places,
kept lit for someone expected to return. Nothing in the game explains this, and nothing in
the game may try.

That is the tour. The tour is also the point: the House outlasts the kingdom that paved its
road, and the family outlasts the House's own account of itself.

### The arc

**Open — 2099 BA, the High Masonry.** The common room that already exists. Cold the season
has not earned, a fire too eager for it, a lamp on the table with no wick anyone can find.
The landlady does not ask your business because she already knows it. The years open toward
the After for the first time.

**Turn — 99 BA, the Hush.** The shutters are barred and the room is full of people not
talking. The keeper watches the road. She knows what you are, she knows she cannot follow,
and she asks you to carry the lamp across. This is the story's weight and its only request.

**Resolve — 2099 AA, the Lettered Age.** An inn that has become half a museum of itself,
with a placard for everything and an answer for nothing. On the sill a brass lamp burns.
The keeper fills it, does not know who it is for, and fills it anyway.

### The beats, in order

1. **2099 BA.** Take the lamp. Talk to the landlady. Ask the House its age and get no
   answer. `FUTURE`.
2. **1099 BA, the Long Noon.** The House is rich and slightly careless with itself.
   Someone has plastered over the drystone. The landlord answers the age question with a
   confident number, briskly, and the number is wrong. A map here names four roads; three
   of them exist.
3. **99 BA, the Hush.** Bells, banked fire, a bell-rope in reach. Nothing here is offered
   to the player and nothing can be carried away. The keeper asks instead.
4. **99 AA, the Morning Country.** The stride crosses the Gap. The House stands on its own
   old courses with newer, worse ones above them, laid by someone learning. The fire went
   out somewhere in the Gap and was lit again. A stone low in the wall carries a scratched
   Traveler's waymark that the keeper cannot read and the player can.
5. **1099 AA, the Rekindling.** A canal cut, a licence board, print on the wall. The keeper
   answers the age question by quoting a printed history of his own family, and the printed
   history is wrong. The sill has glass now, and an empty bracket.
6. **2099 AA, the Lettered Age.** The lamp burns on the sill. A face-down coin lies in a
   case under a placard that guesses. The keeper, in the age that dates everything, does
   not know how old the House is either. End of tour.

### The keepers

Six keepers, one per era, all of the same stubborn line (core canon, `UNIVERSE.md` §5).
They are `scenery` entries with a `talk` line, which is how this engine does people.

**Do not name the family.** No surname appears in core canon, and a new proper noun would
have to pass the universe gate. Identify each keeper by the work of their age: the
landlady, the landlord, the one at the window, the one laying stone, the licensed
innkeeper, the old one who keeps the lamp filled.

The spine of the tour is a running refusal. In every age the House's age is unanswerable,
and each keeper declines in the manner of their century: silence in the High Masonry, a
brisk wrong number in the Long Noon, deflection in the Hush, plain ignorance in the Morning
Country, a wrong citation in the Rekindling, and a shrug from the age of universities. Vary
the shape of the refusal, not just the words. The last one is not a punchline and must not
explain the joke.

### Places and eras, and what each is for

Every room is the place `turning-house`. The era does the work; the place holds still. What
changes between faces is what there is to notice — unmortared stone, then plaster, then
bells, then a rebuild, then print, then glass and placards. What holds is the crossroads,
the fire, the family, and the road that is outlasting everyone.

### Tone

Dry on the surface, deep underneath (the author). `UNIVERSE.md` §7: Zork's smirk, Tolkien's
long shadow, a narrator that is never sentimental about a world that is allowed to be. The
last room is the one that could turn sentimental and must not. The lamp goes on the sill and
the keeper says something about the draft.

Themes sounded, per `UNIVERSE.md` §6: persistence (the fire, the family, the road), the
forgotten thing (a lamp kept lit for someone expected), and the traveler's melancholy (the
keeper in the Hush, who asks you to carry something past the year she stops).

### What the engine can do here

Written against the engine as it stands. Check these before authoring, because several
obvious moves are not available.

- **There is no `LIGHT` verb, and no `PUT`, `GIVE`, or `COMBINE`.** The parser's verbs are
  `look`, `examine`, `take`, `drop`, `inventory`, `go`, `past`, `future`, `when`, `wait`,
  `again`, `say`, `talk`, `mark`, `read`, `eat`, `help`, `quit`. The lamp therefore is not
  lit by the player. It is found burning. **No room may hint that the player can light it**,
  and no wick, oil, tinder, or flint appears anywhere in this story: a player who tries
  `LIGHT LAMP` gets `I don't know the word "light"`, which would be the story's worst
  moment. The lamp keeps its shipped description, wickless.
- **Nothing can test what the player is carrying.** Room text is fixed data. The 2099 AA
  room must read correctly whether or not the player still has the lamp, so write the sill
  lamp as the House's own and never as "your lamp."
- **The stride line is global,** not authorable per room: `The years pour past. You arrive,
  and it is a different world.` All era contrast has to live in the room's `look`.
- **Time strides are between adjacent landings of the same place.** With all six faces
  built, `FUTURE` walks the chain from 2099 BA to 2099 AA and `PAST` walks back. The stride
  from 99 BA lands in 99 AA, over the Gap, in one step.
- **Item ids are unique across the whole world** (`validateWorld`). The lamp is declared
  once, in the existing file. The burning lamp on the 2099 AA sill and the coin in its case
  need their own ids.
- **A `Room.exits` entry pointing at a room id that does not exist fails validation.** This
  story spends all six rooms on the six faces, so there are no spatial exits at all. The
  barred door and the stair stay `scenery`.
- **The one existing room is edited, not replaced.** `src/content/turning-house.ts` keeps
  its legacy id `turning-house` and stays the world's `start`. The only change it needs is
  `time.future: true` (`past` stays `false`; 2099 BA is the oldest landing). The landlady's
  existing line stays verbatim; a second sentence may be added to her `talk` only if it
  earns itself.
- `src/content/index.ts` gets all six landings, oldest first: `["2099 BA", "1099 BA",
  "99 BA", "99 AA", "1099 AA", "2099 AA"]`.

Room titles: every face is titled **The Turning House**. A place keeps its name across eras
(`WRITING-GUIDE.md` Rule 8), and here the repetition is the story.

## Rooms

- [x] turning-house · 2099 BA (the High Masonry) — the tour opens and the lamp is taken
      as built: `src/content/turning-house.ts`, edited not replaced. `time: {past: false,
      future: true}`; no spatial exits. Items `lamp` (takeable, the through-line), `bread`,
      `coin` (untakeable Traveler's sign) all unchanged. The landlady's `talk` gains one
      sentence — "She has been asked how old the House is before, and the fire needs
      seeing to" — which opens the refusal spine as silence, the High Masonry's shape of
      it. All six landings registered in `src/content/index.ts`, oldest first.
      Deviation: `test/engine.test.ts` asserted FUTURE was refused with "the House holds
      still"; with the years now open that one-room game gets "nothing of this place
      stands in that age" instead, so the assertion was updated. No engine change.
- [x] turning-house · 1099 BA (the Long Noon) — a rich House, plastered over, sure of a wrong date
      as built: `src/content/turning-house-1099-ba.ts`. `time: {past: true, future: true}`,
      no spatial exits. One item, `road-map` (untakeable, readable): EXAMINE gives the
      gold lettering, READ gives "Four roads are named here. Three of them are out there."
      The `road` scenery closes the joke from the other side. The landlord's refusal is the
      brisk wrong number — "Four hundred years next spring" — which dates the House to
      after the era the player has just left. Plaster over drystone carries the age.
      Deviation: no wine, though the age is famous for it. `drink` is not a verb, and a
      cup on the table would earn `I don't know the word "drink"` — the same trap the
      outline's engine notes set for the lamp. The richness shows in plaster, paint, and
      an unbarred door instead.
- [x] turning-house · 99 BA (the Hush) — the keeper asks you to carry the lamp across
      as built: `src/content/turning-house-99-ba.ts`. `time: {past: true, future: true}` —
      FUTURE is the stride over the Gap, landing in 99 AA. `items: []`, so TAKE ALL earns
      "There is nothing here to take," which is the room's point. The look says so out
      loud: "Nothing sits on the sill, and nothing is set out on the tables." The sill is
      present and bare. The keeper's request is the story's weight and works whether or
      not the player is carrying the lamp: she names it rather than pointing at it, so a
      player who left it behind is told there is one.
      Deviation: the bell-rope is in the room but not in the player's reach. There is no
      `pull` or `ring` verb, and a rope offered to the player earns `I don't know the word
      "pull"`. It ends "at a knot at her shoulder. Hers to pull, and she has not," which
      declines the affordance in voice. The bells that are ringing are other villages',
      and separate scenery. This is the intended beat's fact — a rope in the room, silent —
      without the trap.
- [x] turning-house · 99 AA (the Morning Country) — rebuilt from its own stones, the fire lit again
      as built: `src/content/turning-house-99-aa.ts`. `time: {past: true, future: true}`;
      PAST is the stride back over the Gap. One item, `waymark` (untakeable, readable):
      EXAMINE gives the cut stone laid face-in, READ gives the Traveler's note — the years
      run here, and the step back is longer than the calendar says. That is the Lapse
      referenced as a traveler's practical note, not as evidence (`UNIVERSE.md` §2 allows
      the first and forbids the second). The keeper is the one laying stone; his refusal is
      plain ignorance — "Older than us. That's as much as anybody kept" — the records
      having gone into the Gap. The fire's relighting is carried by the hearth alone: "New
      ash over old, parted by a pale seam that no winter could account for." No one
      explains it. The sill is stone and glassless.
- [ ] turning-house · 1099 AA (the Rekindling) — a printed history of the family, wrong
- [ ] turning-house · 2099 AA (the Lettered Age) — the lamp burning on the sill; end of tour

## Through-lines

- **The brass lamp.** Taken in 2099 BA, carried in inventory to 2099 AA, where a lamp with
  the same dents is already burning. Declared once, in `src/content/turning-house.ts`; no
  other room declares an item with id `lamp`. Never lit by the player. Rooms: all six. —
  planned
- **The keepers' refusal.** One keeper per era, same family line, never named, each declining
  the House's age in the manner of their century. Rooms: all six. — planned
- **The fire.** Kept in every age, out somewhere in the Gap, lit again in 99 AA and kept
  since. No one in the game explains it, and no one connects it to the name of the
  Rekindling. Carried mainly by 2099 BA, 99 AA, and 2099 AA; a clause elsewhere. — planned
- **The sill.** Empty in 99 BA, glassless in 99 AA, glazed with an empty bracket in 1099 AA,
  and holding the burning lamp in 2099 AA. It does not appear in 2099 BA, whose lamp sits on
  the table. Rooms: 99 BA, 99 AA, 1099 AA, 2099 AA. — planned
- **The face-down coin.** Untakeable in 2099 BA (`coin`, a Traveler's sign, already
  written); in 2099 AA it is in a case under a placard that guesses wrong. Needs a distinct
  item id there, e.g. `cased-coin`. Rooms: 2099 BA, 2099 AA. — planned
- **The road.** The high roads were laid to outlast their makers and are winning
  (`turning-house.ts`, already written). One clause per era at most, and the clause should
  cost the road nothing. Rooms: all six. — planned
- **The PAST/FUTURE chain.** The six faces are the entire map. `time` per room: 2099 BA
  `{past: false, future: true}`; 1099 BA, 99 BA, 99 AA, 1099 AA all `{past: true, future:
  true}`; 2099 AA `{past: true, future: false}`. No stride is barred, so the tour walks both
  ways and a lone player can always finish. Rooms: all six. — planned
- **No spatial exits.** No room in this story sets `exits`. Reachability comes from the time
  chain alone, which is what `npm run eval:reach` will walk. Rooms: all six. — planned

## Blockers
