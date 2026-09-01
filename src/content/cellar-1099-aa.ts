import type { Room } from "../types.ts";

// The Cellar, 1099 AA — the Rekindling.
// Guilds, canals, printing; history rewritten by people guessing
// (UNIVERSE.md §4). The guessing shows here as brickwork: the old end of the
// undercroft has been closed off flush, and the age that did it kept no note
// of what was behind. The empty bracket is this age's habit — the House above
// has one too, under its new glass, and 2099 AA is the age that fills it.
// Dark, like five of the six.
// All text here answers to design/WRITING-GUIDE.md.

export const cellar1099AA: Room = {
  id: "cellar:1099-aa",
  place: "cellar",
  title: "The Cellar",
  landing: "1099 AA",
  age: "the Rekindling",
  dark: true,
  look:
    "Guild-stamped bottles in numbered racks, every one of them entered in a book upstairs. " +
    "An iron bracket is screwed to the wall by the steps, with nothing in it. The " +
    "hearthstone is warm overhead, and the steps go up behind you.\n" +
    "Where the cellar used to go on, an arch has been bricked up flush and pointed neatly.",
  lookAgain: "The numbered racks, the empty bracket, and the bricked arch at the old end.",
  time: {
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "guild-bottles",
      nouns: ["bottles", "bottle", "racks", "rack", "stamps", "stamp", "wine", "numbers"],
      description: "Stamped, numbered, and racked in order. The order is the point of them.",
    },
    {
      id: "lamp-bracket",
      nouns: ["bracket", "iron bracket", "iron", "hook"],
      description: "Screwed to the wall at head height, and empty. The guild has a form for the lamp.",
    },
    {
      id: "bricked-arch",
      nouns: ["arch", "bricked arch", "brick", "bricks", "brickwork", "old end", "end"],
      description: "New brick in an old opening, pointed by somebody paid by the yard. What it closes off is not in the book.",
    },
    {
      id: "cellar-hearthstone",
      nouns: ["hearthstone", "underside", "ceiling", "slab", "soot"],
      description: "Warm through, and swept twice a day now, on this side as well as the other.",
    },
    {
      id: "cellar-footings",
      nouns: ["footings", "footing", "courses", "course", "stones", "stone", "drystone", "masonry", "wall", "walls"],
      description: "Dry-laid courses under the brickwork, carrying it, as they carry everything else.",
    },
    {
      id: "cellar-steps",
      nouns: ["steps", "step", "stair", "stairs", "cellar steps", "hatch"],
      description: "The old steps, with a handrail bolted to them and a notice about the handrail.",
    },
  ],
  exits: {
    up: "turning-house:1099-aa",
  },
};
