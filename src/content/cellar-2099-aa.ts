import type { Room } from "../types.ts";

// The Cellar, 2099 AA — the Lettered Age.
// Universities, museums, the first scholars of the Awakening and of the Lapse,
// all wrong (UNIVERSE.md §4). The only face of the cellar with a light of its
// own, and so the only one a lightless player survives: the room that teaches
// the word before the word can be used on them.
//
// The placard names the quench, mistakes where the name came from, has the
// mason's mark and the sword the wrong way round, and is right about exactly
// one thing. Wrong answers are canon; evidence is not (UNIVERSE.md §2).
// All text here answers to design/WRITING-GUIDE.md.

export const cellar2099AA: Room = {
  id: "cellar:2099-aa",
  place: "cellar",
  title: "The Cellar",
  landing: "2099 AA",
  age: "the Lettered Age",
  look:
    "The undercroft, swept and open to the public, with a run of lamps down the vault and " +
    "a board floor laid over the old one. The footings are the same footings, and the name " +
    "cut into one of them has a brass label under it. The steps go up behind you.\n" +
    "A placard on a stand explains the room.",
  lookAgain: "The lit undercroft, the labelled footing, and the placard on its stand.",
  time: {
    past: true,
    // 2099 AA is the newest landing in the world.
    future: false,
  },
  items: [
    {
      id: "cellar-placard",
      nouns: ["cellar placard", "placard", "stand", "card", "label", "notice"],
      description: "Printed at the height of somebody who was never going to crouch.",
      takeable: false,
      takeRefusal: "It is bolted to its stand, and the stand to the floor.",
      read:
        "THE UNDERCROFT. THE WORD QUENCH IS A MISREADING OF AN OLDER WORD FOR A SNUFFER " +
        "AND HAS NOTHING TO DO WITH THE DARK. THE NAME CUT IN THE FOOTING IS COPIED FROM A " +
        "SWORD OF THE SAME PERIOD, NOW LOST. BEFORE LAMPS, NOBODY CAME DOWN HERE ALONE.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "vault-lamps",
      nouns: ["lamps", "lamp", "run of lamps", "lights", "light"],
      description: "Filled every morning by whoever fills the one on the sill upstairs.",
    },
    {
      id: "masons-mark",
      nouns: ["mark", "mason's mark", "masons mark", "name", "cut name", "letters", "brass label"],
      description: "A name, cut small and low, with a brass label under it that is very sure whose it is.",
    },
    {
      id: "cellar-hearthstone",
      nouns: ["hearthstone", "underside", "ceiling", "slab", "soot"],
      description: "Labelled, dated to three different centuries on three different placards, and warm regardless.",
    },
    {
      id: "cellar-footings",
      nouns: ["footings", "footing", "courses", "course", "stones", "stone", "drystone", "masonry", "wall", "walls"],
      description: "Dry-laid, unrepaired, and carrying a floor, a House and a museum without comment.",
    },
    {
      id: "cellar-steps",
      nouns: ["steps", "step", "stair", "stairs", "cellar steps", "hatch", "board floor", "floor"],
      description: "The old steps under new treads, with a handrail on both sides now.",
    },
  ],
  exits: {
    up: "turning-house:2099-aa",
  },
};
