import type { Room } from "../types.ts";

// The Back Garden, 2099 BA — the High Masonry.
// The oldest face of the plot behind the House, and the story's first room
// after the front door. No maze: that is a thousand years off, and the ground
// here is being eaten off, not laid out. The well is established here and
// carries the through-line through all six faces without a word of comment
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const backGarden2099BA: Room = {
  id: "back-garden:2099-ba",
  place: "back-garden",
  title: "Behind the House",
  landing: "2099 BA",
  age: "the High Masonry",
  look:
    "A walled plot behind the inn, laid in the same drystone and to the same standard, " +
    "which is to say it will outlive the beans. Onions and kale in beds, a dozen young " +
    "apple trees at the far end, and a well in the middle with a windlass over it. The " +
    "back door of the House is south.\n" +
    "An apple has come down early and lies in the grass.",
  lookAgain:
    "The walled plot, the beds, the young orchard, the well. The back door of the House " +
    "is south.",
  time: {
    // The oldest landing in the world. The years run forward only.
    past: false,
    future: true,
  },
  items: [
    {
      id: "apple",
      nouns: ["apple", "windfall", "fruit"],
      description: "A small hard apple, one side gone red early where the wall keeps the sun.",
      takeable: true,
      eat: "You eat the apple. It is sharp enough to be somebody's cider in a year or two.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "well",
      nouns: ["well", "windlass", "bucket", "shaft"],
      description:
        "A shaft of dressed stone with a windlass over it, and nobody thought it worth " +
        "naming who dug it.",
    },
    {
      id: "orchard",
      nouns: ["orchard", "trees", "tree", "apple trees", "apples"],
      description: "Twelve trees, none of them thicker than a wrist. Somebody is being patient.",
    },
    {
      id: "beds",
      nouns: ["beds", "bed", "onions", "kale", "beans", "vegetables", "plot"],
      description: "Onions, kale, and beans in rows, weeded to the inch.",
    },
    {
      id: "wall",
      nouns: ["wall", "walls", "stones", "stone", "drystone", "masonry"],
      description: "Drystone, laid without mortar, shoulder high and warm on the south side.",
    },
    {
      id: "door",
      nouns: ["door", "back door"],
      description: "A low door into the House, worn hollow at the sill by people carrying things.",
    },
    {
      id: "ground",
      nouns: ["ground", "grass", "earth", "soil"],
      description: "Good black soil, and the stones out of it are in the wall.",
    },
  ],
  exits: {
    south: "turning-house",
  },
};
