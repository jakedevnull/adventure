import type { Room } from "../types.ts";

// The Turning House, 1099 BA — the Long Noon.
// The same common room at its loudest: a full board, good wine, nobody worried
// about anything. Same beams, long table, stair, and fire; the age is in the
// crowd and what the keeper has no time to say. The brass lamp rides in your
// pack, still unlit. All text answers to design/WRITING-GUIDE.md.

export const turningHouse1099Ba: Room = {
  id: "turning-house:1099-ba",
  place: "turning-house",
  title: "The Turning House",
  landing: "1099 BA",
  age: "the Long Noon",
  look:
    "A low room, loud as a market. Every bench is full, and the long table is a " +
    "wreck of cups and bones with good wine spilled across it and left to soak. The fire " +
    "roars, the black beams hold, the stair climbs past a landing where two men argue " +
    "about a road. The landlady of this age goes by with a jug in each hand and no time for you.",
  lookAgain:
    "The common room at full noon: crowded benches, a wrecked table, the fire loud in " +
    "the grate. The landlady passes without stopping.",
  time: {
    // The middle of the chain: PAST carries to the High Masonry (2099 BA), FUTURE
    // to the Hush (99 BA). Same place, adjacent landings; both runs are two-way.
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "landlady",
      nouns: ["landlady", "woman", "keeper", "innkeeper", "her"],
      description: "Younger than the fire she keeps, and run off her feet. She has this family's face.",
      talk: "\"Later, love,\" she says, already three tables gone.",
    },
    {
      id: "crowd",
      nouns: ["crowd", "company", "drinkers", "people", "men", "benches", "bench"],
      description: "A full house, warm with wine, worried about nothing at all. It will not last, and none of them know it.",
    },
    {
      id: "wine",
      nouns: ["wine", "spill", "spilled wine", "cups", "cup"],
      description: "Good wine, spilled and going to the boards. In this age no one counts it.",
    },
    {
      id: "table",
      nouns: ["table", "long table", "board"],
      description: "The long table, buried under the meal and scrubbed pale beneath it. The same table.",
    },
    {
      id: "maps",
      nouns: ["map", "maps", "chart", "charts"],
      description: "No map in the house. The roads are new enough that everyone still trusts them.",
    },
    {
      id: "fire",
      nouns: ["fire", "hearth", "flame", "flames", "fireplace"],
      description: "The fire is banked high and roaring, fed like there is no winter coming.",
    },
    {
      id: "beams",
      nouns: ["beams", "beam", "rafters", "ceiling"],
      description: "Black beams, smoke-cured, older than the trade they were cut for. The same beams.",
    },
    {
      id: "stair",
      nouns: ["stair", "stairs", "steps", "staircase"],
      description: "The stair climbs into noise, every room above it let and loud.",
    },
    {
      id: "road",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "The road the two men argue over is the one outside, a thousand years laid and not tired yet.",
    },
  ],
};
