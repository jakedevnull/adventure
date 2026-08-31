import type { Room } from "../types.ts";

// The Back Garden, 99 BA — the Hush.
// The maze has stood a thousand years and is clipped tight, and the way north
// into it is open. One of the two faces of this plot that has a north exit;
// the other is 99 AA. The bells are a clause and stay one, and the well's rope
// has been cut by somebody the text does not name
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const backGarden99BA: Room = {
  id: "back-garden:99-ba",
  place: "back-garden",
  title: "Behind the House",
  landing: "99 BA",
  age: "the Hush",
  look:
    "The garden ends in a wall of yew twice your height, clipped so square that it looks " +
    "built rather than grown. An arch is cut through it to the north, and the walk beyond " +
    "the arch goes out of the light in three strides. The well's rope has been cut off " +
    "short at the windlass. Bells are going somewhere down the valley, and the back door " +
    "of the House is south.",
  lookAgain:
    "The clipped yew and the arch through it to the north, the well with its rope cut. " +
    "The back door of the House is south.",
  time: {
    past: true,
    // The stride over the Gap, to a maze nobody has clipped since.
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "hedge",
      nouns: ["hedge", "yew", "maze", "wall of yew", "hedges"],
      description:
        "Yew, cut flat on the top and flat on both faces. Somebody was here this week with " +
        "shears.",
    },
    {
      id: "arch",
      nouns: ["arch", "archway", "opening", "way north", "entrance"],
      description: "A square arch cut in the hedge, kept square, and darker inside than the hour explains.",
    },
    {
      id: "well",
      nouns: ["well", "windlass", "rope", "shaft", "bucket"],
      description:
        "The painted roof is long gone and the rope has been cut off at the windlass, " +
        "recently, by somebody.",
    },
    {
      id: "bells",
      nouns: ["bells", "bell", "ringing", "valley"],
      description: "One village and then the next, all evening. Nobody in the garden is listening to them.",
    },
    {
      id: "beds",
      nouns: ["beds", "bed", "garden", "ground", "grass", "earth", "soil"],
      description: "Dug over and left. Whatever was meant to go in went in somewhere else this year.",
    },
    {
      id: "wall",
      nouns: ["wall", "walls", "stones", "stone", "drystone", "masonry"],
      description: "The old drystone, gone down to knee height on the east side and not put back.",
    },
    {
      id: "door",
      nouns: ["door", "back door"],
      description: "The low door into the House. It gets barred at dusk this year, and it is not dusk yet.",
    },
    {
      id: "shears",
      nouns: ["shears", "clippings", "cuttings", "trimmings"],
      description: "A barrowload of clippings by the arch, dark green and still smelling of the cut.",
    },
  ],
  exits: {
    south: "turning-house:99-ba",
    north: "maze-mouth:99-ba",
  },
};
