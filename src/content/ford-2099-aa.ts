import type { Room } from "../types.ts";
import { EIGHTH_STONE_LETTERS } from "./ford-2099-ba.ts";

// The Ford, 2099 AA — the Lettered Age. The end of the walk east.
//
// The stone has been dug out of the lock wall, scrubbed, stood on a plinth by the
// towpath and labelled. The label is careful, sourced and wrong: it dates the
// stone by the wall it came out of, because that is the only evidence anybody
// kept, and files its second line as a mason's tally. It does not quote that
// line, does not mention the crossing, and does not mention a sequence.
//
// One mile west, `crossroads-yard:2099-aa` has a placard from the same University
// telling visitors that the ninth stone's other eight have never been found.
// Neither text knows about the other. The narrator does not introduce them, and
// the room is empty so that nobody stands here to be corrected.
// All text here answers to design/WRITING-GUIDE.md.

export const ford2099Aa: Room = {
  id: "ford:2099-aa",
  place: "ford",
  title: "The Ford",
  landing: "2099 AA",
  age: "the Lettered Age",
  look:
    "The lock is kept in order for the one boat a week that wants it, with the gates " +
    "chained and a gauge board bolted to the chamber wall. Level pegs run along the bank " +
    "at even intervals, and a benchmark is cut into the coping at the head of them. The " +
    "stone is up on a plinth beside the towpath, scrubbed, with a printed label bolted to " +
    "the plinth under it.\n" +
    "The towpath ends at the plinth, and the letters are legible from where you are standing.",
  lookAgain:
    "The chained gates, the gauge board and the line of level pegs. The stone stands on " +
    "its plinth with the label under it, where the towpath gives out.",
  time: {
    // The far end of the world: the years run back and no further forward.
    past: true,
    future: false,
  },
  items: [
    {
      id: "ford-stone-2099-aa",
      nouns: ["milestone", "stone", "marker", "letters", "inscription", "exhibit", "foot"],
      description: "Upright on a dressed plinth, scrubbed back to the grain, with every letter of it legible.",
      takeable: false,
      takeRefusal: "It is dowelled to the plinth at the foot, and the plinth is bedded in the towpath.",
      read: EIGHTH_STONE_LETTERS,
      start: "room",
    },
    {
      id: "ford-label-2099-aa",
      nouns: ["label", "notice", "placard", "sign", "plate", "card"],
      description: "Printed and set under glass on the face of the plinth, with the University's mark in the corner.",
      takeable: false,
      takeRefusal: "It is bolted through at four corners, and the plinth weighs more than the stone.",
      read:
        "ON A LETTERED STONE RECOVERED FROM THE LOCK AT THE FORD. Taken from the near wall " +
        "of the lock chamber during the repairs, where it lay face out at the waterline. " +
        "The canal company's records put the building of that wall at 1104, and the stone " +
        "is dated with it. Its first line, ELLERMARK, is a place-name of uncertain " +
        "application in this district. Its second line is a mason's tally of the kind " +
        "commonly cut on gauge stones, and has not been interpreted. The stone is " +
        "understood to have served the lock as a gauge. Contributions toward the keeping " +
        "of this exhibit may be left in the box.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "ford-gauge-2099-aa",
      nouns: ["gauge", "gauge board", "board", "scale", "graduations", "tenths"],
      description: "Enamelled and bolted to the chamber wall, graduated from the cill up in tenths.",
    },
    {
      id: "ford-wall-2099-aa",
      nouns: ["chamber wall", "wall", "masonry", "courses", "ashlar"],
      description: "Good ashlar with the gauge board bolted to it, and a square of new stone at the waterline where the exhibit came out.",
    },
    {
      id: "ford-pegs-2099-aa",
      nouns: ["pegs", "peg", "level pegs", "stakes", "line"],
      description: "Painted stakes at even intervals along the bank, read twice a year and written down.",
    },
    {
      id: "ford-benchmark-2099-aa",
      nouns: ["benchmark", "bench mark", "mark", "coping", "cut", "arrow"],
      description: "Cut into the coping at the head of the pegs, with an arrow under it pointing at the level it means.",
    },
    {
      id: "ford-gates-2099-aa",
      nouns: ["gates", "gate", "lock", "chamber", "chain", "chains"],
      description: "Chained shut for the season and greased against it, and opened in season for one boat a week.",
    },
    {
      id: "ford-water-2099-aa",
      nouns: ["water", "river", "level", "pound", "current", "ford"],
      description: "Standing at four tenths on the board, which is where the board says it is to be kept.",
    },
    {
      id: "ford-plinth-2099-aa",
      nouns: ["plinth", "pedestal", "base", "dowels", "glass", "face", "faces"],
      description: "Dressed on four faces, with the stone dowelled on top of it and the label glazed into the front.",
    },
    {
      id: "ford-box-2099-aa",
      nouns: ["box", "contribution box", "collection box", "slot"],
      description: "A small iron box on the plinth with a slot in the top and about a coin's weight in it.",
    },
    {
      id: "ford-towpath-2099-aa",
      nouns: ["towpath", "path", "road", "grit", "surface"],
      description: "Made up in grit as far as the plinth and grassed over the moment it is past it.",
    },
    {
      id: "ford-cottage-2099-aa",
      nouns: ["cottage", "house", "door", "window", "chimney", "shutters"],
      description: "Shuttered, sound, and let by the year to somebody who is not here.",
    },
    {
      id: "ford-far-bank-2099-aa",
      nouns: ["far bank", "bank", "far side", "other side", "opposite"],
      description: "The gates are chained across the chamber and the towpath ends at the plinth.",
    },
  ],
};
