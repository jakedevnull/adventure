# Orchestration log — The Eighth Stone

Mirror of the Linear document linked to JAK-38 (the primary copy).

## 2026-09-17 17:04Z · step 1 · START

- event:    orchestrator session opened on JAK-38 (label `Game Story`), story branch `cylocal1/jak-38-the-eighth-stone`
- saw:      factory block complete — max_rooms: 8, max_rounds: 3, round: 0, max_revisions: 5, revisions: 0, evaluate: true. Slug `the-eighth-stone`. Worktree clean at 417ba7d; fourteen rooms already exist (six turning-house faces, six crossroads-yard faces, two high-crossing faces).
- decision: proceed straight to §1 Plan; nothing written back to the issue.
- reason:   every key is present in the `factory:` block, so there are no defaults to fill in; `evaluate: true` means the full loop runs through §5.
- action:   read ADVENTURE_FACTORY.md and the three design docs; read `src/content/index.ts`, `high-crossing-2099-ba.ts` and `src/world.ts` to get the engine facts the planner will need; pushed the story branch to origin; created this log.
- next:     create the Plan sub-issue.

## 2026-09-17 17:05Z · step 2 · SPAWN Plan (JAK-39)

- event:    sub-issue created — JAK-39 "Plan: The Eighth Stone", label `Plan`, project `adventure`, state Todo, assignee jakedevnull, delegate cylocal.
- saw:      the story asks for a new place, the ford, east of `high-crossing`, persisting across at least four ages, with ELLERMARK / EIGHT as the through-line and the river as the edge of the map.
- decision: pass the story verbatim and add four engine facts of my own — the strideless `high-crossing` faces and their single `west` exit, the `MILESTONE_LETTERS` constant, `strideTarget`'s adjacent-landing-only rule, and the room budget counting new rooms only. Added a fourth acceptance criterion requiring the plan to state each face's exits and time flags and to walk the reachability chain on paper.
- reason:   the outline is the generator's only source (ADVENTURE_FACTORY.md §5.3), and this story's one real trap is temporal: a face that opens FUTURE into a landing with no face gives the player a refusal instead of a room, and the story explicitly asks for ages the crossing does not exist in. Making the planner write the flags down is where that trap gets caught cheaply, before eight rooms are written against it. The `MILESTONE_LETTERS` pointer exists because "the same hand" is a claim the code can enforce; the previous story already proved it works.
- action:   JAK-39 created and delegated (spawns the child session); JAK-38 marked blocked-by JAK-39; deadline wakeup set 20m.
- next:     the planner's completion, or the 20-minute deadline check — whichever comes first.

## 2026-09-17 17:15Z · step 3 · PLAN ACCEPTED (JAK-39) · CLOSE-OUT

- event:    the planner completed; OUTLINE.md (520 lines) landed on PR #7 against the story branch.
- saw:      8 room lines of 8 allowed — six `ford` faces and two `east-road` faces. Four required headings present; Blockers `_None._`. Two judgement calls flagged rather than buried: the ford takes all six landings (arithmetic, not appetite — a stride only reaches the adjacent landing, so 1099 BA, 99 BA, 99 AA are the chain that gets the player from a ford they can walk to in 2099 BA to the Rekindling lock), and the new `east` exit at both crossing faces is undiscoverable in the prose, which the planner recorded and did not act on.
- decision: accept.
- reason:   the count is exactly at `max_rooms`; every line carries place, landing, age and purpose; the Story section quotes the author verbatim then expands it into beats, a per-face exits-and-flags table with a reason column, the eighth stone age by age, the refusal per age for the far bank, and a build order arranged so every commit leaves the world valid. The all-six-faces call is the author's own requirement ("the years run from the ford as they run from the yard") turned into the only shape the engine allows, and the two extra faces do real work rather than filling budget. The discoverability note is correct to leave alone: the issue forbids changing anything in those two files but the exit, and both `look` bodies are already at the voice lint's four-sentence ceiling, so there is no legal edit — it is a human's call in a separate issue.
- action:   merged origin/cylocal1/jak-39-plan-the-eighth-stone into the story branch (3af30e3) and verified there: typecheck silent, `npm test` 46 pass / 0 fail, `eval:reach` 14 of 14 — the merge touches one file and no game content. Spot-checked four claims the plan rests on: `high-crossing:99-aa` has `west` only, the id-collision list is real (`milestone-1099-aa`, `tolls` both exist), the engine's no-exit reply is the fixed `You can't go that way.` (`src/engine.ts:223`), and `OUT`, `EAST` lands at `high-crossing:2099-ba` through the real engine. Story branch pushed. JAK-39 closed out: 5/5 criteria ticked, state Done, blocked-by removed.
- next:     spawn the generator.

## 2026-09-17 17:16Z · step 4 · SPAWN Generate (JAK-40)

- event:    sub-issue created — JAK-40 "Generate: The Eighth Stone", label `Generate`, project `adventure`, state Todo, assignee jakedevnull, delegate cylocal.
- saw:      eight unchecked room lines, a build order the plan has already worked out, and two one-line edits to shipped rooms.
- decision: add three acceptance criteria the outline implies but does not gate — the final `eval:reach` total (22 of 22), the existing-room edits staying to two exit lines with anything else declared, and the eighth stone's letters being one exported constant imported five times. Deliberately did **not** ask the generator to run `eval:voice` or an EXAMINE sweep.
- reason:   the first two are the cheapest way to check the two things this story can quietly get wrong — a face stranded off the chain, and shipped prose from the last story edited under cover of this PR — and both are checkable in a diff and a harness rather than by reading. The third makes "the same hand" a fact about the module graph, as `MILESTONE_LETTERS` already is. The voice lint and the noun sweep are withheld on purpose: they are the evaluator's job, and a generator that pre-runs them turns the first evaluation into a rubber stamp (ADVENTURE_FACTORY.md, and the skill's "leave the evaluator something to find").
- action:   JAK-40 created and delegated; JAK-38 blocked-by swapped from JAK-39 to JAK-40; deadline wakeup set 20m.
- next:     the generator's completion, or the 20-minute deadline check.
