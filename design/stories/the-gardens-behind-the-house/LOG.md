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
