import type { Room } from "../types.ts";

// The Long Walk, 99 AA — the Morning Country.
// Where the player is caught. Nobody has clipped the east turn for an age and
// it has closed to thicket, so this face has no east exit — the same corner
// that is open in 99 BA. The room is built to make PAST look like the way on
// without saying it: the barrow track is still under the grass, running east
// into a hedge that grew over it rather than through it
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const longWalk99AA: Room = {
  id: "long-walk:99-aa",
  place: "long-walk",
  title: "The Long Walk",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "The walk ends here the way it always did, against a face of hedge, and the hedge has " +
    "come out into the walk to meet you. East, where a corner was cut, there is thicket " +
    "from one side to the other, and it is a great deal older than a season's growth. " +
    "Under the grass a hard track runs east and goes on under the thicket. The mouth of " +
    "the maze is back south.",
  lookAgain:
    "The end of the walk, and thicket east where the corner was. The track runs east under " +
    "it. The mouth is south.",
  time: {
    // The way on. The corner east was a corner once, and is again, a stride back.
    past: true,
    future: false,
  },
  items: [],
  scenery: [
    {
      id: "thicket",
      nouns: ["thicket", "east", "corner", "turn", "growth", "tangle"],
      description:
        "Yew grown out into yew until there is no telling one hedge from the other. It is " +
        "wood, not leaves, and it goes back further than you can see into it.",
    },
    {
      id: "track",
      nouns: ["track", "path", "barrow track", "ground", "grass", "floor"],
      description:
        "Beaten hard by wheels and never dug up. The thicket grew over it and not out of it.",
    },
    {
      id: "hedge",
      nouns: ["hedge", "yew", "hedges", "walls", "wall", "face of hedge", "maze"],
      description: "Twice the width it was cut to, and dead along the top where the frost gets at it.",
    },
    {
      id: "sky",
      nouns: ["sky", "strip", "top", "light", "branches"],
      description: "The two sides have met overhead in places, and the strip of sky comes and goes.",
    },
  ],
  exits: {
    south: "maze-mouth:99-aa",
  },
};
