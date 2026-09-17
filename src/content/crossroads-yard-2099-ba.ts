import type { Room } from "../types.ts";

// Crossroads Yard, 2099 BA — the High Masonry.
// The door the landlady unbarred opens onto this. The yard is the other half of
// what the family keeps: the House watches the crossing, and this is the crossing.
// The cold is the same cold the fire inside was arguing with, which is a fact and
// not a mood. East along the road a man is cutting a stone; the narrator does not
// say what is on it, because from here you cannot read it.
// All text here answers to design/WRITING-GUIDE.md.

export const crossroadsYard2099Ba: Room = {
  id: "crossroads-yard:2099-ba",
  place: "crossroads-yard",
  title: "Crossroads Yard",
  landing: "2099 BA",
  age: "the High Masonry",
  look:
    "You stand in the House's dooryard, at the corner where two high roads cross, in " +
    "the cold the fire inside was keeping off. The roads are new-laid and carrying carts " +
    "at an hour when roads should be empty. A well stands against the House's east wall " +
    "with a rope on it, and the door behind you is open.\n" +
    "East along the road, someone is working by lamplight.",
  lookAgain:
    "The dooryard at the corner of the crossing, the well against the east wall, and " +
    "the door open behind you. East along the road, the light is still going.",
  time: {
    // The oldest landing: nothing behind it. The years run from the yard exactly
    // as they run from the House, which is the point of the place.
    past: false,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "well-2099-ba",
      nouns: ["well", "wellhead", "rope", "bucket", "water"],
      description:
        "Drystone laid without mortar, open to the sky, with a rope on it and cold water at the end of the rope.",
    },
    {
      id: "yard-roads-2099-ba",
      nouns: ["road", "roads", "crossing", "crossroads", "high road", "high roads", "paving"],
      description: "New-laid, wide enough for two carts to pass, and cut through whatever was in the way.",
    },
    {
      id: "carts-2099-ba",
      nouns: ["carts", "cart", "wagons", "traffic", "drivers", "driver"],
      description: "Loaded both ways and moving, with nobody stopping at an inn this late.",
    },
    {
      id: "yard-door-2099-ba",
      nouns: ["door", "doorway"],
      description: "Stout, unbarred tonight, and standing open on the firelight.",
    },
    {
      id: "yard-house-2099-ba",
      nouns: ["house", "inn", "wall", "walls", "turning house", "stones", "drystone"],
      description: "Drystone from the ground up, with the well set against the east wall of it.",
    },
    {
      id: "yard-worker-2099-ba",
      nouns: ["lamplight", "light", "worker", "figure", "someone", "man"],
      description: "A light set down at the centre of the crossing, and somebody bent over beside it.",
    },
    {
      id: "yard-cold-2099-ba",
      nouns: ["cold", "night", "air", "weather", "sky"],
      description: "It comes off the roads rather than out of the season.",
    },
  ],
  exits: {
    in: "turning-house",
    east: "high-crossing:2099-ba",
  },
};
