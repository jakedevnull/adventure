import type { Room } from "../types.ts";
import { EIGHTH_STONE_LETTERS } from "./ford-2099-ba.ts";

// The Ford, 1099 AA — the Rekindling.
// This is the lock. `turning-house:1099-aa` has been telling the player about it
// for a whole age, in one line of scenery: canal tolls chalked up daily, since
// the river got a lock and stopped arguing. The canal itself is a separate cut
// a mile north of the House; this is the river, and the two meet below here.
//
// Somebody rebuilding the near wall found a squared stone in the silt and used
// it, face out, at the waterline, because that is what a squared stone is for.
// The keeper charges by what the water does against its top line. He quotes the
// rate and the gates and the level, and he has no opinion about the wall.
//
// No spatial exit: no crossing face in this age.
// All text here answers to design/WRITING-GUIDE.md.

export const ford1099Aa: Room = {
  id: "ford:1099-aa",
  place: "ford",
  title: "The Ford",
  landing: "1099 AA",
  age: "the Rekindling",
  look:
    "The river has a lock in it: two sets of gates, a stone chamber between them, and a " +
    "cottage on the bank beside it. The keeper stands in the cottage doorway with a book " +
    "open on his arm. The near wall of the chamber is coursed to the waterline, and one " +
    "course of it lies on its side with letters cut in the face of it.\n" +
    "A slate hangs by the cottage door with the day's rates on it.",
  lookAgain:
    "The lock, the cottage, and the keeper in his doorway with the book. The slate is by " +
    "the door and the lettered course is down at the waterline.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "ford-stone-1099-aa",
      nouns: ["milestone", "stone", "marker", "letters", "inscription", "lettered course", "course"],
      description: "Laid on its side in the near wall, face out, with the letters at the waterline and green along the bottom of them.",
      takeable: false,
      takeRefusal: "There are four courses of good ashlar on top of it and both gates lean on all four.",
      read: EIGHTH_STONE_LETTERS,
      start: "room",
    },
    {
      id: "ford-slate-1099-aa",
      nouns: ["slate", "rates", "chalk", "board", "toll", "tolls", "prices"],
      description: "Hung on a nail by the door and written up in chalk before it was light.",
      takeable: false,
      takeRefusal: "The keeper wants it where the boats can read it, and so does the company.",
      read:
        "THE LOCK AT THE FORD. RATES FOR THE DAY. Per boat through, six. Per lockful drawn " +
        "off, twelve. Boats above the gates take their turn as they come and not otherwise. " +
        "Set to the same table as the canal below, and entered in the book the same evening.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "ford-keeper-1099-aa",
      nouns: ["keeper", "lock-keeper", "lockkeeper", "man", "him", "arm"],
      description: "He keeps the gates, the book and the rate, and he had the slate out before it was light.",
      talk:
        "\"Six for a boat through, twelve if you want a lockful drawn off for you,\" he " +
        "says. \"She's two fingers over the top line of the lettered course this morning, " +
        "which is as much as I want her. Gates were hung new in my father's time and they " +
        "still shut on a hair.\"",
    },
    {
      id: "ford-gates-1099-aa",
      nouns: ["gates", "gate", "lock", "chamber", "beams", "balance beams"],
      description: "Oak and iron at both ends of the chamber, shut, and they shut on a hair.",
    },
    {
      id: "ford-cottage-1099-aa",
      nouns: ["cottage", "house", "door", "doorway", "chimney", "window", "nail"],
      description: "One room and a loft, whitewashed, with the lock's number painted over the door.",
    },
    {
      id: "ford-book-1099-aa",
      nouns: ["book", "ledger", "accounts", "column", "columns"],
      description: "Ruled in columns, with today half down the page and the ink still wet at the foot of it.",
    },
    {
      id: "ford-water-1099-aa",
      nouns: ["water", "river", "level", "pound", "current", "ford", "mark", "waterline"],
      description: "Held between the gates and steady, two fingers over the top line of the lettered course.",
    },
    {
      id: "ford-wall-1099-aa",
      nouns: ["wall", "masonry", "courses", "coursing", "ashlar"],
      description: "Good ashlar down to the waterline, with whatever came to hand built in below that.",
    },
    {
      id: "ford-canal-1099-aa",
      nouns: ["canal", "canals", "cut", "barges", "barge", "boats", "company"],
      description: "The cut comes in below the lock, and the company sets one table of rates for the pair of them.",
    },
    {
      id: "ford-far-bank-1099-aa",
      nouns: ["far bank", "bank", "far side", "other side", "opposite", "towpath"],
      description: "The gates are shut across the chamber, and the keeper opens them for boats.",
    },
  ],
};
