# Orchestration log — A Brief Tour of the Turning House

Story issue: [JAK-14](https://linear.app/jakedevnull/issue/JAK-14/a-brief-tour-of-the-turning-house) ·
Story branch: `cylocal/jak-14-a-brief-tour-of-the-turning-house` ·
Slug: `a-brief-tour-of-the-turning-house`

Primary copy: the Linear document "Orchestration log — A Brief Tour of the Turning House",
attached to JAK-14. This file is the mirror (ADVENTURE_FACTORY.md §5.8).

## 2026-08-31 17:48Z · step 1 · start
- event:    orchestrator session started on JAK-14 (label `Game Story`)
- saw:      factory block parsed — max_rooms: 6, max_rounds: 2, round: 0, max_revisions: 5,
            revisions: 0, evaluate: false. All keys present; no defaults needed. World today is
            one room (`turning-house`, 2099 BA), landings ["2099 BA"]. `design/stories/` holds
            only its README, so this is the first story in this repo.
- decision: run the factory loop, but stop after Generate — no Evaluate child.
- reason:   the author set `evaluate: false` ("Part 3: stop before the evaluator") in the
            factory block, which overrides ADVENTURE_FACTORY.md §5.6 for this run. The other
            limits stand.
- action:   read ADVENTURE_FACTORY.md and the three design docs; pushed the story branch to
            origin (children branch from it); created this log and its Linear document.
- next:     create the Plan sub-issue (§1).

## 2026-08-31 17:49Z · step 2 · spawn planner
- event:    Plan sub-issue created and delegated
- saw:      no `mcp__cyrus-tools__linear_agent_session_create` tool in this deployment, and
            creating JAK-15 with the inherited assignee alone started no session
            (`linear_get_agent_sessions` showed only this orchestrator session).
- decision: spawn the child by setting the sub-issue's Linear delegate to CyLocal.
- reason:   the skill's spawn tool does not exist here, and the base orchestrator rule
            "never delegate" assumes it does. Delegation is the only remaining mechanism that
            starts a child session, and without a child nothing in the loop can proceed. Noted
            here as a deliberate deviation rather than a silent one.
- action:   JAK-15 "Plan: A Brief Tour of the Turning House" created — label `Plan`, parent
            JAK-14, project `adventure`, state Todo, assignee jakedevnull; JAK-15 blocks
            JAK-14; delegate CyLocal; deadline wakeup set 20m.
- next:     the planner's OUTLINE.md, checked against max_rooms: 6 (§2). By 18:09Z.

## 2026-08-31 18:10Z · step 3 · outline check + close-out JAK-15
- event:    planner completed (JAK-15, session ended 17:59:34Z, PR #2). My 20-minute deadline
            fired at 18:09Z and found the work already done, so no wait/escalate call was
            needed.
- saw:      OUTLINE.md, 170 lines. Six room lines, all the place `turning-house`, one per
            landing 2099 BA → 2099 AA, each with landing, age name, and a purpose. Sections
            Story / Rooms / Through-lines / Blockers all present; Blockers empty. The Story
            section quotes the author verbatim and expands it into arc, beats, keepers, tone,
            and an "engine constraints" section the planner checked against the code.
- decision: accept the outline and merge it.
- reason:   per §2 — 6 rooms is exactly `max_rooms: 6`, not over; every room line carries
            place, landing, age, purpose; landings use engine vocabulary throughout, no
            calendar years; the Story section is self-sufficient (a generator never needs
            JAK-14). Verified on the merged story branch, not the child worktree (§9):
            `npm run typecheck` clean, `npm test` 36/36 pass, `npm run eval:reach` PASS
            (rooms: 1 reachable: 1 — the world is still the single shipped room, as expected
            before generation). PR #2 confirmed based on the story branch.
- action:   merged origin/cylocal/jak-15-… into the story branch and pushed (PR #2 auto-merged
            at 18:10:29Z); JAK-15 criteria ticked 4/4 and moved to Done; JAK-14's blocked-by on
            JAK-15 removed.
- next:     generation (§3).

## 2026-08-31 18:11Z · step 4 · spawn generator
- event:    Generate sub-issue created and delegated
- saw:      outline merged and clean on the story branch; six unchecked room lines waiting.
- decision: spawn one generator for all six rooms, and name the six room ids in the sub-issue.
- reason:   sequential, one child at a time (§Rules). The ids are mechanical — the legacy
            `turning-house` for 2099 BA plus `<place>:<landing-slug>` for the other five — so
            fixing them in the sub-issue removes the one thing two agents could disagree
            about. Added an explicit `eval:reach` PASS (6/6) criterion because this run has
            `evaluate: false` and no evaluator child will check it for me.
- action:   JAK-16 "Generate: A Brief Tour of the Turning House" created — label `Generate`,
            parent JAK-14, project `adventure`, state Todo, assignee jakedevnull; JAK-16
            blocks JAK-14; delegate CyLocal; deadline wakeup set 20m.
- next:     six rooms written, committed, and ticked with as-built notes. By 18:31Z.

## 2026-08-31 18:47Z · step 5 · generation verified + close-out JAK-16
- event:    generator completed (JAK-16, session ended 18:22:50Z, PR #3), twelve commits —
            one writing each of the six faces, one annotating each.
- saw:      all six room lines in OUTLINE.md ticked with as-built notes, every through-line
            moved from "planned" to "as built", Blockers still empty. Three deviations are
            recorded and each is the same kind: an obvious beat withheld because the verb
            does not exist (no wine in the Long Noon, `drink` is not a verb; the bell-rope
            in the Hush left at the keeper's shoulder rather than offered, no `pull`), plus
            one test assertion updated because opening FUTURE on 2099 BA changes what the
            single-room test world replies.
- decision: accept and merge; close JAK-16 out at 5/5.
- reason:   verified on the merged story branch (§9), not on the child's claim.
            `npm run typecheck` clean; `npm test` 36/36; `npm run eval:reach` PASS,
            rooms: 6 reachable: 6, route FUTURE ×5. Played the tour end to end:
            `node scripts/play.ts "TAKE LAMP" FUTURE ×5 INVENTORY --expect
            turning-house:2099-aa` exits 0, the lamp is still carried on arrival, and a
            brass lamp is burning on the sill with the same three dents. Neither room says
            they are the same lamp. `EXAMINE LAMP` there gives the burning one and
            `EXAMINE BRASS LAMP` the carried one, so both are reachable by name as the
            as-built note claims. Walked it backwards too: PAST ×5 returns to 2099 BA and
            both ends refuse in voice. For the commit-per-room criterion I checked out all
            twelve commits in a scratch worktree and ran typecheck + tests at each: twelve
            for twelve green, so the criterion is a verification record and not a
            self-report. The test-assertion change was read and is narrow — it still
            asserts a refusal, just the correct one for a one-room world.
- action:   merged origin/cylocal/jak-16-… into the story branch and pushed; JAK-16 criteria
            ticked 5/5 and moved to Done; JAK-14's blocked-by on JAK-16 removed.
- next:     the stop condition (§6, as modified by `evaluate: false`).

## 2026-08-31 18:48Z · step 6 · STOPPED: evaluate: false
- event:    end of the run
- saw:      six rooms merged on the story branch, both children Done, round 0 of 2 unused,
            no blockers recorded.
- decision: stop here. No Evaluate sub-issue, and no PR to `main`.
- reason:   the author's factory block sets `evaluate: false` ("Part 3: stop before the
            evaluator"), so §5 does not run. §6 opens the PR to `main` only on an
            evaluator PASS, and with no evaluator there is no PASS to act on — opening one
            anyway would assert a verdict nobody produced. My own checks (typecheck, tests,
            eval:reach 6/6, the tour played both ways) are recorded above and are what the
            story branch is offered on; they are not a substitute for the evaluator, which
            also reads the routes against the outline's promises.
- action:   JAK-14 moved to In Review with the story branch pushed and no PR to `main`.
            Story branch: `cylocal/jak-14-a-brief-tour-of-the-turning-house`.
- next:     the author's call — review the branch, or say the word and I will open the PR to
            `main`, or flip `evaluate: true` and I will run the evaluator round.

## 2026-08-31 20:20Z · step 7 · RESUMED: evaluate: true · spawn evaluator
- event:    the author flipped `evaluate: true` on JAK-14 and said continue. The run that
            stopped at step 6 resumes at §5.
- saw:      factory block re-read: `evaluate: true`, round still 0 of 2, revisions 0. Story
            branch unchanged and in sync with origin, plus one new commit from the author
            (e8064fd, the evaluate-story skill from upstream). The `Evaluate` label did not
            exist in this workspace, and `create_issue_label` returned
            `auth_insufficient_scope` — this orchestrator cannot create labels.
- decision: spawn the evaluator unlabeled rather than hold the loop, having put the
            question to the author first.
- reason:   ADVENTURE_FACTORY.md §11 makes the evaluator read-only *by tool preset*, which
            the label selects; without it the child gets the default preset and full tools.
            That is a real weakening of a settled decision (§13), so it was the author's
            call, not mine. They answered "continue". Read-only is therefore held by
            instruction this round — stated three times over (the sub-issue's own header,
            the `evaluate-story` skill, and CLAUDE.md's "Evaluators never fix") — and, more
            usefully, made checkable: I added a fourth acceptance criterion, "No commits,
            no content edits, no PR", which I verify against the child's branch rather than
            take on trust.
- action:   JAK-17 "Evaluate: A Brief Tour of the Turning House" created — parent JAK-14,
            project `adventure`, state Todo, assignee jakedevnull; JAK-17 blocks JAK-14;
            delegate CyLocal; JAK-14 moved back to In Progress; deadline wakeup set 15m.
- next:     the report (§8 format), verdict PASS or FAIL. By 20:35Z.

## 2026-08-31 20:21Z · step 8 · label arrives mid-flight
- event:    the author created the `Evaluate` label themselves, about a minute after JAK-17
            was spawned.
- saw:      child session 1e7e680b started 20:19:55Z; the label landed after that, so the
            running session had already resolved its tool preset without it.
- decision: label JAK-17, correct the now-false paragraph in its description, and let the
            running session finish rather than kill and respawn it.
- reason:   a tool preset is fixed when the session starts, so relabeling does not retool
            the child in flight; only a fresh session would, and I have no tool to stop one
            cleanly (cancel-and-redelegate churns the issue). Against that: the cost of
            being wrong is bounded and detectable. I verify on the merged story branch and
            one criterion is explicitly that its branch is unchanged, so if this child edits
            or commits anything I will see it, discard the branch, and respawn — and the
            respawn will pick up the label correctly, since it now exists. Letting a
            possibly-overtooled evaluator run under watch is cheaper than a restart, and
            the label is right for every session after this one.
- action:   `Evaluate` label applied to JAK-17; the description paragraph that said the
            label could not be created replaced with what is actually true.
- next:     unchanged — the report, by 20:35Z, plus a branch check before I trust it.

## 2026-08-31 20:24Z · step 9 · PASS · close-out JAK-17 · PR to main
- event:    evaluator completed (JAK-17, session ended 20:22:07Z, two minutes). The author
            asked me to wake early rather than sit out the 15-minute deadline, so I read the
            report from the session thread instead of waiting for the resume.
- saw:      `verdict: PASS`, rooms: 6 reachable: 6, no failures. The report goes past the
            harness: all six routes replayed, the chain walked backward, both closed ends
            checked, the lamp through-line played end to end, and each room's text read
            against what the outline promised. Two problems are carried forward as explicitly
            out of scope: `scripts/play.ts` drops the first command when `--expect` is absent,
            and `src/engine.ts` HELP still calls PAST and FUTURE verbs "you will not need
            tonight".
- decision: accept the PASS, close JAK-17 out at 4/4, and open the PR to `main`.
- reason:   re-ran everything myself on the story branch rather than taking the verdict
            (§9): `eval:reach` PASS 6/6 with `"problems": []` and `"unreachable": []`; the
            quiet route prints `turning-house:2099-aa` and exits 0; the lamp route exits 0
            with the lamp still in inventory after five strides and both lamps answering to
            their own names. The read-only criterion I checked against the child's worktree
            rather than its word — `git log cylocal/jak-14-…..HEAD` there returns nothing and
            `git status --porcelain` shows only the untracked settings file it did not
            create — so the unlabeled evaluator behaved as an evaluator despite holding the
            tools not to. I also confirmed both carried-forward notes are real
            (`expectIdx = -1` makes the filter drop argument 0; `engine.ts:364`). Neither
            touches this story's rooms, so neither is a FAIL, and per §5.6 the evaluator was
            right to report rather than fix them.
- action:   JAK-17 criteria ticked 4/4 and moved to Done; JAK-14's blocked-by on JAK-17
            removed; PR opened story branch → `main`; JAK-14 moved to In Review. Round
            finished at 0 of 2 — no fix round was needed.
- next:     human review of the PR. Revisions, if any, are §7 and draw on `max_revisions: 5`,
            not on the untouched fix-round budget.
