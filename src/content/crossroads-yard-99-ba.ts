import type { Room } from "../types.ts";

// Crossroads Yard, 99 BA — the Hush. A fixed point (UNIVERSE.md §4).
// Inside, the House has barred its door and put its fire out. Outside is the same
// night with nothing between you and it. Nothing is explained here, because it is
// never explained anywhere; the menace is delivered as weather and the narrator
// keeps its hands in its pockets (WRITING-GUIDE Rule 5).
// The family unbarred the door for you and has barred it again behind you, which
// is a fact about the family rather than a fact about tonight.
// All text here answers to design/WRITING-GUIDE.md.

export const crossroadsYard99Ba: Room = {
  id: "crossroads-yard:99-ba",
  place: "crossroads-yard",
  title: "Crossroads Yard",
  landing: "99 BA",
  age: "the Hush",
  look:
    "You are in the yard, and both roads are empty as far as either of them goes. " +
    "There is no light in any window here, the House's included, and none out along " +
    "the roads. The bucket is down in the well and the rope coiled on the head of " +
    "it.\n" +
    "The door is shut behind you, and out on the road a bell is being rung slowly.",
  lookAgain:
    "The yard, both roads empty, and no light in any window. The bell is still going.",
  time: {
    past: true,
    future: true,
  },
  items: [],
  scenery: [
    {
      id: "yard-roads-99-ba",
      nouns: ["road", "roads", "crossing", "crossroads", "high road", "high roads", "paving"],
      description: "Four ways out of this crossing, nothing on any of them, and no night on record like it.",
    },
    {
      id: "well-99-ba",
      nouns: ["well", "bucket", "rope", "water", "wellhead"],
      description:
        "The bucket is down in it and the rope coiled on the head, which is how a well is left when nobody means to draw in the morning.",
    },
    {
      id: "yard-bell-99-ba",
      nouns: ["bell", "bells", "ringing"],
      description: "Somewhere east along the road, slow and even, and it has not changed pace since dark.",
    },
    {
      id: "yard-door-99-ba",
      nouns: ["door", "doorway", "beam", "bar", "inn", "house", "turning house"],
      description: "Shut behind you, with the beam back in its brackets and somebody's hand still on it.",
    },
    {
      id: "yard-windows-99-ba",
      nouns: ["window", "windows", "shutters", "shutter", "lights", "light"],
      description: "Shuttered from the inside, every one of them, without a line of light in any of the frames.",
    },
    {
      id: "yard-night-99-ba",
      nouns: ["night", "dark", "sky", "stars", "air", "weather", "cold"],
      description: "Clear and still, with stars enough to see an empty road by.",
    },
    {
      id: "milestone-99-ba",
      nouns: ["milestone", "stone", "marker"],
      description: "Out at the centre of the crossing where it was set, with nothing going past it either way.",
    },
  ],
  exits: {
    in: "turning-house:99-ba",
  },
};
