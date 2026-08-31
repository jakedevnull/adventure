# Orchestration log — The Gardens Behind the House

Story issue: [JAK-18](https://linear.app/jakedevnull/issue/JAK-18/the-gardens-behind-the-house) ·
Story branch: `cylocal/jak-18-the-gardens-behind-the-house` ·
Slug: `the-gardens-behind-the-house`

Primary copy: the Linear document "Orchestration log — The Gardens Behind the House",
attached to JAK-18. This file is the mirror (ADVENTURE_FACTORY.md §5.8).

## 2026-08-31 21:37Z · step 1 · start
- event:    orchestrator session started on JAK-18
- saw:      factory block parsed — max_rooms: 14, max_rounds: 4, round: 0, max_revisions: 5,
            revisions: 0, evaluate: true. All keys present; no defaults needed. The world today
            is six rooms, all the place `turning-house`, one per landing 2099 BA -> 2099 AA
            (shipped by JAK-14). JAK-18 carried no labels and had already been moved to
            In Progress by the delegation.
- decision: run the full factory loop — Plan → Generate → Evaluate → PR to `main`.
- reason:   `evaluate: true` this time, unlike JAK-14's first pass, so §5.6 applies unmodified
            and the evaluator gate is in play. The trailing comment on that line ("Part 3: stop
            before the evaluator") is stale text carried over from the JAK-14 template; the
            value is what the factory reads, and JAK-14's own resume at step 7 set the
            precedent that `true` means run the evaluator.
- action:   read ADVENTURE_FACTORY.md, the orchestrate-story skill, and the three design docs;
            applied the `Game Story` label to JAK-18 (it had none, and the gardener and every
            later reader key off it); pushed the story branch to origin so children can branch
            from it; created this log and its repo mirror.
- next:     create the Plan sub-issue (§1).

## 2026-08-31 21:39Z · step 2 · spawn planner
- event:    Plan sub-issue created and delegated
- saw:      this deployment still has no `mcp__cyrus-tools__linear_agent_session_create` tool
            (checked the tool list), the same gap JAK-14 hit at its step 2.
- decision: spawn the child by setting JAK-19's Linear delegate to CyLocal, as on the previous
            story.
- reason:   delegation is the only mechanism here that starts a child session, and without a
            child nothing in the loop can proceed. Recorded as a deliberate deviation from the
            skill's spawn instruction rather than a silent one.
- action:   JAK-19 "Plan: The Gardens Behind the House" created — label `Plan`, parent JAK-18,
            project `adventure`, state Todo, assignee jakedevnull; JAK-19 blocks JAK-18;
            delegate CyLocal; deadline wakeup set 20m. The sub-issue carries an extra
            acceptance criterion and an "engine facts" section in its Technical Notes: the
            engine has no conditional state (no locks, keys, or flags), so "a very little bit
            of time travel is required" can only be expressed structurally, by exits that
            differ era to era. Better to hand the planner that constraint now than to reject
            an unbuildable outline at §2.
- next:     the planner's OUTLINE.md, checked against max_rooms: 14 (§2). By 21:59Z.

## 2026-08-31 21:59Z · step 3 · deadline fired · planner still running
- event:    the 20-minute deadline on JAK-19 fired before the child reported
- saw:      JAK-19 In Progress since 21:39:20Z, last activity 21:50Z. Its branch carries one
            commit (2bf9389, OUTLINE.md, 288 lines) and PR #5 is open with the correct base,
            `cylocal/jak-18-the-gardens-behind-the-house`. Read the outline off the remote
            branch without merging: fourteen room lines — six `back-garden` faces and two each
            of `maze-mouth`, `long-walk`, `far-walk`, `maze-heart` at 99 BA and 99 AA — all
            four sections present, Blockers empty, engine landings throughout. The maze is
            built from exits alone, as the sub-issue required: the east turn exists only in
            99 BA, the gap into the heart only in 99 AA.
- decision: wait, and re-arm for 10 minutes rather than merging now.
- reason:   per §8 the child is visibly progressing — deliverable pushed, PR opened, session
            still live and likely writing its final response. Merging a branch out from under
            a running child risks taking a half-finished state and losing whatever it pushes
            next; there is no cost to waiting, and its completion resumes me sooner than any
            deadline. Reading the outline in place is free and leaves nothing to do at §2 but
            re-run the checks on the merge.
- action:   no merge, no feedback, no round consumed; deadline re-armed 10m.
- next:     the planner's completion, then the §2 outline check on the merged story branch.
            By 22:09Z.

## 2026-08-31 22:13Z · step 4 · outline accepted · CLOSE-OUT JAK-19 · spawn generator
- event:    planner completed; §2 outline check; Generate sub-issue created and delegated
- saw:      the child's Cyrus session ended at 21:50:32Z (agent-sessions list), but JAK-19 was
            left In Progress and no completion resumed me — the second time this run that the
            issue state lagged the session. The work itself was complete: OUTLINE.md, 288
            lines, sections Story / Rooms / Through-lines / Blockers, Blockers empty. Fourteen
            room lines, counted mechanically, exactly `max_rooms: 14`. Engine landings
            throughout, no calendar years. The Story section quotes the author verbatim and
            expands it into arc, beats, cast, items, tone, an explicit exit graph and stride
            table, and an "engine facts" section checked against the source.
- decision: accept the outline and merge it; do not send it back.
- reason:   per §2 — the count is at the cap, not over; every room line carries place, landing,
            age, and purpose; the Story section is self-sufficient. The extra criterion I added
            is met concretely: the east turn out of `long-walk` exists only in 99 BA, the gap
            into the heart only in 99 AA, and `maze-heart:99-ba` has no spatial exits at all,
            so the sword genuinely cannot be had without striding — and none of it needs a
            mechanic the engine lacks. Verified on the merged story branch, not the child
            worktree (§9): `npm run typecheck` clean, `npm test` 36/36, `npm run eval:reach`
            6 rooms / 6 reachable (unchanged, as expected — the outline is a document).
- action:   merged the planner branch into the story branch and pushed (a478652); PR #5 merged
            22:12:40Z; JAK-19 criteria ticked 5/5 and moved to Done; JAK-18's blocked-by on
            JAK-19 removed. JAK-20 "Generate: The Gardens Behind the House" created — label
            `Generate`, parent JAK-18, project `adventure`, Todo, assignee jakedevnull; JAK-20
            blocks JAK-18; delegate CyLocal; deadline 20m. Its criteria go past the skill's
            template on purpose: the exit graph built exactly including its asymmetries, the
            six `turning-house` files gaining a north exit and nothing else, `eval:reach` at
            20/20, and the outline's own sixteen-command route played through the real engine.
            Those are the four ways this particular story can be built wrong, and each is
            cheap for the generator to check and expensive for an evaluator to find.
- next:     the generator's fourteen rooms (§4). Round still 0 of 4. By 22:33Z.
