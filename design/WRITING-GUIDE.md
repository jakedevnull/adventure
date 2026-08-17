# The Writing Guide

> Status: **Draft for review.** Once agreed, this guide is law for all game text —
> ours and contributors'. Review gate #2 in [DESIGN.md](./DESIGN.md) is this document
> applied with a red pen.

The style of Everwyn is learned from Infocom, and above all from Zork. Source text studied:
the [Zork transcript at pr-if.org](https://pr-if.org/event/play-zork/transcript-zork/).
The rules below are that style, extracted and made teachable.

The one-sentence version: **say less, mean more, and keep a straight face.**

---

## 1. The ten rules

### Rule 1 — Second person, present tense, always

The player is "you," and everything is happening now.

> You are standing in an open field west of a white house, with a boarded front door.

Never "the player," never past tense, never "you will see."

### Rule 2 — Ration the words

Zork's most famous room is two sentences. A room description is 2–4 sentences. An object
is one. A parser response is often one word:

> Taken.

Write the long version first if you must; then cut it in half, then cut it again. If a
sentence is doing no work, it is doing harm.

### Rule 3 — Concrete nouns, few adjectives, no atmosphere by adjective

Zork does not say the sack is *mysterious*; it says:

> On the table is an elongated brown sack, smelling of hot peppers.

One precise sensory fact outworks five mood words. Adjectives must earn their place by
being *information* ("elongated," "brown," "battery-powered brass") — never decoration
("ancient, mysterious, foreboding"). Banned outright: *mysterious, eerie, ominous,
strange* (show it instead), and any adjective stack three deep.

### Rule 4 — Dry wit, straight face

The humor is deadpan and usually structural — an aside, a parenthesis, an implication —
never a wink at the camera.

> The trophy case is securely fastened to the wall (perhaps to foil any attempt by
> robbers to remove it).

> A skeleton, probably the remains of a luckless adventurer, lies here.

"Probably" is the funniest word in that sentence. Trust the reader. No jokes that break
the world, no memes, no references to our Earth (which, in Everwyn, does not exist).

### Rule 5 — Menace is stated calmly

The scariest line in the genre is administrative in tone:

> It is pitch black. You are likely to be eaten by a grue.

Danger is delivered as fact, politely. The flatter the delivery, the deeper the chill.
Never exclaim. The exclamation point budget is roughly one per realm, and Zork spent
its own mostly on "There is a suspicious-looking individual here!"-grade drollery.

### Rule 6 — Failure is a personality moment

Refusals and errors get craft, because players read them hundreds of times. They may be
wry, they must be short:

> You can't go that way.

> A hollow voice says, "Fool."

Never blame the player for the parser's limits; never break voice to explain mechanics.

### Rule 7 — The world was here before you and will be here after

Description implies history in passing — Zork's paintings were "stolen by vandals with
exceptional taste"; its tables "seem to have been used recently." Rooms are found
mid-story, not staged for arrival. In Everwyn this rule is doctrine: nearly every place has a
thousand-year past and future, and one clause of it may show:

> The road is older than the kingdom that repaired it.

One clause. Lore lives in implication; contributors who paragraph-dump history fail
review.

### Rule 8 — Name things like maps and gravestones

Room titles are terse and locative: *West of House. Kitchen. The Troll Room. Ferry
Landing. Under the Stones.* Two or three words, no articles unless earned, and never a
pun. In Everwyn a place keeps its name across eras when possible — the continuity is
the poetry.

### Rule 9 — Only what you can act on

Every noun mentioned is examinable; anything given a full sentence is probably
important. Don't furnish rooms with scenery the parser shrugs at, and don't hide the
critical lever in a subordinate clause. Zork put it plainly:

> There is a small mailbox here.

### Rule 10 — The narrator is a companion, not an author

The narrator notices, reports, and occasionally raises an eyebrow. It never emotes on
the player's behalf ("You feel a chill of dread"), never editorializes about the plot,
and never says anything the player couldn't, in principle, have perceived.

## 2. Templates

**A room, first visit** — *Title; anchor sentence (where you stand); one or two facts;
exits woven in; then listed objects.*

> **Ferry Landing**
> You are on a stone quay on the south bank of the Wend. The ferry is on the far side,
> which says something about your luck. A towpath runs east and west.
> There is a bronze bell here, green with years.

**The same room, revisited** — title plus objects only. Trust the memory you built.

**An object** — one sentence, one true detail:

> The bell's clapper has been wired still. Recently.

**A time step** — one or two lines, written for the place, contrasting what holds with
what changed (persistence is the theme; see the universe bible):

> \> FUTURE
> The years pour past like a river over a weir. The mill is gone. The millpond,
> patient, is not.

**Another Traveler arrives** — event lines for multiplayer are the same voice, one line:

> A Traveler called Petra steps out of the years, shaking off a century of rain.

## 3. Calibration: before and after

| Not this | This |
|---|---|
| You enter an ancient, mysterious chamber filled with an eerie sense of forgotten history. Dust motes dance in shafts of light. | **The Undercroft.** Stone vaults, a swept floor. Someone keeps this place, and is not here. |
| The mighty oak tree towers majestically above you, its gnarled branches reaching toward the heavens! | An oak stands here. In a younger year, you planted it. |
| ERROR: invalid command. Type HELP for a list of commands. | That's not a verb I recognise. |
| You feel terrified as the huge, scary troll attacks you viciously! | A troll blocks the way, holding his axe the way you'd hold an argument he intends to win. |

## 4. Era inflection (Everwyn-specific)

One voice, an accent per age. The narrator never changes; the *nouns* do. A landing's
flavor comes from what there is to notice — unmortared masonry in 2099 BA, print and
canal locks in 1099 AA — not from pastiche spelling, archaic grammar, or dialect
("thee," "'twas" and all cod-medievalism fail review). NPC dialogue may carry era color
a little further; the narration keeps its one dry voice from the first landing to the
last. That constancy *is* the Traveler's point of view.

## 5. The reviewer's checklist

- [ ] Second person, present tense throughout.
- [ ] Rooms ≤ 4 sentences; objects ≤ 1; no adjective stacks; banned words absent.
- [ ] At least one concrete, surprising detail; zero mood-by-adjective.
- [ ] Any humor is deadpan and in-world.
- [ ] History implied in ≤ 1 clause, not narrated.
- [ ] Every mentioned noun responds to EXAMINE.
- [ ] Failure messages short, in voice, blame-free.
- [ ] Time-step lines present where the place merits them, ≤ 2 lines.
- [ ] No Earth, no memes, no fourth wall, no pastiche grammar.
- [ ] Read it aloud. If you didn't almost smile once, revise.
