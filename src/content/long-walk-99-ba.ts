import type { Room } from "../types.ts";

// The Long Walk, 99 BA — the Hush.
// The maze is kept in this age, so the walks the plan intends are walks: the
// east turn is open here and closed to thicket in 99 AA. Half of the puzzle
// lives in that one exit
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const longWalk99BA: Room = {
  id: "long-walk:99-ba",
  place: "long-walk",
  title: "The Long Walk",
  landing: "99 BA",
  age: "the Hush",
  look:
    "The walk runs on to a face of hedge and stops against it. Where it stops it turns " +
    "east, and the turn is cut square and swept out. Yew stands over you on both hands, " +
    "level along the top as a roofline, and the sky is a strip. The mouth of the maze is " +
    "back south.",
  lookAgain: "The long walk, hedge on both hands. The turn east is open; the mouth is south.",
  time: {
    past: false,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "hedge",
      nouns: ["hedge", "yew", "hedges", "walls", "wall", "face of hedge", "maze"],
      description: "Cut flat on three sides of you, and not one gap in any of them.",
    },
    {
      id: "turn",
      nouns: ["turn", "corner", "east turn", "opening", "way east"],
      description: "Cut back to the width of the walk and swept, the way a thing is kept that gets used.",
    },
    {
      id: "walk",
      nouns: ["walk", "path", "corridor", "way", "grass", "floor", "clippings"],
      description: "Mown grass with a barrow track down one side of it, going east.",
    },
    {
      id: "sky",
      nouns: ["sky", "strip", "roofline", "top", "light"],
      description: "A strip of evening the width of the walk, and the bells are in it somewhere.",
    },
  ],
  exits: {
    south: "maze-mouth:99-ba",
    // east → far-walk:99-ba, wired when that room is written.
  },
};
