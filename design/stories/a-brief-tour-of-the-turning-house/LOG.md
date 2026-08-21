# Orchestration log — A Brief Tour of the Turning House

Mirror of the Linear document linked to SPE-57 (the primary copy). Story factory
orchestration log per `ADVENTURE_FACTORY.md` §5.8. Append-only.

Story branch: `cylocal/spe-57-a-brief-tour-of-the-turning-house`
factory: max_rooms: 6 · max_rounds: 2 · round: 0

---

## 2026-08-21 03:10 UTC · step 1 · orchestration start
- event:    session started on Game Story SPE-57
- saw:      story "A Brief Tour of the Turning House"; factory block max_rooms: 6,
            max_rounds: 2, round: 0. Story fits canon cleanly — the Turning House across
            the six landings, the brass lamp as the traveling through-line, persistence +
            the forgotten thing.
- decision: begin the loop; spawn the outline child next.
- reason:   per ADVENTURE_FACTORY.md §5.2 — orchestrator reads story + design docs,
            pushes the story branch, then delegates the outline.
- action:   read the three design docs; pushed story branch to origin; created the log
            document; slug = a-brief-tour-of-the-turning-house.
- next:     create sub-issue "Outline: A Brief Tour of the Turning House" (Generate),
            spawn it.

## 2026-08-21 03:11 UTC · step 2 · outline spawned
- event:    created and spawned the outline generator.
- saw:      SPE-58 created (label Generate, parent SPE-57, assignee inherited, state
            Todo); child session 9c0f6c03 started on the story branch base.
- decision: delegate the outline; wait for completion.
- reason:   per ADVENTURE_FACTORY.md §5.2/§1 — outline is the first child; the limit
            (max_rooms: 6) is enforced at the cheap outline check before any room is written.
- action:   sub-issue SPE-58 created (Generate); SPE-57 set blocked-by SPE-58; session
            spawned; deadline wakeup armed for 20 min.
- next:     await outline completion (or deadline). On completion: verify in worktree,
            check ≤6 rooms + all four sections, merge, then spawn Rooms.

## 2026-08-21 03:17 UTC · step 3 · outline accepted + merged
- event:    outline child SPE-58 completed (PR #14).
- saw:      OUTLINE.md with all four sections; 5 rooms (≤ 6); Blockers empty; landings in
            engine vocab (2099 BA, 1099 BA, 99 BA, 99 AA); lamp through-line spelled out
            (unlit 2099 BA → carried → lit 99 AA → return); two-way stride chain crossing
            the Gap. Verified in worktree: typecheck clean, 36/36 tests pass.
- decision: accept the outline and merge.
- reason:   per ADVENTURE_FACTORY.md §5.4 — count ≤ max_rooms, every room line has
            place/landing/purpose, Story carries the whole issue and reads as one story.
- action:   merged origin/spe-58 branch into the story branch (no-ff), pushed. Not a round.
- next:     spawn Rooms generator.

## 2026-08-21 03:18 UTC · step 4 · rooms spawned
- event:    created and spawned the detail generator.
- saw:      SPE-59 created (label Generate, parent, assignee inherited, Todo); child
            session f280727a started.
- decision: delegate room detail; wait for completion.
- reason:   per ADVENTURE_FACTORY.md §5.5 — detail child writes each room from the merged
            outline, one commit per room.
- action:   sub-issue SPE-59 created; SPE-57 blocked-by swapped SPE-58 → SPE-59; session
            spawned; deadline armed 20 min.
- next:     await rooms completion (or deadline). On completion: verify typecheck/test/
            eval:reach + a full play route in the worktree, confirm every room ticked with
            as-built notes, merge, then spawn Evaluate.

## 2026-08-21 03:31 UTC · step 5 · rooms accepted + merged
- event:    rooms child SPE-59 completed (PR #15, 5 commits, one per room).
- saw:      independently in the worktree: typecheck clean, 36/36 tests, eval:reach PASS
            5/5 (exit 0), and the full play route (TAKE LAMP, OUT/IN, FUTURE×3 →
            turning-house:99-aa with the brass lamp burning in the window "the one you
            carried", PAST×3 → back to start, SAY → landlady "nods, as if she has heard it
            before"). All 5 outline rooms ticked with as-built notes; Blockers empty. One
            engine note (lamp lighting is authored room text, not engine state — DESIGN
            §4.4) recorded as as-built, not a blocker.
- decision: accept the rooms and merge.
- reason:   per ADVENTURE_FACTORY.md §5.5/§4 — every outline entry written, registered,
            committed, verified; reachability + playthrough both green.
- action:   merged origin/spe-59 into the story branch (no-ff), re-verified merged build
            green, pushed. Not a round.
- next:     spawn Evaluate.

## 2026-08-21 03:31 UTC · step 6 · evaluate spawned
- event:    created and spawned the evaluator.
- saw:      SPE-61 created (label Evaluate, read-only preset, parent, assignee inherited,
            Todo); child session b7e820b8 started.
- decision: delegate reachability evaluation; wait for the report.
- reason:   per ADVENTURE_FACTORY.md §5.6 — an independent read-only pass proves every
            room reachable before any PR to main.
- action:   sub-issue SPE-61 created; SPE-57 blocked-by swapped SPE-59 → SPE-61; session
            spawned; deadline armed 15 min.
- next:     await the evaluator's PASS/FAIL report (or deadline). PASS → open PR to main,
            move SPE-57 to In Review. FAIL → round 0→1, hand report back to Rooms.
