import type { Room } from "../types.ts";

// The Back Garden, 2099 AA — the Lettered Age.
// The newest face of the plot. The maze is mown into the turf from a
// reconstruction that is wrong, and the placard records the one true fact in
// the story — the far walk's north hedge was renewed once — as an item of
// estate bookkeeping. That is the player's fair hint from the far end, and the
// placard disagrees with the gardener's plan in 1099 BA about everything else
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const backGarden2099AA: Room = {
  id: "back-garden:2099-aa",
  place: "back-garden",
  title: "Behind the House",
  landing: "2099 AA",
  age: "the Lettered Age",
  look:
    "The plot is lawn, and the plan of the maze that stood here is mown into it in " +
    "stripes, done fresh this spring. The mower works from a reconstruction, and the " +
    "reconstruction is sure of itself. The well is the same well, roped off, with a card " +
    "on a stand beside it. The back door of the House is south; north is grass, and " +
    "stumps under the grass.\n" +
    "A placard on a post stands at the north end, where the arch was.",
  lookAgain:
    "The mown plan on the lawn, the well behind its rope, the placard on its post at the " +
    "north end. The back door of the House is south.",
  time: {
    past: true,
    // The newest landing in the world.
    future: false,
  },
  items: [
    {
      id: "maze-placard",
      nouns: ["placard", "notice", "post", "board", "sign"],
      description: "A placard on a post, lettered fine, with a plan of the maze printed at the foot of it.",
      takeable: false,
      takeRefusal: "It is set in concrete, and the university would want it back.",
      read:
        "THE HOUSE MAZE. Nine walks and a fountain at the middle, entered from the west. " +
        "The estate books record the north hedge of the far walk renewed once, at some " +
        "expense, and do not say why.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "mown-plan",
      nouns: ["stripes", "mown plan", "mowing", "lawn", "turf", "grass", "plan"],
      description:
        "Stripes cut light and dark into the turf, in the shape of somebody's best guess, " +
        "renewed every spring since the guess was made.",
    },
    {
      id: "well",
      nouns: ["well", "rope", "stand", "card", "shaft", "railing"],
      description:
        "The same shaft, behind a rope, on a card that gives it two sentences and a date.",
    },
    {
      id: "stumps",
      nouns: ["stumps", "stump", "roots", "root", "ground", "earth", "soil"],
      description: "The stumps are still down there. In a dry August the grass over them goes brown first.",
    },
    {
      id: "wall",
      nouns: ["wall", "walls", "stones", "stone", "drystone", "masonry", "brick"],
      description: "Rebuilt to the old line, in the old stone, by people who counted the courses first.",
    },
    {
      id: "door",
      nouns: ["door", "back door"],
      description: "The low door into the House. The lintel over it has been dated three times.",
    },
  ],
  exits: {
    south: "turning-house:2099-aa",
  },
};
