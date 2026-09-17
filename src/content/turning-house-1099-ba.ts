import type { Room } from "../types.ts";

// The Turning House, 1099 BA — the Long Noon.
// The House at its fattest. The room is already full of light, so the lamp the
// player is carrying is an heirloom nobody here can imagine needing. The joke is
// structural; the narrator does not point at it.
// All text here answers to design/WRITING-GUIDE.md.

export const turningHouse1099Ba: Room = {
  id: "turning-house:1099-ba",
  place: "turning-house",
  title: "The Turning House",
  landing: "1099 BA",
  age: "the Long Noon",
  look:
    "The common room is loud and over-lit: every table taken, lamps burning on brackets " +
    "the House keeps filled because it can. Limewash covers the drystone now, which is " +
    "held to be an improvement. The landlord pours good wine and tells the long table " +
    "about the eastern road, from a map that is wrong about the river.",
  lookAgain:
    "The common room, loud and over-lit. The landlord, his good wine, and his bad map.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "long-noon-map",
      nouns: ["map", "maps", "chart"],
      description: "A handsome map that puts the river on the wrong side of the hills, in good ink.",
      takeable: false,
      takeRefusal: "It is pinned up, and the landlord is in the middle of using it.",
      read:
        "THE EASTERN ROAD AND THE COUNTRY EITHER SIDE. The river is drawn where the " +
        "engraver felt it ought to be.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "landlord",
      nouns: ["landlord", "man", "keeper", "innkeeper", "him"],
      description:
        "He has his grandfather's House and his grandfather's chair, and has never thought to ask how old either is.",
      talk:
        "\"Lamps?\" he says. \"There's a crate of them under the stair. " +
        "Nobody's needed one in my lifetime.\"",
    },
    {
      id: "brackets",
      nouns: ["lamps", "brackets", "bracket", "lights", "light"],
      description: "A dozen of them, filled and burning at midday, which the House would like noticed.",
    },
    {
      id: "walls-1099-ba",
      nouns: ["walls", "wall", "limewash", "drystone", "stones", "stone", "masonry"],
      description: "Drystone under a coat of limewash the stones never needed and were not asked about.",
    },
    {
      id: "wine",
      nouns: ["wine", "jug", "cup", "drink"],
      description: "Better than it needs to be, and poured like it isn't.",
    },
    {
      id: "table-1099-ba",
      nouns: ["table", "long table", "tables"],
      description: "The long table seats more than the House has room for, which is the point.",
    },
    {
      id: "road-1099-ba",
      nouns: ["road", "roads", "crossroads", "eastern road", "high road", "high roads"],
      description: "The high roads still carry everything, and nobody living has repaired one.",
    },
  ],
};
