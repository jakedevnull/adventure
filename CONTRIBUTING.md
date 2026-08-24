# Contributing to Everwyn

Everwyn is a text adventure in deep time. The design is law; the code is data plus a
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

## Ground rules

- The writing guide is law for all game text. When in doubt, cut words.
- The universe bible is edited only by maintainers; contributions build within it,
  not around it.
- Agents working in this repo start at [`AGENTS.md`](AGENTS.md); the autonomous story
  pipeline is described in [`ADVENTURE_FACTORY.md`](ADVENTURE_FACTORY.md).
