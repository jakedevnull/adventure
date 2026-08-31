import type { Room } from "../types.ts";

// The Back Garden, 99 AA — the Morning Country.
// The first landing after the Gap. Nobody has clipped the maze in an age and
// nobody here knows what it is; the garden has gone to grass and the arch has
// come down on one side. The second of the two faces with a north exit, and
// the one the player is meant to take
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const backGarden99AA: Room = {
  id: "back-garden:99-aa",
  place: "back-garden",
  title: "Behind the House",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "The garden is grass to the knee, and standing across the north end of it is a wall " +
    "of yew, half of it black and dead and half of it going on regardless. The arch has " +
    "fallen in on one side, and you could walk through what is left of it. The well is " +
    "filled to within an arm's length of the top with everything that has gone into it " +
    "since. The back door of the House is south.",
  lookAgain:
    "Grass to the knee, the black yew, the fallen arch north, the choked well. The back " +
    "door of the House is south.",
  time: {
    // PAST is the stride back over the Gap, to a maze somebody still clips.
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "hedge",
      nouns: ["hedge", "yew", "maze", "wall of yew", "hedges", "thicket"],
      description:
        "Dead in patches and grown out everywhere else. Nobody has been at it with shears " +
        "in living memory or the memory before that.",
    },
    {
      id: "arch",
      nouns: ["arch", "archway", "opening", "way north", "entrance", "gap"],
      description: "One side of the arch has come down into the walk. The hole it left is a way in.",
    },
    {
      id: "well",
      nouns: ["well", "shaft", "windlass", "rubbish"],
      description:
        "Leaves, a fallen windlass, and whatever the wind has put in on top of them. The " +
        "stonework is the best work left in the garden.",
    },
    {
      id: "grass",
      nouns: ["grass", "ground", "garden", "beds", "earth", "weeds"],
      description: "Grass and docks, with the beds still showing under it in ridges if you stand back.",
    },
    {
      id: "wall",
      nouns: ["wall", "walls", "stones", "stone", "drystone", "masonry"],
      description: "Down to a course or two. The rest of it is in the village, being a house.",
    },
    {
      id: "door",
      nouns: ["door", "back door"],
      description: "Newer than the doorway it hangs in, and hung by somebody learning the trade.",
    },
  ],
  exits: {
    south: "turning-house:99-aa",
    // north → maze-mouth:99-aa, wired when that room is written.
  },
};
