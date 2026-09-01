# Orchestration log — Basement Encounter (JAK-22)

Mirror of the Linear document "Orchestration log — Basement Encounter". Primary copy
lives on the story issue; this one ships in the PR.

## 2026-09-01 02:11Z · step 1 · start
- event:    orchestrator session started on JAK-22 "Basement Encounter" (label `Game Story`)
- saw:      factory block complete — max_rooms 6, max_rounds 3, round 0, max_revisions 5,
            revisions 0, evaluate true. Story: a stair from the House down to a dark
            basement; go down without a light and you are lost and eaten by a grue; a
            weapon lets you kill it instead.
- decision: proceed to §1 (Plan), and tell the planner in writing that this story is a
            mechanic as much as a set of rooms.
- reason:   engine survey before delegating: `src/types.ts` has no darkness flag and no
            light/weapon notion; `src/engine.ts` has no turn counter, no death, no
            ATTACK verb; `src/parser.ts` has no LIGHT/ATTACK/KILL. The factory's usual
            assumption — a story is declarative room data — does not hold here. Naming
            that at plan time is cheaper than discovering it in a fix round.
- action:   story branch `cylocal/jak-22-basement-encounter` pushed to origin; story
            directory `design/stories/basement-encounter/` created; this log started.
- next:     create the Plan sub-issue and spawn the planner.
