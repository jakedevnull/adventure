import type { Room } from "../types.ts";

// The Heart of the Maze, 99 AA — the Morning Country.
// The story's object, in the grass, where the drip off the yew has worn the
// turf down to it. Reached only through the gap in the dead hedge, and left
// the same way or by a stride. `lookAgain` does not name the sword: the engine
// keeps describing a native item whether or not the player still has it, and
// a room that tells the player their own sword is lying at their feet is worse
// than a room that stays quiet about the bare patch
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const mazeHeart99AA: Room = {
  id: "maze-heart:99-aa",
  place: "maze-heart",
  title: "The Heart of the Maze",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "A square of grass with hedge close on all four sides and nothing in it but weather. " +
    "The south hedge is the grey one, with the gap in it you came through. Rain coming " +
    "off the yew has worn the turf away in a line down the middle of the square.\n" +
    "A sword lies in the bare ground there, half of it still under.",
  lookAgain:
    "The square inside the hedge, and the bare line the rain has worn down the middle of " +
    "it. The gap is south.",
  time: {
    // Back a stride, the square is turned earth and the hedger is working.
    past: true,
    future: false,
  },
  items: [
    {
      id: "sword",
      nouns: ["sword", "blade", "weapon", "hilt"],
      description:
        "A plain old sword, and the ground has had the better of it along one edge.",
      takeable: true,
      // The one thing in the world that will kill a menace (Basement Encounter).
      weapon: true,
      read:
        "One word is cut into the blade below the hilt, in the letters of a kingdom two " +
        "ages gone. It reads as a name.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "dead-hedge",
      nouns: ["dead hedge", "south hedge", "grey hedge", "grey wood", "gap", "south"],
      description:
        "Grey to the roots, and the one length of the maze that died. The gap is where two " +
        "of them came out.",
    },
    {
      id: "hedge",
      nouns: ["hedge", "yew", "hedges", "walls", "wall", "maze"],
      description: "Living yew on three sides, close enough overhead to keep most of the sky out.",
    },
    {
      id: "bare-ground",
      nouns: ["bare ground", "bare line", "turf", "grass", "ground", "earth", "soil", "square"],
      description:
        "Worn down to the soil in a straight line under the drip, and washed a little deeper " +
        "every winter since.",
    },
    {
      id: "sky",
      nouns: ["sky", "light", "weather", "rain"],
      description: "What gets in here is what falls straight down.",
    },
  ],
  exits: {
    south: "far-walk:99-aa",
  },
};
