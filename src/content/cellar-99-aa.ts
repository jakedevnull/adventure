import type { Room } from "../types.ts";

// The Cellar, 99 AA — the Morning Country.
// Survivors' villages among ruins nobody can read, including their own
// (UNIVERSE.md §4). Somebody lived down here for as long as the tally runs.
// The cellar is the part of the House that came through the Gap unaltered,
// which is why they chose it.
//
// The tally is written as a non-takeable item rather than scenery, so that
// READ answers it — the same shape as `waymark` in the House above, and for
// the same reason (a scratched sign wants reading, not just looking at).
// Dark, like five of the six.
// All text here answers to design/WRITING-GUIDE.md.

export const cellar99AA: Room = {
  id: "cellar:99-aa",
  place: "cellar",
  title: "The Cellar",
  landing: "99 AA",
  age: "the Morning Country",
  dark: true,
  look:
    "Somebody lived down here: a bed frame against the footings, a flat stone set up for a " +
    "table, and the ash of small fires ringed on the floor. The hearthstone overhead is " +
    "warm again, which it was not for whoever laid those fires. The steps go up behind you.\n" +
    "A tally is scratched into the stone beside the bottom step.",
  lookAgain: "The bed frame, the ash rings on the floor, and the tally beside the bottom step.",
  time: {
    // PAST is the stride back over the Gap, to 99 BA.
    past: true,
    future: true,
  },
  items: [
    {
      id: "cellar-tally",
      nouns: ["tally", "marks", "scratches", "scratch", "count", "score"],
      description: "Cut in fours and a cross, down the stone at shoulder height where a hand would reach.",
      takeable: false,
      takeRefusal: "It is a mark on a wall. You would have to take the wall.",
      read: "Forty-one. It does not say what it was counting, and it stops rather than finishes.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "bed-frame",
      nouns: ["bed", "bed frame", "frame", "bedding", "cot"],
      description: "Cut to fit the space between two footings by somebody who measured first.",
    },
    {
      id: "small-fires",
      nouns: ["fires", "fire", "ash", "ashes", "ring", "rings", "flat stone", "stone table", "table"],
      description: "Small fires, ringed with care, set well away from anything that would carry.",
    },
    {
      id: "cellar-hearthstone",
      nouns: ["hearthstone", "underside", "ceiling", "slab", "soot"],
      description: "Warm through again. Somebody upstairs got the fire going, and this is where you feel it.",
    },
    {
      id: "cellar-footings",
      nouns: ["footings", "footing", "courses", "course", "stones", "drystone", "masonry", "wall", "walls"],
      description: "The same dry-laid courses. Nothing down here needed putting back.",
    },
    {
      id: "cellar-steps",
      nouns: ["steps", "step", "stair", "stairs", "cellar steps", "hatch"],
      description: "Older than the wall at the top of them, and in better order.",
    },
  ],
  exits: {
    up: "turning-house:99-aa",
  },
};
