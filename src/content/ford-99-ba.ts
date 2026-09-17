import type { Room } from "../types.ts";
import { EIGHTH_STONE_LETTERS } from "./ford-2099-ba.ts";

// The Ford, 99 BA — the Hush. A fixed point (UNIVERSE.md §4).
// The age's dread delivered as a measurement: the water is the lowest anyone has
// seen it, and the whole stone is out of it for the first time since it was cut.
// Nobody is here to say so. The box is on the post with the lid up and nothing
// in it, which is the price of the crossing in an age that has stopped charging.
//
// The bell is west along the road, and it is the same bell the yard hears east
// of itself on this night at `crossroads-yard:99-ba`. Nothing is explained here,
// because it is never explained anywhere.
//
// No spatial exit: no crossing face in this age. You arrive by the years.
// All text here answers to design/WRITING-GUIDE.md.

export const ford99Ba: Room = {
  id: "ford:99-ba",
  place: "ford",
  title: "The Ford",
  landing: "99 BA",
  age: "the Hush",
  look:
    "The water is down to a channel you could step over, and the stepping stones cross " +
    "it dry, every one of them. There is nobody at the ford in either direction, and the " +
    "punt is up on the shingle well above where the river has left off. The milestone " +
    "stands clear of the water altogether, foot and all.\n" +
    "The box is on the post with the lid up, and west along the road a bell is being rung slowly.",
  lookAgain:
    "The dry stepping stones, the empty box on the post, and the milestone clear of the " +
    "water. The bell is still going, west.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "ford-stone-99-ba",
      nouns: ["milestone", "stone", "marker", "letters", "inscription"],
      description: "Out of the river foot and all, with a band of weed round the base where the water has always been.",
      takeable: false,
      takeRefusal: "Nobody is watching, and it is still a milestone.",
      read: EIGHTH_STONE_LETTERS,
      start: "room",
    },
  ],
  scenery: [
    {
      id: "ford-water-99-ba",
      nouns: ["water", "river", "channel", "level", "current", "ford"],
      description: "A channel two feet across, with dry stones on both sides of it where the river was a month ago.",
    },
    {
      id: "ford-stones-99-ba",
      nouns: ["stepping stones", "stepping", "stones", "steps", "shingle"],
      description: "Dry to the last three, which have not been dry in the memory of anybody who uses them.",
    },
    {
      id: "ford-box-99-ba",
      nouns: ["box", "toll box", "collection box", "lid", "slot"],
      description: "On the post where the man leaves it, with the lid up and nothing whatever in it.",
    },
    {
      id: "ford-post-99-ba",
      nouns: ["post", "ferry-post", "ferry post", "ring", "rope", "frame", "lease"],
      description: "The oak post with the ring still on it and the frame empty where the lease used to be.",
    },
    {
      id: "ford-boat-99-ba",
      nouns: ["boat", "ferry", "punt", "craft"],
      description: "Pulled up dry with the line coiled on the thwart, the way a man leaves it for one night.",
    },
    {
      id: "ford-bell-99-ba",
      nouns: ["bell", "bells", "ringing"],
      description: "West along the road, slow and even, and nothing answering it from anywhere.",
    },
    {
      id: "ford-road-99-ba",
      nouns: ["road", "roads", "paving", "high road", "high roads"],
      description: "Dry, swept, in good order, and carrying nobody in either direction tonight.",
    },
    {
      id: "ford-far-bank-99-ba",
      nouns: ["far bank", "bank", "far side", "other side", "opposite"],
      description: "The road goes on over there and climbs, with nothing on it either way, which has never happened.",
    },
  ],
};
