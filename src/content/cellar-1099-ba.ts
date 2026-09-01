import type { Room } from "../types.ts";

// The Cellar, 1099 BA — the Long Noon.
// A golden, complacent age: the best wine, the worst maps (UNIVERSE.md §4).
// Both are down here. The wine was laid by people sure they would be there to
// drink it, and the map on the wall is confidently wrong about a wall.
// Dark, like five of the six: no light, no room.
// All text here answers to design/WRITING-GUIDE.md.

export const cellar1099BA: Room = {
  id: "cellar:1099-ba",
  place: "cellar",
  title: "The Cellar",
  landing: "1099 BA",
  age: "the Long Noon",
  dark: true,
  look:
    "Wine in bins down both sides, laid by people who expected to be here to drink it. " +
    "The underside of the hearthstone is overhead, warm, and rubbed pale where somebody " +
    "stands to reach the top bin. The steps go up behind you.\n" +
    "A map of the House is chalked on the wall beside them.",
  lookAgain: "The wine in its bins, the hearthstone warm overhead, the chalked map by the steps.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "chalked-map",
      nouns: ["chalked map", "map", "chalk", "plan"],
      description: "Chalked in a confident hand, at some hour of the evening you could name.",
      takeable: false,
      takeRefusal: "It is chalk, on a wall, and it would not survive the trip.",
      read:
        "The common room, the tables, the stair, the way down — all of it drawn, and the " +
        "stair on the wrong wall.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "wine",
      nouns: ["wine", "bins", "bin", "bottles", "bottle", "racks", "rack", "labels"],
      description: "Binned by year, and every year on the labels was a good one.",
    },
    {
      id: "cellar-hearthstone",
      nouns: ["hearthstone", "underside", "ceiling", "slab", "soot"],
      description: "The fire is on the other side of it, and you can feel exactly where.",
    },
    {
      id: "cellar-footings",
      nouns: ["footings", "footing", "courses", "course", "stones", "stone", "drystone", "masonry", "wall", "walls"],
      description: "The same dry-laid courses, with somebody's wine racked up against them.",
    },
    {
      id: "cellar-steps",
      nouns: ["steps", "step", "stair", "stairs", "cellar steps", "hatch"],
      description: "Worn in the middle, and worn more this age than most.",
    },
  ],
  exits: {
    up: "turning-house:1099-ba",
  },
};
