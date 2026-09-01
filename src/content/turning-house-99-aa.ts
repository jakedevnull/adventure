import type { Room } from "../types.ts";

// The Turning House, 99 AA — the Morning Country.
// Survivors' villages among ruins nobody can read, including their own
// (UNIVERSE.md §4). The first landing after the Gap. The House stands on its
// own old courses with newer, worse ones above them, the fire was out and is
// not now, and one stone low in the wall carries a Traveler's waymark that the
// keeper cannot read and the player can (UNIVERSE.md §3).
// All text here answers to design/WRITING-GUIDE.md.

export const turningHouse99AA: Room = {
  id: "turning-house:99-aa",
  place: "turning-house",
  title: "The Turning House",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "Three courses of the old drystone still run true, and the wall above them was laid " +
    "by somebody learning the trade as he went. The window has no glass in it and an " +
    "unbroken view of the road. The fire is going again, and the hatch in the floor is " +
    "open on steps older than the wall above them.\n" +
    "A man is bedding a stone into the wall and does not stop for you.\n" +
    "Low in the old courses, one stone carries a scratched sign.",
  lookAgain:
    "The mended wall, the glassless window, the fire. The stonelayer at his work, and the " +
    "scratched sign low in the old courses.",
  time: {
    // PAST is the stride back over the Gap, to 99 BA.
    past: true,
    future: true,
  },
  items: [
    {
      id: "waymark",
      nouns: ["waymark", "scratched sign", "sign", "scratches", "scratch", "low stone"],
      description:
        "Someone cut three lines and a hook into it, and someone else laid it face-in " +
        "without asking why.",
      takeable: false,
      takeRefusal: "It is two hundredweight of wall, and it was here first.",
      read:
        "Traveler's work, and plain enough to you: the years run here, and the step back " +
        "is longer than the calendar says.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "stonelayer",
      nouns: ["stonelayer", "man", "mason", "keeper", "innkeeper", "him"],
      description: "He has his father's trade and about half of his father's practice at it.",
      talk: "\"Older than us,\" he says, with his thumb on a joint. \"That's as much as anybody kept.\"",
    },
    {
      id: "fire",
      nouns: ["fire", "hearth", "flame", "flames", "fireplace", "ash", "embers"],
      description: "New ash over old, parted by a pale seam that no winter could account for.",
    },
    {
      id: "walls",
      nouns: ["walls", "wall", "courses", "stones", "stone", "drystone", "masonry"],
      description:
        "The bottom three courses were laid to last and have. The rest is the same stone, " +
        "put back by guess.",
    },
    {
      id: "sill",
      nouns: ["sill", "windowsill", "window", "ledge"],
      description: "Stone, worn in the middle, and open to the weather. There is no glass in this age.",
    },
    {
      // The way down. This face has no stair scenery, so the cellar steps may
      // have the word.
      id: "cellar-hatch",
      nouns: ["hatch", "cellar", "cellar steps", "cellar stair", "steps", "trap", "trapdoor"],
      description: "Nobody rebuilt it. Nobody had to.",
    },
    {
      id: "mortar",
      nouns: ["mortar", "joint", "joints", "trowel"],
      description: "He uses mortar because he has to. The old work did not.",
    },
    {
      id: "road",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "Nobody living knows who laid it. They use it every day regardless.",
    },
    {
      id: "ruins",
      nouns: ["ruins", "ruin", "rubble", "village", "writing"],
      description:
        "The village is built out of a bigger one. Some of the stones have writing on them, " +
        "and nobody here reads it.",
    },
  ],
  exits: {
    // The back door, into the garden (The Gardens Behind the House).
    north: "back-garden:99-aa",
    // The hatch behind the bar (Basement Encounter).
    down: "cellar:99-aa",
  },
};
