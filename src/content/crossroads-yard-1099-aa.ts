import type { Room } from "../types.ts";

// Crossroads Yard, 1099 AA — the Rekindling.
// The canals took the traffic, so the yard is a yard again: a place to turn a cart
// in rather than a place to pass through. The roads are still under the grass and
// still the straightest line in the country, and are outrun anyway by a cut that
// had to go around three hills to get here. Nobody is in a hurry.
// The pump is bolted over the well and the old rope is kept on a peg, because the
// House has always kept the rope.
// All text here answers to design/WRITING-GUIDE.md.

export const crossroadsYard1099Aa: Room = {
  id: "crossroads-yard:1099-aa",
  place: "crossroads-yard",
  title: "Crossroads Yard",
  landing: "1099 AA",
  age: "the Rekindling",
  look:
    "The yard has been gravelled and squared off, and is a place to turn a cart in " +
    "rather than a place to pass through. A pump-handle stands over the well, with the " +
    "old rope coiled on a peg beside it. The crossing is still under grass and still " +
    "the straightest line in the country, and the traffic that used to use it is a " +
    "mile north in the locks.\n" +
    "The inn door is propped open with an iron boot-scraper.",
  lookAgain:
    "The gravelled yard, the pump over the well, and the barges a mile north. The inn " +
    "door is propped open.",
  time: {
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "well-1099-aa",
      nouns: ["well", "pump", "pump-handle", "handle", "rope", "peg", "bucket", "water", "wellhead"],
      description:
        "A cast pump-handle bolted over the drystone head, with the old rope kept on a peg for when the pump is being mended.",
    },
    {
      id: "yard-roads-1099-aa",
      nouns: ["road", "roads", "crossing", "crossroads", "grass", "high road", "high roads"],
      description: "Grassed over, dead straight, and outrun by a cut that had to go around three hills to get here.",
    },
    {
      id: "canal-1099-aa",
      nouns: ["canal", "canals", "locks", "lock", "barges", "barge", "boats", "cut"],
      description: "A mile north, with the barges going at the pace of a walking horse, which is what pulls them.",
    },
    {
      id: "gravel-1099-aa",
      nouns: ["gravel", "yard", "ground", "stones", "tracks"],
      description: "Raked level, with one set of cart tracks turning in it and turning out again.",
    },
    {
      id: "milestone-1099-aa",
      nouns: ["milestone", "stone", "marker"],
      description: "Out at the centre of the crossing, still down in the grass, and grazed around rather than moved.",
    },
    {
      id: "yard-door-1099-aa",
      nouns: ["door", "doorway", "inn", "house", "turning house", "scraper", "boot-scraper"],
      description: "Propped open with an iron boot-scraper the House had made rather than bought.",
    },
  ],
  exits: {
    in: "turning-house:1099-aa",
  },
};
