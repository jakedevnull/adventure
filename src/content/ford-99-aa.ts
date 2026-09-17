import type { Room } from "../types.ts";
import { EIGHTH_STONE_LETTERS } from "./ford-2099-ba.ts";

// The Ford, 99 AA — the Morning Country.
// One step over the Gap and nothing offered by way of explanation. Silt has the
// stepping stones, a plank is laid across the narrows, and its near end rests on
// the fallen stone because the stone is the only thing here that does not move.
//
// The eel-woman tells the player what the plank stone is for. It is a good
// answer, given kindly and with certainty, and it is not the answer. She cannot
// read and neither can anyone she knows, which she does not experience as a lack
// and which the narrator does not remark on. The crossing is free in this age;
// nobody alive knows it was ever otherwise.
// All text here answers to design/WRITING-GUIDE.md.

export const ford99Aa: Room = {
  id: "ford:99-aa",
  place: "ford",
  title: "The Ford",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "Silt has taken the stepping stones, and the river runs narrow and brown between two " +
    "banks of it. A plank is laid across the narrows with its near end resting on a " +
    "fallen stone. A woman is crouched in the slack water below the plank, setting a " +
    "trap.\n" +
    "A path in the grass goes back west, with a hedge grown along one side of it.",
  lookAgain:
    "The narrows, the plank on the fallen stone, and the woman at her trap. The path west " +
    "runs off between the silt and the hedge.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "ford-stone-99-aa",
      nouns: ["milestone", "stone", "marker", "letters", "inscription", "plank stone", "foot"],
      description: "On its side in the silt with the plank across its foot, and the letters up and clear of the mud.",
      takeable: false,
      takeRefusal: "The plank is on it and the silt is round it, and it weighs what it always weighed.",
      read: EIGHTH_STONE_LETTERS,
      start: "room",
    },
  ],
  scenery: [
    {
      id: "ford-eel-woman-99-aa",
      nouns: ["woman", "eel-woman", "eel woman", "her", "trapper", "line"],
      description: "She comes down at the same hour every evening and takes her line off the plank stone.",
      talk:
        "\"That's the plank stone,\" she says. \"It came up out of the mud when my " +
        "father's father was cutting reeds here, and we laid the plank on it because it " +
        "is the one thing at this crossing that stays where it is put. Nothing to pay. " +
        "Nobody ever paid for a plank.\"",
    },
    {
      id: "ford-plank-99-aa",
      nouns: ["plank", "board", "bridge", "elm", "end", "near end", "far end", "ends"],
      description: "One good elm plank, its near end on the stone and its far end on a bar of silt.",
    },
    {
      id: "ford-trap-99-aa",
      nouns: ["trap", "eel-trap", "eel trap", "basket", "eels", "withies"],
      description: "A withy basket weighted with a brick and set mouth-upstream in the slack.",
    },
    {
      id: "ford-water-99-aa",
      nouns: ["water", "river", "silt", "narrows", "channel", "current", "ford", "mud", "banks"],
      description: "Narrow and brown between two banks of silt, and deeper down the middle than the whole of it used to be.",
    },
    {
      id: "ford-stones-99-aa",
      nouns: ["stepping stones", "stepping", "stones", "steps"],
      description: "Somewhere under the silt where they were set, and nobody here has a word for what they were.",
    },
    {
      id: "ford-path-99-aa",
      nouns: ["path", "road", "grass", "hedge", "track", "village"],
      description: "A drovers' path west along the top of the buried paving, with a hedge grown up one side of it.",
    },
    {
      id: "ford-far-bank-99-aa",
      nouns: ["far bank", "bank", "far side", "other side", "opposite", "bar", "silt bar"],
      description: "The plank ends on the silt bar, and the channel past the bar is deeper than the plank is long.",
    },
  ],
  exits: {
    west: "east-road:99-aa",
  },
};
