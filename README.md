# Everwyn

A multiplayer, ever-expanding, online text adventure game — a browser terminal in the
Infocom tradition, set in a world where time travel is as easy as walking north.

## Play

A minimum playable slice runs at the command line: one room, the Turning House, in one
age. Needs Node 22.6+ (24 recommended).

```sh
npm run play
```

Type `HELP` at the prompt. See [DEVELOP.md](DEVELOP.md) for the code layout and tests.

## Roadmap

- Expand the story beyond the Turning House — more rooms, more ages.
- Move from the command line to the browser terminal.
- Open the world to multiple players at once.

## Design

- [Game design](design/DESIGN.md) — pillars, the time mechanic, multiplayer,
  extensibility and creative control.
- [Universe bible](design/UNIVERSE.md) — the world of Everwyn, the Awakening, the
  Travelers, the landings. Core canon; edited only by us.
- [Writing guide](design/WRITING-GUIDE.md) — the Zork-derived style all game text
  must follow.
