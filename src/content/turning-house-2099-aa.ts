import type { Room } from "../types.ts";

// The Turning House, 2099 AA — the Lettered Age. The end of the tour.
//
// UNIVERSE.md §5 fixes this room's last sentence: "it is still open, still warm,
// lamps lit for someone expected to return." The someone is the player, and the
// story never says so. The room shows a window of lit lamps and one empty hook
// that fits what is in their hands, and stops.
//
// The engine has no world state, so this cannot check for the lamp. It is written
// to read straight for a player without it and to land for a player with it.
// Nothing here explains itself; if it explained itself it would not work.
// All text here answers to design/WRITING-GUIDE.md.

export const turningHouse2099Aa: Room = {
  id: "turning-house:2099-aa",
  place: "turning-house",
  title: "The Turning House",
  landing: "2099 AA",
  age: "the Lettered Age",
  look:
    "The House is open and warm and lettered now, with a case of labelled " +
    "oddments by the door and students at the long table arguing about the Lapse. The " +
    "drystone has been surveyed and left alone, there being nothing to improve.\n" +
    "The keeper does not ask your business.\n" +
    "In the front window a row of lamps burns, one to a hook, kept lit every night for " +
    "someone expected back. One hook is empty.",
  lookAgain:
    "The lettered common room, the students, and the row of lamps in the window with its " +
    "empty hook.",
  time: {
    past: true,
    future: false,
  },
  items: [
    {
      id: "case",
      nouns: ["case", "oddments", "coin", "placard", "label", "glass"],
      description: "Behind glass, a few small things from the late Before. One of them is a coin, face down.",
      takeable: false,
      takeRefusal: "The case is locked, and the House has the only key.",
      read:
        "GAMING PIECE, LATE BEFORE. Found on this site. The face-down position is thought " +
        "to indicate a forfeit.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "keeper-2099-aa",
      nouns: ["keeper", "woman", "landlady", "innkeeper", "her"],
      description:
        "She has kept this House longer than the records go back, and the records go back a long way now.",
      talk: "\"Older than the University,\" the keeper says, \"and I'll not be more exact than that.\"",
    },
    {
      id: "window-2099-aa",
      nouns: ["window", "lamps", "row", "lights"],
      description: "A row of lamps on hooks, filled at dusk and burning all night.",
    },
    {
      id: "hook",
      nouns: ["hook", "empty hook", "hooks"],
      description: "The empty one is third from the left, and has been dusted.",
    },
    {
      id: "students",
      nouns: ["students", "student", "scholars", "them"],
      description: "Four of them, and no two agree about how wide the Gap is.",
    },
    {
      id: "walls-2099-aa",
      nouns: ["walls", "wall", "drystone", "stones", "stone", "masonry"],
      description: "Drystone, surveyed twice and published once. It has not moved.",
    },
    {
      id: "hearth-2099-aa",
      nouns: ["hearth", "fire", "fireplace", "flames"],
      description: "The same hearth, and still the best seat in the room.",
    },
    {
      id: "table-2099-aa",
      nouns: ["table", "long table"],
      description: "The long table, with a century of initials under the varnish.",
    },
    {
      id: "road-2099-aa",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "The high roads are studied now. They are still the roads.",
    },
  ],
};
