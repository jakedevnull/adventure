import type { Room } from "../types.ts";
import { MILESTONE_LETTERS } from "./high-crossing-2099-ba.ts";

// High Crossing, 99 AA — the Morning Country.
// The second reading. The letters are the same letters, imported rather than
// retyped so that they cannot drift; what has gone is the town, the road-measure,
// and the habit of writing distances on stone. The girl has the number and none
// of the rest, and she has it from her grandmother, who had it from hers.
//
// She is not corrected, here or later. The narrator reports what is on the stone
// and what the person sitting on it makes of it, and stops.
// All text here answers to design/WRITING-GUIDE.md.

export const highCrossing99Aa: Room = {
  id: "high-crossing:99-aa",
  place: "high-crossing",
  title: "High Crossing",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "The centre of the crossing is a rise in the grass that still holds the shape of " +
    "two roads. The milestone lies on its side in the turf, out of the ground it was " +
    "set in. A girl is sitting on it with her heels against the letters.\n" +
    "The houses are back west, and the grass hides the road the whole way.",
  lookAgain:
    "The fallen milestone in the grass, and the girl sitting on it. The houses are back west.",
  time: {
    // Road, not loose ground, in this age as in the other. No time line prints.
    past: false,
    future: false,
  },
  items: [
    {
      id: "milestone-99-aa",
      nouns: ["milestone", "stone", "marker", "letters", "inscription"],
      description: "Weathered smooth on the face that has been up, and whole along the side the letters are on.",
      takeable: false,
      takeRefusal: "It is longer than you are and heavier than that.",
      read: MILESTONE_LETTERS,
      start: "room",
    },
  ],
  scenery: [
    {
      id: "girl",
      nouns: ["girl", "child", "her"],
      description: "Twelve or so, and she has sat here often enough to have worn the grass at the foot of the stone.",
      talk:
        "\"The counting stone,\" she says, and knocks a heel against it. \"Nine. " +
        "Everybody knows nine. Nine houses that were here before, or nine people who " +
        "kept them. My gran had it from hers, and none of us has ever wanted the " +
        "letters for it.\"",
    },
    {
      id: "crossing-99-aa",
      nouns: ["road", "roads", "crossing", "crossroads", "grass", "turf", "paving", "high road", "high roads"],
      description: "A low rise in the turf in the shape of two roads, with the paving still true underneath.",
    },
    {
      id: "socket-99-aa",
      nouns: ["hole", "socket", "hollow", "ground", "pit"],
      description: "The hole the stone came out of has grassed over and is still the shape of the stone.",
    },
    {
      id: "crossing-village-99-aa",
      nouns: ["village", "houses", "house", "roofs", "smoke", "well"],
      description: "Six or seven roofs west of here, with smoke over two of them.",
    },
  ],
  exits: {
    west: "crossroads-yard:99-aa",
  },
};
