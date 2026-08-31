import type { Room } from "../types.ts";

// The Back Garden, 1099 BA — the Long Noon.
// The maze is being made: string, pegs, and whips of yew a hand high. The
// gardener has the drawing and is proud of it, and the drawing shows a heart
// with no way in — which the Long Noon thought was the good part. It is one of
// the story's two wrong plans; the other is the placard in 2099 AA, and they
// agree about nothing else
// (design/stories/the-gardens-behind-the-house/OUTLINE.md).
// All text here answers to design/WRITING-GUIDE.md.

export const backGarden1099BA: Room = {
  id: "back-garden:1099-ba",
  place: "back-garden",
  title: "Behind the House",
  landing: "1099 BA",
  age: "the Long Noon",
  look:
    "The plot is being turned into a puzzle. String runs from peg to peg over the whole " +
    "garden, and set along the strings are whips of yew a hand high, a lifetime short of " +
    "being a wall. The well has a little painted roof on it. The back door of the House " +
    "is south, and there is nothing yet to walk into.\n" +
    "The gardener works down a line with his drawing propped against a barrow.",
  lookAgain:
    "String, pegs, and yew whips, and the well under its painted roof. The gardener and " +
    "his drawing. The back door of the House is south.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "maze-plan",
      nouns: ["drawing", "plan", "maze plan", "board", "design"],
      description: "A maze drawn on board in ink and gold, with the gold going on the names.",
      takeable: false,
      takeRefusal: "It is the gardener's, and he is using it.",
      read:
        "Every walk is drawn and every walk is named. At the middle is a square of grass " +
        "with hedge all the way round it and no gap anywhere in the hedge.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "gardener",
      nouns: ["gardener", "man", "him"],
      description:
        "He can lay a string line to a hair, and he holds the drawing at arm's length to " +
        "read the names.",
      talk:
        "\"Sixty years before it's a hedge,\" he says, pleased. \"The middle isn't for " +
        "going in. It's for knowing about.\"",
    },
    {
      id: "well",
      nouns: ["well", "roof", "painted roof", "shaft", "bucket"],
      description: "A little tiled roof over the shaft, painted green and red. The paint is the newer work.",
    },
    {
      id: "yew",
      nouns: ["yew", "whips", "whip", "cuttings", "hedge", "plants"],
      description: "Yew whips a hand high, each one tied to a cane, each one the length of a walk apart.",
    },
    {
      id: "strings",
      nouns: ["string", "strings", "lines", "line", "pegs", "peg"],
      description: "Waxed string on hazel pegs, marking out walks that nobody alive will walk.",
    },
    {
      id: "barrow",
      nouns: ["barrow", "wheelbarrow", "tools", "spade"],
      description: "A barrow of leafmould, and the tools laid in it the way a man lays out his own.",
    },
    {
      id: "wall",
      nouns: ["wall", "walls", "stones", "stone", "drystone", "masonry"],
      description: "The old drystone, patched in two places with mortar because mortar was quicker.",
    },
    {
      id: "door",
      nouns: ["door", "back door"],
      description: "The low door into the House, with a boot-scraper beside it that is new this year.",
    },
    {
      id: "ground",
      nouns: ["ground", "grass", "earth", "soil", "beds"],
      description: "Turned over end to end. Whatever was growing here was somebody else's idea.",
    },
  ],
  exits: {
    south: "turning-house:1099-ba",
  },
};
