import type { Room } from "../types.ts";

// The Turning House, 1099 AA — the Rekindling.
// Guilds, canals, printing; history rewritten by people guessing (UNIVERSE.md
// §4). The keeper's refusal is a citation: he does not claim the date, he
// points at the wall where it is printed, and the printing is wrong. The sill
// is glazed now and carries an empty bracket, which 2099 AA fills.
// All text here answers to design/WRITING-GUIDE.md.

export const turningHouse1099AA: Room = {
  id: "turning-house:1099-aa",
  place: "turning-house",
  title: "The Turning House",
  landing: "1099 AA",
  age: "the Rekindling",
  look:
    "The common room has glass in the window and its own history pasted on the wall. A " +
    "canal has been cut past the crossroads, with a lock at the end of it and a man " +
    "taking money at the lock; the road is not troubled. The fire is where it always is.\n" +
    "The innkeeper stands behind a counter, which is new.\n" +
    "A license hangs by the door, and six pages of print beside it.",
  lookAgain:
    "The common room, glazed and papered. The license by the door, the printed history " +
    "beside it, the innkeeper behind his counter.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "license",
      nouns: ["license", "licence", "board", "parchment", "horn"],
      description: "A board of parchment under horn, screwed to the door frame.",
      takeable: false,
      takeRefusal: "It is screwed to the frame, and the guild counts them.",
      read: "The House may sell drink and keep the peace until midnight, in that order.",
      start: "room",
    },
    {
      id: "family-history",
      nouns: ["history", "printed history", "print", "pages", "paper", "wall history"],
      description: "Six pages of print pasted to the wall, foxed at the corners and never pasted over.",
      takeable: false,
      takeRefusal: "It is pasted flat, and the paste has won.",
      read:
        "\"A True Account of the House at the Crossroads.\" It starts in the year 459 and " +
        "grows surer of itself with every page.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "innkeeper",
      nouns: ["innkeeper", "man", "keeper", "landlord", "him"],
      description: "He is the fourth of his line to hold the license and the first to have it framed.",
      talk:
        "\"It's on the wall,\" he says, and taps the page. \"Six hundred and forty years, " +
        "and my family for all of them.\"",
    },
    {
      id: "fire",
      nouns: ["fire", "hearth", "flame", "flames", "fireplace"],
      description: "The same hearth, swept twice a day now that people come to look at it.",
    },
    {
      id: "sill",
      nouns: ["sill", "windowsill", "window", "glass", "bracket"],
      description: "Glazed at last, with an iron bracket screwed under the window and nothing in it.",
    },
    {
      id: "canal",
      nouns: ["canal", "cut", "lock", "water", "barge", "barges"],
      description: "A cut straight enough to insult the river it was taken from.",
    },
    {
      id: "counter",
      nouns: ["counter", "bar", "ledger"],
      description: "New oak, with a ledger on it that goes back eleven years.",
    },
    {
      id: "walls",
      nouns: ["walls", "wall", "stones", "stone", "drystone", "masonry", "plaster"],
      description: "Plaster over stone over older stone, and paper over all of it.",
    },
    {
      id: "door",
      nouns: ["door", "frame", "doorframe"],
      description: "The door the license hangs on, and the license is the newer of the two.",
    },
    {
      id: "road",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description:
        "The guild has surveyed it, priced repairing it, and left it alone. It does not need them.",
    },
  ],
  exits: {
    // The back door, into the garden (The Gardens Behind the House).
    north: "back-garden:1099-aa",
  },
};
