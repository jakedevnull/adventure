import type { Room } from "../types.ts";

// The Ford, 2099 BA — the High Masonry.
// The road walks into the river and comes out the other side, which is what a
// ford is. A week ago the mason was at the crossing a mile west finishing the
// ninth stone; this one he cut first, and nothing in the game says so.
//
// The letters are the story's through-line, so they are written once, here, and
// imported by the five later faces. Weathering, weed, silt and scrubbing live in
// each face's description, which is the only place they can live if the six read
// strings are to stay one string.
//
// The tollman gives the price and the depth, in that order, and keeps his box on
// the stone. Nobody in any age says the word on the second line, the narrator
// least of all.
// All text here answers to design/WRITING-GUIDE.md.

/**
 * What is cut into the stone at the ford. The same two lines in all six ages,
 * byte for byte, because every other face imports this and none of them retypes
 * it. The ninth stone's letters are the matching literal in
 * `high-crossing-2099-ba.ts`; neither constant is derived from the other, which
 * is what "the same hand" means here.
 */
export const EIGHTH_STONE_LETTERS = "ELLERMARK\nEIGHT";

export const ford2099Ba: Room = {
  id: "ford:2099-ba",
  place: "ford",
  title: "The Ford",
  landing: "2099 BA",
  age: "the High Masonry",
  look:
    "The road comes down out of the west and walks into the river at your feet, and on " +
    "the far bank it comes out again and climbs. Stepping stones cross in a line, with " +
    "the water over the last three of them. A ferry-post stands at the head of the line " +
    "with a toll-board nailed to it and a man sitting against it with a box on his " +
    "knees.\n" +
    "A milestone stands new-cut at the head of the stepping stones, its foot under the water.",
  lookAgain:
    "The ford, the stepping stones with the water over the last three, and the tollman " +
    "against his post. The milestone is at the head of the stones and the road is back west.",
  time: {
    // The oldest landing in the world: nothing behind it, and five ages of river ahead.
    past: false,
    future: true,
  },
  items: [
    {
      id: "ford-stone-2099-ba",
      nouns: ["milestone", "stone", "marker", "letters", "inscription", "foot"],
      description: "Waist-high and squared off, pale along the cuts, with its foot under water at this level.",
      takeable: false,
      takeRefusal: "It is set at the head of the stones to stay there, and the river has not shifted it yet.",
      read: EIGHTH_STONE_LETTERS,
      start: "room",
    },
    {
      id: "ford-toll-board-2099-ba",
      nouns: ["board", "toll-board", "toll board", "toll", "tolls", "prices", "rates"],
      description: "Nailed to the ferry-post at the height of a man on a horse, and the nails are new.",
      takeable: false,
      takeRefusal: "It is nailed on at four corners by somebody who meant it to stay.",
      read:
        "FOR THE CROSSING AT THIS FORD. A cart with its beasts, four. A beast alone, two. " +
        "A man on his own feet, one. Set by the commissioners of the road in the first " +
        "season of it.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "ford-tollman-2099-ba",
      nouns: ["tollman", "man", "him", "collector", "keeper", "knees"],
      description: "He keeps the box on his knees and has been bored of this road for most of the week it has existed.",
      talk:
        "\"One, for a man on his own feet,\" he says. \"Water's over the last three stones " +
        "and it'll be over them till the turn of the season, so it's the boat or it's " +
        "nothing. Mind your elbow on the box. I set it down on that new stone and it slides.\"",
    },
    {
      id: "ford-box-2099-ba",
      nouns: ["box", "toll box", "collection box", "lid", "slot"],
      description: "A lidded wooden box with a slot cut in the top and a strap on it for carrying home.",
    },
    {
      id: "ford-post-2099-ba",
      nouns: ["post", "ferry-post", "ferry post", "ring", "line", "rope"],
      description: "A squared oak post set deep in the bank, with an iron ring on it and the ferry line through the ring.",
    },
    {
      id: "ford-stones-2099-ba",
      nouns: ["stepping stones", "stepping", "stones", "steps"],
      description: "Set in a line across the bed, flat on top and squared off on the upstream face.",
    },
    {
      id: "ford-boat-2099-ba",
      nouns: ["boat", "ferry", "punt", "craft"],
      description: "A flat punt on the line, which goes over and comes back and does nothing else.",
    },
    {
      id: "ford-water-2099-ba",
      nouns: ["water", "river", "current", "depth", "level", "ford"],
      description: "Over the last three of the stepping stones and running hard enough to argue with a man's legs.",
    },
    {
      id: "ford-road-2099-ba",
      nouns: ["road", "roads", "paving", "high road", "high roads"],
      description: "New the whole mile of it, and it goes into the water at one edge and out of it at the other.",
    },
    {
      id: "ford-far-bank-2099-ba",
      nouns: ["far bank", "bank", "far side", "other side", "opposite"],
      description: "The road climbs out over there, and the man with the box will not take anything across at this level.",
    },
  ],
  exits: {
    west: "east-road:2099-ba",
  },
};
