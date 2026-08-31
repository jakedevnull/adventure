import type { Room } from "../types.ts";

// The Maze Mouth, 99 BA — the Hush.
// One pace inside the hedge, in the age when somebody still clips it. The maze
// stands in two ages only, so this face has no PAST: in 1099 BA it is whips
// and string, and in 1099 AA it is roots under an allotment
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const mazeMouth99BA: Room = {
  id: "maze-mouth:99-ba",
  place: "maze-mouth",
  title: "The Maze Mouth",
  landing: "99 BA",
  age: "the Hush",
  look:
    "You are inside the hedge, in a walk two paces wide, with yew standing over you on " +
    "both hands and cut flat as a plank. Behind you the arch is a bright rectangle of " +
    "garden, south. The walk runs north, and the light does not go far along it. The " +
    "floor is mown grass with the clippings raked off.",
  lookAgain: "The mouth of the maze, hedge on both hands. The garden is south, the walk north.",
  time: {
    // The maze does not stand in 1099 BA; there is nothing to step back into.
    past: false,
    // FUTURE crosses the Gap, to the same walk with nobody left to clip it.
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "hedge",
      nouns: ["hedge", "yew", "hedges", "walls", "wall", "maze"],
      description:
        "Yew a thousand years thick, cut to a face you could set a level against. There is " +
        "no seeing through it and no getting through it.",
    },
    {
      id: "arch",
      nouns: ["arch", "archway", "opening", "rectangle", "entrance", "mouth"],
      description: "Square, kept square, and the only bright thing in the walk.",
    },
    {
      id: "walk",
      nouns: ["walk", "path", "corridor", "way", "grass", "floor", "clippings"],
      description: "Two paces wide and mown to the width of a scythe, with the raking done after.",
    },
    {
      id: "light",
      nouns: ["light", "shade", "dark", "darkness", "shadow"],
      description: "It is late afternoon in the garden and something nearer evening in here.",
    },
  ],
  exits: {
    south: "back-garden:99-ba",
    // north → long-walk:99-ba, wired when that room is written.
  },
};
