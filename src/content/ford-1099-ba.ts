import type { Room } from "../types.ts";
import { EIGHTH_STONE_LETTERS } from "./ford-2099-ba.ts";

// The Ford, 1099 BA — the Long Noon.
// A thousand years have moved the river and left the stone where it was, so the
// stone is out in the shallows and has become an instrument. The ferryman reads
// the water off it morning and evening, has done for twenty years, and could not
// tell you there are letters on it.
//
// The toll has become a lease, held for a term and turning a profit, and the rate
// is three times what the commissioners set. Nobody argues about it, because
// nobody in the Long Noon argues about money. The best wine and the worst maps:
// the map he mentions is the one at `turning-house:1099-ba` that puts this river
// on the wrong side of the hills, in good ink.
//
// No spatial exit: the crossing has no face in this age, so there is nowhere on
// the map to walk to. You arrive by the years and you leave by the years.
// All text here answers to design/WRITING-GUIDE.md.

export const ford1099Ba: Room = {
  id: "ford:1099-ba",
  place: "ford",
  title: "The Ford",
  landing: "1099 BA",
  age: "the Long Noon",
  look:
    "The river runs a few yards north of where the road comes down to meet it, and the " +
    "stepping stones are stranded in the shingle. The ferry is tied up and dry, and the " +
    "man who holds the lease on it sits on the post in a good coat. The milestone is " +
    "four feet out in the shallows, green to the waterline.\n" +
    "The lease is framed on the post, over the holes the old toll-board left.",
  lookAgain:
    "The stranded stepping stones, the boat tied up dry, and the lessee on his post. The " +
    "milestone stands out in the shallows with the green partway up it.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "ford-stone-1099-ba",
      nouns: ["milestone", "stone", "marker", "letters", "inscription"],
      description: "Four feet out in the water, green to the waterline and dry and legible above it.",
      takeable: false,
      takeRefusal: "It is out in the river and it is the only fixed thing in it.",
      read: EIGHTH_STONE_LETTERS,
      start: "room",
    },
    {
      id: "ford-lease-1099-ba",
      nouns: ["lease", "frame", "document", "grant", "terms"],
      description: "Glazed and framed on the post, with two seals on it and the ink gone brown at the folds.",
      takeable: false,
      takeRefusal: "It is his living, under glass, and he is watching you look at it.",
      read:
        "THE FERRY AT THIS FORD, LET FOR A TERM OF TWENTY-ONE YEARS. The holder shall keep " +
        "one boat and one man, and shall cross at high water at his own discretion. A cart " +
        "with its beasts, twelve. A beast alone, six. A man on his own feet, three. Sealed " +
        "at Ellermark, and renewed once since.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "ford-ferryman-1099-ba",
      nouns: ["ferryman", "man", "him", "holder", "lessee", "coat"],
      description: "He has held the lease twenty years and has done better out of the river than the road ever did.",
      talk:
        "\"Boat runs at high water, and this is not high water,\" he says, comfortable " +
        "about it. \"Three for a man on his own feet, when it runs. I take the level off " +
        "the green on that stone, morning and evening, and it has not been up to the mark " +
        "since the spring. There's a map up at the House that has this river the far side " +
        "of the hills, and they paid well for the ink.\"",
    },
    {
      id: "ford-water-1099-ba",
      nouns: ["water", "river", "shallows", "level", "current", "ford", "mark"],
      description: "Running a few yards north of the road and a hand's breadth below the mark on the stone.",
    },
    {
      id: "ford-stones-1099-ba",
      nouns: ["stepping stones", "stepping", "stones", "steps", "shingle"],
      description: "Stranded in dry shingle where the water used to be, and not one of them has been moved.",
    },
    {
      id: "ford-post-1099-ba",
      nouns: ["post", "ferry-post", "ferry post", "ring", "rope", "holes", "nails"],
      description: "The same oak post with the same iron ring, and four nail holes in it where the board was.",
    },
    {
      id: "ford-boat-1099-ba",
      nouns: ["boat", "ferry", "punt", "craft"],
      description: "Tied up, dry, well kept, and out of the water more days in the year than in it.",
    },
    {
      id: "ford-road-1099-ba",
      nouns: ["road", "roads", "paving", "high road", "high roads"],
      description: "Still true the whole way down, and it ends now a few yards short of the thing it was aimed at.",
    },
    {
      id: "ford-far-bank-1099-ba",
      nouns: ["far bank", "bank", "far side", "other side", "opposite"],
      description:
        "The road climbs out over there, and the lease says the boat crosses at high water, which the man holding it says this is not.",
    },
  ],
};
