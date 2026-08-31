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
