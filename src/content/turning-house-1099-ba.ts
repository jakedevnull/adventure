import type { Room } from "../types.ts";

// The Turning House, 1099 BA — the Long Noon.
// A golden, complacent age: the best wine, the worst maps (UNIVERSE.md §4).
// The House is rich and a little careless with itself, and the landlord answers
// the age question with a confident number that is a thousand years short.
// All text here answers to design/WRITING-GUIDE.md.

export const turningHouse1099BA: Room = {
  id: "turning-house:1099-ba",
  place: "turning-house",
  title: "The Turning House",
  landing: "1099 BA",
  age: "the Long Noon",
  look:
    "You are in the common room of the inn at the crossroads, plastered now to the " +
    "height of a man and painted with a vine border that stops where the ladder did. " +
    "Behind the plaster the drystone is still doing the work. The fire has not been " +
    "out in living memory, and living memory is the shortest thing in this room.\n" +
    "The landlord is pricing a journey for a table of merchants who have not asked.\n" +
    "A map of the roads hangs by the door.",
  lookAgain:
    "The common room, plastered and painted over. The map by the door, the landlord " +
    "pricing something.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "road-map",
      nouns: ["map", "road map", "roadmap", "board"],
      description: "A map of the crossroads, painted on board and lettered in gold.",
      takeable: false,
      takeRefusal: "It belongs to the door it hangs on, and the door is the House's.",
      read: "Four roads are named here. Three of them are out there.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "landlord",
      nouns: ["landlord", "man", "keeper", "innkeeper", "him"],
      description:
        "He keeps the House the way his family keeps everything: firmly, and without " +
        "looking behind him.",
      talk:
        "\"Four hundred years next spring,\" he says, \"and the accounts to prove it.\" " +
        "He does not go and get them.",
    },
    {
      id: "fire",
      nouns: ["fire", "hearth", "flame", "flames", "fireplace"],
      description: "Well fed, well swept, and nobody's particular job.",
    },
    {
      id: "plaster",
      nouns: ["plaster", "vines", "vine", "border", "paint", "painting"],
      description:
        "Good plaster, and under it the walls that will still be here when it flakes.",
    },
    {
      id: "walls",
      nouns: ["walls", "wall", "stones", "stone", "drystone", "masonry"],
      description: "Drystone, laid without mortar, and covered up for looking rough.",
    },
    {
      id: "merchants",
      nouns: ["merchants", "merchant", "table of merchants", "traders", "them"],
      description:
        "Four of them, wearing the year's money, agreeing with each other about the road.",
    },
    {
      id: "table",
      nouns: ["table", "long table", "cloth"],
      description: "The long table, under a cloth that gets washed for company.",
    },
    {
      id: "door",
      nouns: ["door"],
      description: "Unbarred, this age. There is nothing on the road worth barring it against.",
    },
    {
      id: "stair",
      nouns: ["stair", "stairs", "steps", "staircase"],
      description: "The stair climbs to rooms that cost twice what they did last year.",
    },
    {
      id: "road",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "Three roads leave the crossroads. The map is very sure there are four.",
    },
  ],
};
