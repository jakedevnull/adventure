import type { Room } from "../types.ts";

// The Turning House, 99 BA — the Hush.
// A fixed point (UNIVERSE.md §4). What the bells are rung against is never
// explained here, because it is never explained anywhere. The room is barred,
// dark and polite, and the whole effect is the calm delivery (WRITING-GUIDE
// Rule 5). The House is deliberately bare: no items, nothing on the table.
// All text here answers to design/WRITING-GUIDE.md.

export const turningHouse99Ba: Room = {
  id: "turning-house:99-ba",
  place: "turning-house",
  title: "The Turning House",
  landing: "99 BA",
  age: "the Hush",
  look:
    "The common room is dark. The fire has been let go out on purpose, and the door is " +
    "barred with a beam the House has not used in living memory. The family sits up at " +
    "the long table, all of them, and nobody is talking.\n" +
    "Out on the road a bell is being rung slowly, and has been since dark.",
  lookAgain:
    "The dark common room, the family still at the table, and the bell still going.",
  time: {
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "eldest",
      nouns: ["eldest", "woman", "keeper", "landlady", "her"],
      description: "She has not slept, and does not say what she is listening for.",
      talk:
        "\"No lights tonight,\" she says. \"If you have one, keep it unlit. Light carries.\"",
    },
    {
      id: "family-99-ba",
      nouns: ["family", "others", "them", "people"],
      description: "Six of them sitting up, and nobody has suggested bed.",
    },
    {
      id: "bell",
      nouns: ["bell", "bells", "ringing"],
      description: "You cannot see it from in here: slow, even, and going to keep on.",
    },
    {
      id: "beam",
      nouns: ["beam", "door", "bar"],
      description: "A beam thick as a thigh, dropped into brackets cut for it long ago.",
    },
    {
      id: "hearth-99-ba",
      nouns: ["fire", "hearth", "fireplace", "ashes", "embers"],
      description: "Cold and raked out, which took some doing.",
    },
    {
      id: "shutters",
      nouns: ["shutters", "shutter", "window", "windows"],
      description: "Pinned from the inside, with a gap left at eye height.",
    },
    {
      id: "walls-99-ba",
      nouns: ["walls", "wall", "drystone", "stones", "stone", "masonry", "limewash"],
      description: "Drystone, cold through, with the old limewash flaking off it.",
    },
    {
      id: "table-99-ba",
      nouns: ["table", "long table"],
      description: "The long table, with everyone at it and nothing on it.",
    },
    {
      id: "road-99-ba",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "The high roads are empty tonight, which has never happened.",
    },
  ],
};
