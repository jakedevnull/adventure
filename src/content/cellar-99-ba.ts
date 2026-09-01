import type { Room } from "../types.ts";

// The Cellar, 99 BA — the Hush.
// Bells rung against something coming; everyone feels it, no one can say what
// (UNIVERSE.md §4). Upstairs the keeper stands with the bell-rope knotted at
// her shoulder and has not pulled it. The clapper is down here, and has been
// for a while. Nothing in the room says so; the two facts simply sit a floor
// apart.
//
// The clapper is the one takeable thing in the whole cellar column, and it
// does nothing. Dark, like five of the six.
// All text here answers to design/WRITING-GUIDE.md.

export const cellar99BA: Room = {
  id: "cellar:99-ba",
  place: "cellar",
  title: "The Cellar",
  landing: "99 BA",
  age: "the Hush",
  dark: true,
  look:
    "Stores against every wall: meal, salt and cordage, and more of each than a winter " +
    "takes. The underside of the hearthstone is overhead, and the fire banked above it is " +
    "not doing much for it tonight. The steps go up behind you.\n" +
    "A bell's clapper lies on the sacks, out of its bell.",
  lookAgain: "The stores against the footings, the cold hearthstone overhead, the clapper on the sacks.",
  time: {
    past: true,
    // The stride over the Gap. It lands in 99 AA (UNIVERSE.md §2, the Lapse).
    future: true,
  },
  items: [
    {
      id: "clapper",
      nouns: ["clapper", "bell clapper", "bell's clapper", "iron", "tongue"],
      description: "Iron, the length of your forearm, laid in sacking two floors under the bell it belongs to.",
      takeable: true,
      read: "Nothing is cut into it. It was made to be heard, not read.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "stores",
      nouns: ["stores", "store", "sacks", "sack", "meal", "salt", "cordage", "rope", "provisions"],
      description: "Laid in for a winter, by a House that has not said what it is laying in against.",
    },
    {
      id: "cellar-hearthstone",
      nouns: ["hearthstone", "underside", "ceiling", "slab", "soot"],
      description: "Barely warm. The fire above it is banked to a seam and nobody is feeding it.",
    },
    {
      id: "cellar-footings",
      nouns: ["footings", "footing", "courses", "course", "stones", "stone", "drystone", "masonry", "wall", "walls"],
      description: "The same dry-laid courses, doing the same work, with the sacks stacked against them.",
    },
    {
      id: "cellar-steps",
      nouns: ["steps", "step", "stair", "stairs", "cellar steps", "hatch"],
      description: "Swept, and swept recently. A great deal has come down them this week.",
    },
  ],
  exits: {
    up: "turning-house:99-ba",
  },
};
