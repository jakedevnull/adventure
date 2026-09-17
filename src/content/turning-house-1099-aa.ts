import type { Room } from "../types.ts";

// The Turning House, 1099 AA — the Rekindling.
// The House is rebuilt and prosperous, and keeps a lamp lit in the window as a
// tradition. A framed card explains the tradition's origin, confidently and
// wrongly. This is the one age where the family explains itself, which is exactly
// when it gets the answer wrong. The thing the player is carrying is the real
// reason, and the card does not know that; neither does the narrator say so.
// All text here answers to design/WRITING-GUIDE.md.

export const turningHouse1099Aa: Room = {
  id: "turning-house:1099-aa",
  place: "turning-house",
  title: "The Turning House",
  landing: "1099 AA",
  age: "the Rekindling",
  look:
    "The common room is rebuilt and doing well, with a new floor and the canal tolls " +
    "chalked up by the door. The drystone was taken down and put back up stone for stone, " +
    "which the mason charged extra for. A lamp burns in the front window, lit at dusk, " +
    "and a printed card beside it explains why.",
  lookAgain:
    "The rebuilt common room, and the lamp in the window with its card beside it.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "card",
      nouns: ["card", "printed card", "notice", "frame"],
      description: "A printed card in a good frame, recently dusted.",
      takeable: false,
      takeRefusal: "It is framed, and the House is proud of it.",
      read:
        "ON THE LAMP IN THE WINDOW. Kept nightly by this house since the rebuilding, in " +
        "memory of the landlord Corrin Hale, lost on the road in fog and brought home by " +
        "his wife's light. Printed at the sign of the Three Locks, by subscription.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "landlord-1099-aa",
      nouns: ["landlord", "man", "keeper", "innkeeper", "him"],
      description: "He keeps the House his great-grandfather kept, and will tell you so before you ask.",
      talk: "\"It's traditional,\" he says, and points at the card.",
    },
    {
      id: "window-1099-aa",
      nouns: ["window", "glass", "lamps", "window lamp"],
      description: "A lamp behind good glass, where the road can see it. Filled at dusk, and not asked about.",
    },
    {
      id: "walls-1099-aa",
      nouns: ["walls", "wall", "drystone", "stones", "stone", "masonry"],
      description: "Drystone again, rebuilt stone for stone. The mason found the old courses and followed them.",
    },
    {
      id: "ribbon",
      nouns: ["ribbon", "guild ribbon", "guild"],
      description: "The victuallers' guild, third grade. The House is prouder of it than of the walls.",
    },
    {
      id: "tolls",
      nouns: ["tolls", "toll", "chalk", "canal", "canals", "locks", "board"],
      description: "Canal tolls, chalked up daily. The river got a lock and stopped arguing.",
    },
    {
      id: "hearth-1099-aa",
      nouns: ["hearth", "fire", "fireplace", "chimney"],
      description: "The hearth has a chimney now, which the House regards as modern.",
    },
    {
      id: "floor",
      nouns: ["floor", "boards", "floorboards"],
      description: "New boards laid over the old ones, that being less work than taking them up.",
    },
    {
      id: "table-1099-aa",
      nouns: ["table", "long table"],
      description: "A long table again, and not the long table.",
    },
    {
      id: "road-1099-aa",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "The high roads carry less than the canals now. They are not worried.",
    },
  ],
};
