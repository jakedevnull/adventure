import type { Room } from "../types.ts";

// The Maze Mouth, 99 AA — the Morning Country.
// The same pace inside the hedge, an age after anyone clipped it. The arch has
// gone down on one side and is walkable anyway, which is the last easy thing
// the maze does for the player
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const mazeMouth99AA: Room = {
  id: "maze-mouth:99-aa",
  place: "maze-mouth",
  title: "The Maze Mouth",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "One side of the arch has gone down and you are through the gap it left, in a walk " +
    "with yew over you on both hands and no discipline left in it at all. There is grass " +
    "to the knee underfoot and bramble where the hedge has thinned. The garden is behind " +
    "you, south. The walk runs north, narrower than it was built.",
  lookAgain: "The fallen mouth of the maze, grass to the knee. The garden is south, the walk north.",
  time: {
    // PAST crosses the Gap, to the same walk with somebody still clipping it.
    past: true,
    // The maze does not stand in 1099 AA; it is grubbed out for allotments.
    future: false,
  },
  items: [],
  scenery: [
    {
      id: "hedge",
      nouns: ["hedge", "yew", "hedges", "walls", "wall", "maze"],
      description: "Dead in patches, and where it is not dead it has grown out over the walk.",
    },
    {
      id: "arch",
      nouns: ["arch", "archway", "opening", "gap", "entrance", "mouth"],
      description: "The fallen side lies where it fell, gone grey, with new yew coming up out of it.",
    },
    {
      id: "walk",
      nouns: ["walk", "path", "corridor", "way", "grass", "floor"],
      description: "Grass, docks, and a line of bare ground down the middle where deer have kept the way open.",
    },
    {
      id: "bramble",
      nouns: ["bramble", "brambles", "briars", "thorns"],
      description: "Bramble has gone into the hedge wherever the hedge stopped arguing.",
    },
    {
      id: "light",
      nouns: ["light", "shade", "dark", "darkness", "shadow"],
      description: "More light gets in than the maze was built for, and less of it than you would like.",
    },
  ],
  exits: {
    south: "back-garden:99-aa",
    north: "long-walk:99-aa",
  },
};
