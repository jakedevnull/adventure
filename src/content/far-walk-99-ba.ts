import type { Room } from "../types.ts";

// The Far Walk, 99 BA — the Hush.
// The end of the maze's outer round, and the wall of the heart. The north
// hedge here is the youngest in the maze: it was cut out and set again when
// the sword went in, a few years back. It is solid, so this face has no north
// exit; a thousand years on it is the one hedge that has died, and 99 AA has
// the gap (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// The fact is stated in a clause and never explained.
// All text here answers to design/WRITING-GUIDE.md.

export const farWalk99BA: Room = {
  id: "far-walk:99-ba",
  place: "far-walk",
  title: "The Far Walk",
  landing: "99 BA",
  age: "the Hush",
  look:
    "The outer round of the maze ends here, in a square of trodden grass with hedge on " +
    "three sides of it. The north hedge is a head shorter than the rest and a different " +
    "green, and it is solid from the ground to the top. Somebody took that length out and " +
    "set it again, and it took. The walk you came along runs back west.",
  lookAgain:
    "The end of the outer round. The young hedge stands solid on the north side; the walk " +
    "is west.",
  time: {
    past: false,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "young-hedge",
      nouns: ["young hedge", "north hedge", "new hedge", "north", "young yew"],
      description:
        "Set from big cuttings, all of a size, all of an age, and closer planted than the " +
        "hedge it was cut out of.",
    },
    {
      id: "hedge",
      nouns: ["hedge", "yew", "hedges", "walls", "wall", "maze", "old hedge"],
      description: "The old work stands over the new by a head, and will be doing it long after you have gone.",
    },
    {
      id: "grass",
      nouns: ["grass", "ground", "square", "floor", "earth", "soil"],
      description:
        "Trodden thin along the north side, where somebody has stood to look at their own " +
        "work more than once.",
    },
    {
      id: "walk",
      nouns: ["walk", "path", "corridor", "way", "west", "track"],
      description: "It runs west, clipped and swept, and it is the only way out of this square.",
    },
  ],
  exits: {
    west: "long-walk:99-ba",
    // No north. The young hedge is the newest and soundest thing in the maze.
  },
};
