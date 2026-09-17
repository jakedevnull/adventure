---
name: evaluate-story
description: Prove every room of an Everwyn story is reachable from the start and its text obeys the writing guide's countable rules — run the reachability harness and the voice lint, play every route through the real engine, and report PASS or a detailed FAIL. Use when working an "Evaluate" sub-issue of a Game Story. Reports only; never fixes.
---

# Evaluate a story

You judge; you do not fix. You have no Edit/Write tools and you never commit. Your
deliverable is one report, in the exact shape below, as your **final response** —
beginning with the `verdict:` line — because the orchestrator parses it.

## Procedure

1. `npm install` if `node_modules` is missing. Read `design/stories/<slug>/OUTLINE.md`
   (the `## Story` section and the room list) so you know what each room is for.
2. **Harness.** Run `npm run eval:reach` and `npm run eval:reach -- --json`. This is the
   deterministic truth about the data: world problems, unreachable rooms, and a route for
   every reachable one.
3. **Voice lint.** Run `npm run eval:voice -- --story <slug>` and the same with `--json`,
   where `<slug>` is the story's folder under `design/stories/`. The `--story` filter reads
   the outline's `## Rooms` checklist and lints only those rooms: finished stories' rooms
   are not this story's problem and must not appear in your report. This is the countable
   half of `design/WRITING-GUIDE.md`: rooms ≤ 4 sentences, objects ≤ 1, banned vocabulary,
   at most one em-dash per passage, no exclamation points, no reversal tic. One finding per
   offending passage, with the text quoted and a one-line hint per rule.
4. **Playthrough.** For every reachable room, play its route through the real engine:
   `node scripts/play.ts --expect <room id> <ROUTE COMMANDS…>`. Exit code 1 means the
   engine disagrees with the data (a locked passage, a stride that refuses) — that is a
   failure even though the harness passed. Read the transcripts as you go: text that
   arrives in the wrong room, a stride landing in an unlisted age, an exit whose text
   contradicts the outline's purpose — note it.
5. **Nouns.** The writing guide's checklist says every mentioned noun responds to EXAMINE,
   and no script checks it. For each room in the outline: read its `look` (and `lookAgain`)
   and list every concrete thing it names — objects, people, animals, fixtures, parts of the
   building, features of the ground. Skip abstractions, places named only as direction
   ("the road east"), and the year line the engine adds. Then, standing in that room via its
   route, EXAMINE each one: `node scripts/play.ts <ROUTE…> "EXAMINE <noun>"`. A miss is any
   reply that is not that thing's description — the parser's `I don't know the word "…".` or
   the engine's `You can't see any such thing.` Record the noun, the sentence it appears in, and the
   engine's exact reply. Try the obvious synonym once before calling it a miss; the fix is
   almost always a `scenery` entry with the right `nouns`, not a change to the prose.
6. **Report.** Verdict is `PASS` only if the harness reports zero problems and zero
   unreachable rooms, every route plays through to its room, the voice lint reports zero
   findings, *and* every mentioned noun answers EXAMINE. Otherwise `FAIL`.

## Report format (your final response — exactly this)

```markdown
# Evaluation: <story title> (round <n>)
verdict: FAIL
rooms: 8  reachable: 6
voice: 3 findings
nouns: 2 missing

## Failures
### <place> · <landing> (<room id>)
- from: <nearest reachable room id> (reachable via: <its route>)
- tried: <the command(s) that should have led here>
- got: "<the engine's exact reply>"
- expected (outline): "<the room's purpose line from OUTLINE.md>"
- suggestion: <the smallest change that would make it reachable, e.g. an exit, a time stride pair>

### <next failure> …

## Voice
### <place> · <landing> (<room id>)
- <rule> · <item or scenery id>.<field>: <count> (limit <n>)   — or: matched "<word>"
  text: "<the passage, verbatim>"
  suggestion: <the harness's hint for that rule, e.g. keep the one concrete sentence>

### <next room with findings> …

## Nouns
### <place> · <landing> (<room id>)
- <noun> — in: "<the sentence of look that names it>"
  tried: EXAMINE <noun> (and: EXAMINE <synonym>)
  got: "<the engine's exact reply, e.g. You can't see any such thing.>"
  suggestion: scenery `<id>` with nouns ["<noun>", "<synonym>"] and a one-sentence description

### <next room with misses> …

## Harness output
<paste of npm run eval:reach, then npm run eval:voice -- --story <slug>>

## Notes
<anything the playthrough saw that the harness cannot: wrong-room text, strides landing
oddly, exits whose text contradicts the outline. Empty is fine.>

## Acceptance criteria
- ✓/✗ <each criterion from your sub-issue, verbatim> — <one line of evidence>
```

For `PASS`, include the same header, both harness outputs, the routes you played, the nouns
you tried per room (one line each), and the `## Acceptance criteria` block. Empty `## Voice`
and `## Nouns` sections are fine, but the list of nouns tried is not optional: the
orchestrator cannot tick a sweep it cannot see. The orchestrator ticks your sub-issue's boxes from that
block after re-checking; it cannot tick what you did not report.

## Rules

- Never edit content, never commit, never "just fix it". If you see the fix, put it in
  `suggestion:`; the generator owns the change.
- Every failure names where the player stood, what was typed, what came back, and what
  the outline promised — enough to reproduce without re-deriving anything.
- Keep judgment out of `## Failures`, `## Voice` and `## Nouns` (those are facts: a count, a
  matched word, a quoted passage, an engine reply); put judgment — flat delivery, surprising detail, "read it
  aloud" — in `## Notes`.
