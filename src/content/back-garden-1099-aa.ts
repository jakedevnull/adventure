import type { Room } from "../types.ts";

// The Back Garden, 1099 AA — the Rekindling.
// The age that forgot there was a maze: it was grubbed out for allotments and
// withy beds, and the only thing left of it is bad digging at the north end.
// No way north, and none of the four ages outside the Hush and the Morning
// Country has one (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const backGarden1099AA: Room = {
  id: "back-garden:1099-aa",
  place: "back-garden",
  title: "Behind the House",
  landing: "1099 AA",
  age: "the Rekindling",
  look:
    "The plot is allotments now, pegged out in rows with cinder paths between them, and " +
    "past the last of them are withy beds and the canal with a lock on it. The well is " +
    "capped with an iron plate and has a pump bolted to the plate. At the north end the " +
    "digging goes badly, because the ground there is all old roots. The back door of the " +
    "House is south, and there is no other way out of the garden.",
  lookAgain:
    "Allotments and cinder paths, the withy beds, the canal and its lock. The capped well " +
    "with its pump on it. The back door of the House is south.",
  time: {
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "allotments",
      nouns: ["allotments", "allotment", "rows", "beds", "plots", "paths", "path", "cinders"],
      description: "Eleven plots, each with its own gate off the cinder path, and nine of them kept.",
    },
    {
      id: "roots",
      nouns: ["roots", "root", "stumps", "stump", "ground", "soil", "earth", "digging"],
      description:
        "Old roots, thick as an arm and hard as the spade, running in lines that nothing " +
        "above ground follows.",
    },
    {
      id: "well",
      nouns: ["well", "pump", "cap", "plate", "iron plate", "handle"],
      description:
        "An iron cap over the old shaft with a pump bolted through it, and the pump has " +
        "the guild's name cast into the handle twice.",
    },
    {
      id: "withies",
      nouns: ["withies", "withy", "withy beds", "willow", "willows", "osiers"],
      description: "Willow cut back to the stools every winter, for baskets, for the lock trade.",
    },
    {
      id: "canal",
      nouns: ["canal", "lock", "cut", "water", "barge", "barges"],
      description: "The cut runs along the end of the plot, and the lock keeper takes money at both ends of the day.",
    },
    {
      id: "wall",
      nouns: ["wall", "walls", "stones", "stone", "drystone", "masonry", "brick"],
      description: "Brick above and drystone below, and the brick is the part that needs pointing.",
    },
    {
      id: "door",
      nouns: ["door", "back door"],
      description: "The low door into the House, with a scraper beside it worn down to the fixings.",
    },
  ],
  exits: {
    south: "turning-house:1099-aa",
  },
};
