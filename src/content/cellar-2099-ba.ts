import type { Room } from "../types.ts";

// The Cellar, 2099 BA — the High Masonry.
// The undercroft under the common room, and the one face of it that is
// occupied. Dark, like five of the six: without a light the player is blind
// here, and blind is fatal (design/stories/basement-encounter/OUTLINE.md).
//
// The footings are older and wider than the House on top of them, which is the
// story's one piece of evidence that the House is younger than its own cellar.
// The mason's mark is a name; the placard in 2099 AA matches it to the word on
// the sword and gets the direction of the borrowing backwards.
// All text here answers to design/WRITING-GUIDE.md.

export const cellar2099BA: Room = {
  id: "cellar:2099-ba",
  place: "cellar",
  title: "The Cellar",
  landing: "2099 BA",
  age: "the High Masonry",
  dark: true,
  look:
    "Dry-laid footings on every side, courses of stone laid wider than the House needs " +
    "and laid before it. The underside of the hearthstone is the ceiling, warm through " +
    "and black with the soot of every fire since. The steps go up behind you, and the far " +
    "wall is out past where the light reaches.\n" +
    "A name is cut small in one footing, level with your knee.",
  lookAgain:
    "The undercroft: the footings, the hearthstone warm overhead, and the steps going up.",
  time: {
    // 2099 BA is the oldest landing in the world; there is nothing behind it.
    past: false,
    future: true,
  },
  menace: {
    id: "quench",
    nouns: ["quench", "thing", "shape"],
    description:
      "It is the size of the dark it stands in, and the lamp does not improve on that.",
    warning:
      "A quench stands at the edge of the lamplight. The lamp will hold it there for about " +
      "as long as you would expect.",
    kill: "The lamp holds it off for exactly as long as it holds it off. You are dead.",
    slain:
      "You put the sword through it. It comes apart without much comment, and the lamplight " +
      "reaches the far wall.",
    unarmed: "You have nothing to fight it with. Your hands are noted, and dismissed.",
  },
  items: [],
  scenery: [
    {
      id: "cellar-footings",
      nouns: ["footings", "footing", "courses", "course", "stones", "stone", "drystone", "masonry"],
      description:
        "Laid dry and fitted close enough that there is nothing to get a knife into. They " +
        "were cut to carry more than an inn.",
    },
    {
      id: "masons-mark",
      nouns: ["mark", "mason's mark", "masons mark", "name", "cut name", "letters"],
      description:
        "A name, cut small and low, on the one course that was never going to be looked at.",
    },
    {
      id: "cellar-hearthstone",
      nouns: ["hearthstone", "underside", "ceiling", "slab", "soot"],
      description: "The fire is on the other side of it, and you can feel exactly where.",
    },
    {
      id: "cellar-steps",
      nouns: ["steps", "step", "stair", "stairs", "cellar steps", "hatch"],
      description: "Cut rather than built, and worn in the middle by people carrying things up.",
    },
    {
      id: "far-wall",
      nouns: ["far wall", "far end", "wall", "walls", "end", "dark"],
      description: "Out past the light. The footings run that way and do not stop.",
    },
  ],
  exits: {
    up: "turning-house",
  },
};
