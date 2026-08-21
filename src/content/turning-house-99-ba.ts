import type { Room } from "../types.ts";

// The Turning House, 99 BA — the Hush.
// The same common room gone quiet: bells ringing against something no one can
// name, the benches empty, the door barred and watched, the keeper answering the
// door's silence instead of you. Same beams, long table, stair, and a low fire.
// FUTURE from here crosses the Gap clean to 99 AA. All text answers to the guide.

export const turningHouse99Ba: Room = {
  id: "turning-house:99-ba",
  place: "turning-house",
  title: "The Turning House",
  landing: "99 BA",
  age: "the Hush",
  look:
    "The common room, emptied. The benches are pushed back and no one sits at the long " +
    "table; the fire is banked low and the black beams hold the quiet up. Bells are going " +
    "somewhere out in the dark, steady, rung at something no one here will name. The door " +
    "is barred, and the landlady keeps looking at it.",
  lookAgain:
    "The common room, cold and still. An empty table, a low fire, the barred door — and " +
    "the bells going on outside.",
  time: {
    // PAST carries to the Long Noon (1099 BA). FUTURE runs forward and, because no
    // landing sits at year 0, the stride crosses the Gap clean to the Morning Country
    // (99 AA) — the next entry in World.landings. Both ways two-way for the return.
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "landlady",
      nouns: ["landlady", "woman", "keeper", "innkeeper", "her"],
      description: "This age's keeper, the family's face gone thin with listening. She has stopped pretending you are why she is up.",
      talk: "She does not look at you. \"Did you bar it behind you,\" she says, to the door.",
    },
    {
      id: "bells",
      nouns: ["bells", "bell", "ringing", "ring"],
      description: "Bells rung in no pattern you know, against something coming. Everyone hears them; no one says what.",
    },
    {
      id: "door",
      nouns: ["door"],
      description: "Barred, and barred again. The landlady has checked it twice since you came in.",
    },
    {
      id: "table",
      nouns: ["table", "long table", "board"],
      description: "The long table, scrubbed pale and empty. No one has eaten here in a while. The same table.",
    },
    {
      id: "fire",
      nouns: ["fire", "hearth", "flame", "flames", "fireplace"],
      description: "The fire is banked low, kept alive and no higher. Fuel is being saved for a winter no one has named.",
    },
    {
      id: "beams",
      nouns: ["beams", "beam", "rafters", "ceiling"],
      description: "Black beams, smoke-cured, older than the trade they were cut for. The same beams.",
    },
    {
      id: "stair",
      nouns: ["stair", "stairs", "steps", "staircase"],
      description: "The stair climbs into the dark. No boots wait outside the rooms tonight.",
    },
    {
      id: "road",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "The road is still out there under the bells, the same road, indifferent to all of it.",
    },
  ],
};
