import type { Room } from "../types.ts";

// The Turning House, 2099 AA — the Lettered Age.
// Universities, museums, the first scholars of the Awakening and of the Lapse,
// all wrong (UNIVERSE.md §4). The inn has become half a museum of itself: a
// placard for everything and an answer for nothing.
//
// The end of the tour. A brass lamp burns on the sill, dented and rubbed
// bright, and it is the House's own — never "your lamp," because room text
// cannot know whether the player still carries theirs. Nothing here explains
// the lamp, and nothing here may try.
// All text answers to design/WRITING-GUIDE.md.

export const turningHouse2099AA: Room = {
  id: "turning-house:2099-aa",
  place: "turning-house",
  title: "The Turning House",
  landing: "2099 AA",
  age: "the Lettered Age",
  look:
    "The common room is half a museum of itself, with a placard on the settle and one on " +
    "the door about the hinges. The fire is going, and is not an exhibit. On the sill a " +
    "brass lamp is burning.\n" +
    "The keeper is old and busy.\n" +
    "A coin lies face down in a case by the stair, under a placard.",
  lookAgain:
    "The common room, placarded. The lamp burning on the sill, the coin face down in its " +
    "case, the keeper on her rounds.",
  time: {
    past: true,
    // 2099 AA is the newest landing in the world. The tour ends here.
    future: false,
  },
  items: [
    {
      id: "sill-lamp",
      // Not "brass" or "brass lamp": those stay the player's own lamp, so both
      // are reachable by name if they carried theirs this far.
      nouns: ["burning lamp", "lit lamp", "lamp"],
      description: "A brass lamp, burning, dented in three places and rubbed bright where a hand goes.",
      takeable: false,
      takeRefusal: "She would only fill another one.",
      read: "Nothing is written on it. It is the one thing in this room without a placard.",
      start: "room",
    },
    {
      id: "cased-coin",
      nouns: ["cased coin", "coin", "case", "penny", "exhibit"],
      description: "A coin, face down, in a locked case with a brass rail around it.",
      takeable: false,
      takeRefusal: "The case is locked. You would let it lie anyway.",
      read: "COIN, PRE-AWAKENING. FOUND UNDER THE HEARTHSTONE. PROBABLY CEREMONIAL.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "keeper",
      nouns: ["keeper", "woman", "landlady", "innkeeper", "old woman", "her"],
      description: "She fills the lamp in the evening and does not explain the habit to people who ask.",
      talk:
        "\"The university has a date for it,\" she says. \"They have had three.\" She " +
        "turns the lamp a little out of the draft.",
    },
    {
      id: "fire",
      nouns: ["fire", "hearth", "flame", "flames", "fireplace", "hearthstone"],
      description: "Kept the way it has always been kept, by somebody with other things to do.",
    },
    {
      id: "sill",
      nouns: ["sill", "windowsill", "window", "glass", "bracket"],
      description: "Stone below, glass above, and a bracket under the window with something in it.",
    },
    {
      id: "placards",
      nouns: ["placards", "placard", "label", "labels", "sign", "signs", "card"],
      description: "Every one of them is confident, and no two of them agree about the same century.",
    },
    {
      id: "settle",
      nouns: ["settle", "bench", "seat"],
      description: "Worn hollow at one end by a family of much the same shape.",
    },
    {
      id: "stair",
      nouns: ["stair", "stairs", "steps", "staircase", "rope"],
      description: "The same stair, carpeted, with a rope across the bottom step and boots above it.",
    },
    {
      id: "door",
      nouns: ["door", "hinges", "hinge", "frame"],
      description: "The hinges are original. The placard says so, and says it twice.",
    },
    {
      id: "walls",
      nouns: ["walls", "wall", "stones", "stone", "drystone", "masonry", "plaster"],
      description: "Plaster in the middle, print above, and drystone at the bottom of all of it.",
    },
    {
      id: "road",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "They are resurfacing it, on top of the courses that were laid to outlast their makers.",
    },
  ],
  exits: {
    // The back door, into the garden (The Gardens Behind the House).
    north: "back-garden:2099-aa",
  },
};
