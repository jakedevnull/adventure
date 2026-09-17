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
