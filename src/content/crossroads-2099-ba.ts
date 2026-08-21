import type { Room } from "../types.ts";

// The crossroads, 2099 BA — the High Masonry.
// The inn-yard where the tour steps out on foot, and the one place in this story
// shown only in a single era. The High Roads state the persistence note in stone
// before the player ever touches the years. All text answers to design/WRITING-GUIDE.md.

export const crossroads2099Ba: Room = {
  id: "crossroads:2099-ba",
  place: "crossroads",
  title: "The Crossroads",
  landing: "2099 BA",
  age: "the High Masonry",
  look:
    "You stand in the inn-yard where four roads meet, the House at your back and the " +
    "night ahead. The High Roads are new-cut, the stone still sharp at the kerb, and " +
    "already laid to outlast everyone who will ever walk them. A milestone leans where " +
    "the ways cross, and warm light shows under the inn door behind you.",
  lookAgain:
    "The crossroads, four roads and a leaning milestone. The inn door at your back, " +
    "a line of warm light under it.",
  time: {
    // The yard is a foot excursion, not a time step. The years run from inside the
    // House, not from the open road; the parser declines them here in voice.
    past: false,
    future: false,
  },
  items: [],
  scenery: [
    {
      id: "roads",
      nouns: ["road", "roads", "high road", "high roads", "crossroads", "ways", "way"],
      description: "Cut this year, and meant for a thousand. Already they do not need you.",
    },
    {
      id: "milestone",
      nouns: ["milestone", "stone", "marker", "waymark"],
      description: "The milestone is cut with distances to towns that are not built yet.",
    },
    {
      id: "house",
      nouns: ["house", "inn", "turning house", "yard", "inn-yard"],
      description: "The House squats low over the crossing, older than the roads it watches.",
    },
    {
      id: "door",
      nouns: ["door"],
      description: "The inn door, its bar drawn back. Warm light, and the fire beyond.",
    },
    {
      id: "night",
      nouns: ["night", "dark", "sky", "stars"],
      description: "A clear cold night over open country. The roads run out into it and do not stop.",
    },
  ],
  exits: {
    // Back through the door into the common room. The tour returns the way it came.
    in: "turning-house",
  },
};
