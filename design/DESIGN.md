# 99 — Game Design Document

*Working title: **99**. A multiplayer, ever-expanding, online text adventure.*

> Status: **Draft for review.** This is a design, not an implementation plan. Nothing here
> is canon until agreed by @jake. Open questions are collected at the end.

Companion documents:

- [UNIVERSE.md](./UNIVERSE.md) — the universe bible. The single source of creative truth.
- [WRITING-GUIDE.md](./WRITING-GUIDE.md) — the Zork-derived writing style guide that all
  game text must follow.

---

## 1. The pitch

**99** is a command-line text adventure that lives in the browser. It reads like Zork —
terse, dry, second person — but it is multiplayer, it never stops growing, and its most
distinctive feature is that **time travel is as easy as walking north**.

Every player is a member of the Travelers, a rare kind of person for whom the millennia
are just another compass direction. Type `EAST` and you cross a meadow. Type `FUTURE` and
you cross a thousand years. The room stays put; the world around it does not.

The game is set in Everwhen (provisional name — see the universe bible), an other-worldly
land with a western-European flavor: not Earth, not Europe, but something a reader of
Tolkien or Narnia would recognize in their bones.

## 2. Design pillars

Every decision in this document should be defensible against these five pillars. If a
proposed feature fights one of them, the feature loses.

1. **It reads like Infocom.** The writing is the graphics. Terse, concrete, dryly funny.
   The writing guide is law.
2. **Time is a direction.** One mechanic, two commands, no fiddliness. The depth comes
   from what the mechanic does to the world, not from the mechanic itself.
3. **One universe, many hands.** Anyone can build rooms, quests, even whole realms — but
   only we define the universe. Consistency is our product.
4. **Wonder is rationed.** Visual "Illuminations" are rare on purpose. A gem you find in
   one room in twelve is a gem; a gem in every room is wallpaper.
5. **A terminal, kindly.** It must feel like a classic command line and still be a
   pleasure on a phone.

## 3. The player experience

### 3.1 The terminal

The game presents as a single scrolling transcript in a monospace face — output above,
a prompt below. No panes, no minimaps, no health bars. State that matters is discovered
by asking (`LOOK`, `INVENTORY`, `WHEN`), exactly as in Zork.

Text arrives with a slight typewriter cadence (fast, skippable) so that the transcript
feels performed rather than dumped. This same cadence is what makes Illuminations land —
see §6.

**Desktop:** keyboard-first. Command history on up-arrow. Tab completion for verbs and
visible nouns.

**Mobile:** the same transcript, plus a thin assist row above the keyboard offering
tappable context words — visible exits, visible nouns, recent verbs. Tapping composes
text into the prompt rather than executing directly, so the player always sees and sends
a command. The command line is the interface on every device; the assist row is
scaffolding, never a second UI.

### 3.2 The parser

A classic two-word-and-up parser (`TAKE LAMP`, `GIVE COIN TO FERRIER`, `PUT SEED IN
FURROW`) with the standard Infocom conveniences: abbreviations (`N`, `X` for examine,
`Z` for wait), `AGAIN`, `IT`, and forgiving noun matching. Parser error messages are
personality moments and are specified in the writing guide.

Two verbs are new to the genre and central to ours:

- `PAST` — step one millennium toward Before.
- `FUTURE` — step one millennium toward After.

They are listed with the exits, because that is what they are:

> There are doors to the north and west. The years, as ever, run both ways.

### 3.3 Multiplayer

Other Travelers are present in the world, visible in rooms, and able to talk, trade, and
cooperate. The design conviction: **the world is a shared stage; the story is a personal
script.**

- **Shared:** presence ("A Traveler called Petra is here, wringing out her hat."),
  `SAY`/emotes, item gifting, and co-operative mechanisms that genuinely need two pairs
  of hands (a two-lever gate; a rope held from above) — including hands in *different
  millennia* (see §5.4).
- **Personal:** quest state, puzzle state, and story-critical world changes are tracked
  per player. If Petra has already opened the reliquary in her story, it is still sealed
  in yours. This is what lets thousands of players share one world without strip-mining
  each other's puzzles.
- **Griefing posture:** you cannot take another player's held items, block an exit, or
  spoil a puzzle state. The worst a stranger can do is talk at you. (Mute exists.)

Multiplayer is deliberately thin at launch — presence, talk, trade, co-op mechanisms.
It is a text adventure you happen to share, not a MUD with combat and levels.

## 4. Time: the 99 mechanic

### 4.1 The rule

History pivots on the **Awakening**, the event at year 0 that no one can reach and no
one remembers (see the universe bible). Years count down toward it (*Before Awakening*,
BA) and up from it (*After Awakening*, AA).

Travelers cannot land just anywhere. There are exactly **twelve landings**, and every
one of them falls in a year ending in 99 — hence the game's name:

```
5099 BA — 4099 BA — 3099 BA — 2099 BA — 1099 BA — 99 BA
                                                    |
                                              [ the Gap ]
                                                    |
  99 AA — 1099 AA — 2099 AA — 3099 AA — 4099 AA — 5099 AA
```

`PAST` and `FUTURE` move you one step along this chain. No arguments, no date entry, no
"jump ahead 3 days." Eleven of the twelve steps are exactly a millennium; the step
between 99 BA and 99 AA is the **Long Step** — 198 years, straight over the Awakening.
The two centuries around year 0 are veiled. No Traveler has ever landed inside them,
and what actually happened at the Awakening is the standing mystery of the entire game.

### 4.2 Why this shape

- **Meaningful but not finicky.** A millennium is long enough that every step lands in
  a genuinely different world — forests become kingdoms become ruins — and coarse enough
  that there is nothing to fuss over. Twelve landings is a number a player can hold in
  their head, like the twelve verbs they know by heart.
- **The name does work.** Every year you can ever stand in ends in 99. Signs, gravestones
  and ledgers in-world quietly agree. Players notice; noticing feels like finding a
  secret.
- **The Gap is a story engine.** An unreachable event that reshaped the world gives every
  contributor a shared mystery to orbit without ever being allowed to solve it. (Only we
  can touch the Awakening. See §7.)

### 4.3 Travel texture

Time travel is seamless, but it should never be *bland*. Stepping has a one-line
signature, always brief, era-flavored, written per-room where it matters:

> \> FUTURE
>
> The years pour past like a river over a weir. The mill is gone. The millpond,
> patient, is not.

Mechanically: `PAST`/`FUTURE` may be barred in specific rooms for specific story reasons
(a warded vault, open sky during a storm of years) exactly the way a door can be locked —
never as a global cooldown, cost, or resource. Time travel is free. That is the premise.

### 4.4 Place persists, time varies

The map is a single spatial lattice threaded through all twelve eras. A room is a
*place*; each era gives it a different face, different objects, different people —
sometimes no face at all (the tower is not built yet; the tower is rubble). Where a
place doesn't exist in an era, arriving there resolves sensibly (you stand in the
meadow where the tower will be).

This makes the signature puzzle grammar of the game nearly free to author:

- Plant an acorn in 1099 BA; climb the oak in 99 AA.
- Read the founding charter in 2099 AA to learn the word that opens the crypt in 2099 BA.
- Drop a coin down the well as a child watches in 99 BA; in 1099 AA the coin is in a
  museum case, and the placard names the child.

**Consistency posture (important, and cheap):** changes a player makes ripple forward
along *their own* story (see §3.3 — story is a personal script), so paradoxes are
designed around rather than simulated. Authors write explicit era-states and explicit
cause–effect links. There is no general physics of time. Zork did not simulate fluid
dynamics to put water in a bottle.

## 5. Content structure

### 5.1 Realms

The world divides into **realms** — contiguous geographic regions of, roughly, 30–150
places, threaded through all twelve eras (an author may leave eras sparse: "in 5099 BA
this whole valley is under the ice" is one sentence and perfectly good content). We
author the founding realm; contributors propose new ones at the edges of the map (§7).

### 5.2 Threads (quests)

A **Thread** is a storyline: a braid of scenes, characters, and puzzles, usually spanning
several eras, with a beginning and at least one ending. There is no single "winning" of
99 — the game accretes Threads the way a long-running universe accretes tales. Threads
can be small (one room, one ghost, one kindness) or realm-spanning epics.

Threads declare their dependencies (places, items, canon facts) and may *reference* other
Threads' outcomes, which is how seemingly distant stories come to connect — the
Marvel/Tolkien pleasure of recognizing a name from another tale a thousand years away.

### 5.3 The compass of endings

Multiple Threads means multiple endings, and endings need weight. Completing a Thread is
commemorated in the world itself where possible — an epitaph gains a line, a song gains a
verse in a later era — visible to that player in their story, and recorded on their
Traveler's record (`THREADS` lists tales begun, abandoned, and finished).

### 5.4 Cross-time cooperation

The multiplayer flourish unique to 99: two players in the *same place, different eras*
cooperating. One player holds the sluice open in 2099 BA; the streambed is dry for her
partner in 1099 AA, ten centuries downstream, for as long as she holds it. Used sparingly,
in authored moments — never required for a Thread's only ending (a lone player must
always have a path).

## 6. Illuminations (the visual system)

### 6.1 The idea

A small minority of rooms — the target is **fewer than one room in ten** — contain an
**Illumination**: a visual element that scrolls into the transcript the way text does,
line by line, as if the terminal itself were printing it. The name is from illuminated
manuscripts: most pages of the codex are ink; a rare page has gold leaf. Finding one
should feel like finding a gem, and interacting with one can be critical to a Thread —
they are game, not garnish.

### 6.2 The constraint

Open-ended HTML/CSS/JS is expressly forbidden. An Illumination is a declarative data
file in a deliberately narrow format — our Minecraft-blocks constraint, one notch richer
than ASCII art:

- **A cell grid**, maximum 64 × 24 cells, aligned to the terminal's character grid so
  that image and text share one typographic rhythm.
- **Each cell holds one glyph** drawn from the **Foundry**: a single curated tileset we
  maintain and version — strokes, hatching, foliage, water, masonry, creatures, and the
  full monospace character set (ASCII art is a proper subset of the format).
- **A fixed palette of 16 inks**, chosen once, era-neutral, matching the terminal theme.
- **Animation** is a per-cell loop of up to 8 frames at a fixed slow tick — enough for
  guttering candles, falling water, a turning mill wheel; not enough for cinema.
- **Interactivity** is hotspots: a rectangular region of cells mapped to a *command*
  (tapping the bell composes `RING BELL` into the prompt). Hotspots may show/hide grid
  layers in response to game state (the door layer swaps when the door opens).

Everything an Illumination can do, a command can do — tapping is a convenience, so the
game remains fully playable blind, over a screen reader, or by a purist who refuses to
touch the mouse on principle.

### 6.3 Why a constraint this shape

The grid-of-glyphs rule makes every Illumination in the game — by any author — feel
sibling to every other, the way all Minecraft builds feel like Minecraft. It keeps
contributions reviewable (a data file, not code), safe (nothing executes), portable
(renders anywhere a terminal renders), and it preserves scarcity of *spectacle* while
leaving room for craft. The Foundry tileset itself is canon-adjacent: we curate it, and
extending it is a governance act (§7), not an author's whim.

## 7. Extensibility and creative control

### 7.1 The line

**Anyone may build in the universe. Only we may build the universe.**

- **We own:** the universe bible; the Awakening and the Gap; the nature and rules of the
  Travelers; the timeline's fixed points; the Foundry tileset; the writing guide; the
  name of the world.
- **Contributors own (subject to review):** realms, places, era-states, items, NPCs,
  Threads, Illuminations composed from the Foundry.

### 7.2 Canon tiers

1. **Core canon** — the universe bible and everything it fixes. Written only by us.
   Precedent: every long-lived universe (Tolkien's legendarium, D&D's cosmology, Marvel
   continuity) has a small custodial center that keeps a large collaborative edge
   coherent.
2. **Canon content** — contributed work that has passed review. It is *in* the world:
   on the shared map, reachable by every player, citable by later Threads.
3. **The Apocrypha** — a labeled proving ground (reached through a door in-fiction —
   a fair, a dream, a disreputable annex of the map) where new work can be played and
   critiqued before it is canon, without contaminating the world if it never gets there.

### 7.3 Review

Contributions are data (places, Threads, Illuminations in the constrained formats) and
are reviewed like pull requests against three published gates:

1. **Universe gate** — consistent with the bible; no new metaphysics; nothing about the
   Awakening beyond licensed mystery.
2. **Writing gate** — passes the writing guide.
3. **Craft gate** — puzzles fair, Threads completable, era-states of each place coherent
   with their neighbors in time.

We hold final cut, always. As the community matures, trusted contributors can be
deputized to review the second and third gates; the universe gate stays with us.

## 8. Naming and technology notes

- Names used here — *Everwhen*, *the Awakening*, *the Gap*, *the Long Step*,
  *Travelers*, *Threads*, *Illuminations*, *the Foundry* — are proposals. The universe
  bible marks which are load-bearing.
- Technology is out of scope for this document by design. The only constraints the
  design imposes on any future implementation: browser-based; a real shared world with
  per-player story state; content (places, Threads, Illuminations) as reviewable
  declarative data; playable on a phone without ceasing to be a terminal.

## 9. Open questions for @jake

1. **Name of the game.** Is **99** the title, or a codename to beat?
2. **World name.** *Everwhen* — keep, or workshop? (Alternatives in the bible's margin.)
3. **Twelve landings.** Comfortable with 5099 BA … 5099 AA as the full span forever, or
   should the design leave room to someday widen the chain (e.g., 6099) as an epochal
   community event?
4. **The Long Step.** Confirm: the Awakening stays permanently unreachable and
   unexplained — mystery as a renewable resource — vs. someday being the finale of a
   flagship Thread authored by us.
5. **Temporal verbs.** `PAST` / `FUTURE` as primary. Any appetite for flavored aliases
   (`AGO`, `ANON`)?
6. **Illumination density.** Is <10% the right scarcity, or rarer still?
7. **Multiplayer thinness.** Sign off on launch scope = presence, talk, trade, co-op
   mechanisms; no PvP, no combat, no economy.
