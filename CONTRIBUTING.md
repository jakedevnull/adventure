# Contributing to Everwyn

Everwyn is a text adventure game in deep time. The design is law; the code is data plus a
small engine. Contributions are welcome — content and code alike — as long as they fit
the world and its voice.

## Before you write anything

Read, in this order:

1. [`design/WRITING-GUIDE.md`](design/WRITING-GUIDE.md) — the voice. Every line of game
   text answers to it: terse, dry, second person.
2. [`design/UNIVERSE.md`](design/UNIVERSE.md) — the single source of creative truth.
   Core canon; when something seems unclear, work from its principles.
3. [`design/DESIGN.md`](design/DESIGN.md) — how the game works, including how place
   persists while time varies.
4. [`DEVELOP.md`](DEVELOP.md) — code layout, stack, and commands.

## Making a change

- Track work in Linear and branch off `main` for each change.
- Content is declarative data: one `Room` per file under `src/content/`, registered in
  `src/content/index.ts`. The engine validates the world at startup.
- Keep commits small — one room per commit when authoring content.
- Open a focused PR that references the issue; a maintainer reviews before merge.

## Verify before you open a PR

```sh
npm run typecheck   # tsc --noEmit
npm test            # parser, engine, and world tests
npm run eval:reach  # every room reachable from the start; exit 1 if not
node scripts/play.ts <COMMANDS…>   # scripted playthrough of your route
```

## Using agents in Linear

Much of the world is built by coding agents delegated from Linear issues:

- Delegate an issue to an agent from Linear and it works on a branch, opens a PR, and
  reports back on the issue. Agents start at [`AGENTS.md`](AGENTS.md) and follow the
  same rules as human contributors — design docs first, small commits, verified PRs.
- Story content runs through the autonomous story factory: label an issue `Game Story`
  and an orchestrator spawns `Plan`, `Generate`, and `Evaluate` sub-issues, each handled
  by its own agent session. The full loop is described in
  [`ADVENTURE_FACTORY.md`](ADVENTURE_FACTORY.md).
- Children of a story issue PR against the story branch, not `main`; only the
  orchestrator opens the PR to `main`. Evaluators report — they never fix.

## Ground rules

- The writing guide is law for all game text. When in doubt, cut words.
- The universe bible is edited only by maintainers; contributions build within it,
  not around it.
- Agents working in this repo start at [`AGENTS.md`](AGENTS.md); the autonomous story
  pipeline is described in [`ADVENTURE_FACTORY.md`](ADVENTURE_FACTORY.md).
