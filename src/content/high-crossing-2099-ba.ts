import type { Room } from "../types.ts";

// High Crossing, 2099 BA — the High Masonry.
// The middle of the crossing, one step east of the yard. The years do not run
// here and nobody remarks on it: the loose ground is the House and its dooryard,
// and this is road.
//
// The milestone's letters are the story's through-line, so they are written once,
// here, and imported by every later room that shows them. In 99 AA the same string
// is still on the stone and nobody can read it; in 2099 AA it is quoted on a
// placard and explained wrongly. The narrator never adjudicates between the three.
// All text here answers to design/WRITING-GUIDE.md.

/**
 * What is cut into the milestone. The same two lines in every age that shows the
 * stone, byte for byte: `high-crossing:99-aa` reads it back unchanged, and the
 * placard in `crossroads-yard:2099-aa` quotes it verbatim before getting it wrong.
 * Weathering belongs in the descriptions, never in here.
 */
export const MILESTONE_LETTERS = "ELLERMARK\nNINE";

export const highCrossing2099Ba: Room = {
  id: "high-crossing:2099-ba",
  place: "high-crossing",
  title: "High Crossing",
  landing: "2099 BA",
  age: "the High Masonry",
  look:
    "You are at the centre of the crossing, where the two roads are fitted into each " +
    "other stone by stone. A milestone stands new-cut at the middle of it, pale where " +
    "the chisel went. A road-mason kneels at its foot, finishing the last letter by " +
    "lamplight.\n" +
    "The House shows one lit window back west.",
  lookAgain:
    "The centre of the crossing, the new milestone, and the mason at the last letter. " +
    "The House is back west.",
  time: {
    // Road, not loose ground. Both closed, so the engine prints no time line and
    // there is nothing to explain.
    past: false,
    future: false,
  },
  items: [
    {
      id: "milestone-2099-ba",
      nouns: ["milestone", "stone", "marker", "letters", "inscription"],
      description: "Waist-high and squared off, pale along the cuts where the letters are still fresh.",
      takeable: false,
      takeRefusal: "It is set in the road to stay there, and it will.",
      read: MILESTONE_LETTERS,
      start: "room",
    },
  ],
  scenery: [
    {
      id: "mason",
      nouns: ["mason", "road-mason", "man", "cutter", "him", "worker"],
      description: "He has been on this road eleven years and is judging the last letter by feel.",
      talk:
        "\"Ellermark, nine,\" he says, without looking up. \"Nine miles, and the last two " +
        "of them are mine. The bed under this crossing goes down further than the stone " +
        "does, if anybody ever asks you.\"",
    },
    {
      id: "crossing-2099-ba",
      nouns: ["road", "roads", "crossing", "crossroads", "high road", "high roads", "paving", "stones"],
      description: "Two roads fitted into one another without mortar, each stone set so that the next one holds it.",
    },
    {
      id: "lantern-2099-ba",
      nouns: ["lantern", "lamplight", "light"],
      description: "Set down on the paving beside him and hooded on the windward side.",
    },
    {
      id: "chisel",
      nouns: ["chisel", "tools", "mallet", "hammer"],
      description: "A chisel worn short and a mallet with a face like a river stone.",
    },
    {
      id: "crossing-house-2099-ba",
      nouns: ["house", "inn", "window", "turning house", "yard", "dooryard"],
      description: "One lit window a short walk west, with the door open under it.",
    },
  ],
  exits: {
    west: "crossroads-yard:2099-ba",
    east: "east-road:2099-ba",
  },
};
