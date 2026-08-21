import type { Room } from "../types.ts";

// The Turning House, 99 AA — the Morning Country. The tour's end.
// The same common room half fallen and wholly open, across the Gap from the Hush:
// no bar on the door and no need for one, ruins nobody can read including the
// House's own — and in the window the brass lamp you carried, burning at last.
//
// The engine has no LIGHT verb and no per-room item state, so the lamp's lighting
// lives in this room's text (DESIGN.md §4.4: authored era-states, not simulated).
// The player carries the `lamp` item in; the window narrates it lit. All text
// answers to design/WRITING-GUIDE.md.

export const turningHouse99Aa: Room = {
  id: "turning-house:99-aa",
  place: "turning-house",
  title: "The Turning House",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "The same room, half fallen and wide open. A roof-beam has come down across one " +
    "corner and been left where it lies; grass stands in the threshold, and the door is " +
    "gone, bar and all, with nothing here that needs one. Words are cut in the long " +
    "table and worn past reading, the House's own and lost to the House. In the window a " +
    "brass lamp is burning, lit for someone expected back, and it is the one you carried.",
  lookAgain:
    "The common room, roofless in one corner and open to the road. The fallen beam, the " +
    "unreadable table — and the brass lamp alight in the window.",
  time: {
    // PAST carries back over the Gap to the Hush (99 BA). FUTURE is closed: no face of
    // this place is built at 1099 AA in this tour, so the tour ends here and turns home.
    past: true,
    future: false,
  },
  items: [],
  scenery: [
    {
      id: "window",
      nouns: ["window", "lamp", "brass lamp", "brass", "flame", "light"],
      description: "The lamp you carried stands in the window, flame steady, kept burning for a traveler the House still expects.",
    },
    {
      id: "beam",
      nouns: ["beam", "roof-beam", "roof beam", "rafter", "beams", "rafters"],
      description: "A black beam, down across the corner and let be. Older than the roof it held, and it has outlasted the roof.",
    },
    {
      id: "door",
      nouns: ["door", "threshold", "doorway"],
      description: "No door, no bar, grass in the sill. The House stopped needing to be shut, and left it so.",
    },
    {
      id: "table",
      nouns: ["table", "long table", "board", "words", "inscription", "writing"],
      description: "The long table, and words cut into it worn down to nothing. Not even the House can read them now. The same table.",
    },
    {
      id: "fire",
      nouns: ["fire", "hearth", "flame", "flames", "fireplace"],
      description: "A small fire in a swept hearth, kept by hands you cannot see. Someone tends this place and is not here.",
    },
    {
      id: "ruins",
      nouns: ["ruin", "ruins", "rubble", "walls", "wall", "stones", "stone"],
      description: "Drystone still standing where the roof is not. What the walls once spelled out, no one now reads.",
    },
    {
      id: "road",
      nouns: ["road", "roads", "crossroads", "high road", "high roads"],
      description: "The road runs past the open door, the same road, and it is what has lasted best of all.",
    },
  ],
};
