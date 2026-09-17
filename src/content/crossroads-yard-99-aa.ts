import type { Room } from "../types.ts";

// Crossroads Yard, 99 AA — the Morning Country.
// One stride, straight over the Gap, and nothing here explains it. The roads are
// under the grass and the drystone wellhead has not moved a stone, which is why
// there is a village: not the kingdom, but the road; not the cathedral, but the
// well beside it (UNIVERSE.md §6). No collapse is narrated. The grass has the
// roads, and the room moves on.
// All text here answers to design/WRITING-GUIDE.md.

export const crossroadsYard99Aa: Room = {
  id: "crossroads-yard:99-aa",
  place: "crossroads-yard",
  title: "Crossroads Yard",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "Grass has both roads, and you find them underfoot rather than by looking. Six or " +
    "seven houses stand around the well, which is the only reason any of them are " +
    "here. Children carry water in pairs, and nobody has asked who you are.\n" +
    "A path goes east through the grass along the line of the buried road, and the old " +
    "inn is at your back.",
  lookAgain:
    "The houses around the well, and the path going east through the grass. The inn is " +
    "behind you, under half a roof.",
  time: {
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "well-99-aa",
      nouns: ["well", "wellhead", "water", "rope", "bucket", "stones"],
      description: "Drystone laid without mortar, standing as it was laid, and the reason for every roof in sight.",
    },
    {
      id: "yard-roads-99-aa",
      nouns: ["road", "roads", "crossing", "crossroads", "grass", "path", "high road", "high roads"],
      description: "Under the turf and straight as ever, so the paths people wear go exactly where they go.",
    },
    {
      id: "houses-99-aa",
      nouns: ["houses", "house", "village", "homes", "roofs", "thatch"],
      description: "Built out of stone somebody else cut and roofed with reed off the nearest wet ground.",
    },
    {
      id: "children-99-aa",
      nouns: ["children", "child", "kids", "pairs"],
      description: "Four of them on the path to the well, and each pail is the size of the smaller one carrying it.",
    },
    {
      id: "heap-99-aa",
      nouns: ["heap", "rubble", "lime", "ruins", "ruin", "walls", "wall"],
      description: "Lime and broken stone in a long line where a mortared wall stood along the road.",
    },
    {
      id: "yard-inn-99-aa",
      nouns: ["inn", "house", "door", "doorway", "turning house", "smoke"],
      description: "Half roofed, with smoke coming out of the half that is, and no door in the doorway.",
    },
  ],
  exits: {
    in: "turning-house:99-aa",
    east: "high-crossing:99-aa",
  },
};
