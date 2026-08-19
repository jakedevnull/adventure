# Illuminations spike (SPE-32)

Ten example Illuminations as standalone HTML pages, to flesh out the visual
system described in [DESIGN.md §6](../../design/DESIGN.md). Open
`index.html` in a browser (no server needed) and click through.

Every example obeys the §6.2 constraint:

- a cell grid of at most 64 × 24, aligned to the terminal's character grid;
- one glyph per cell, from a curated set (a stand-in for the Foundry);
- 16 inks per palette;
- per-cell animation loops of at most 8 frames at one fixed slow tick;
- hotspots: cell rectangles mapped to a command, which is *composed* into the
  prompt, never executed;
- layers that show and hide with game state.

`illumination.js` is the one piece of engine (renderer, palettes, a toy
transcript/prompt). Each page holds its Illumination as declarative data — the
shape a contributor-facing format could take — plus a few scripted commands so
the interactivity can be felt.

Each page uses a different experimental palette (goldleaf, loom, verdigris,
sanguine, hearth, riverlight, phosphor, seasons, moonwash, lettered); the index
shows swatches so they can be compared side by side. `07-ferry-bell.html` is
deliberately pure ASCII in a single-hue palette, proving ASCII art is a proper
subset of the format.
