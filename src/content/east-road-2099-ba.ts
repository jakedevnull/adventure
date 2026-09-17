import type { Room } from "../types.ts";

// East Road, 2099 BA — the High Masonry.
// The mile between the ninth stone and the eighth, and the only reason the
// player ever feels that it is a mile. The road is a week or two old, the spoil
// from the cutting is still on the verge, and the land has started to fall
// toward water that is heard well before it is seen.
//
// The years do not run here, for the same reason they do not run at the
// crossing: this is road, and the loose ground is the House, its dooryard and
// the riverbank. Both sides closed, so the engine prints no time line and there
// is nothing to explain away.
// All text here answers to design/WRITING-GUIDE.md.

export const eastRoad2099Ba: Room = {
  id: "east-road:2099-ba",
  place: "east-road",
  title: "East Road",
  landing: "2099 BA",
  age: "the High Masonry",
  look:
    "You are on a mile of road laid this season, with the spoil from the cutting still " +
    "heaped along the verge and the crossing a half mile back west. The land tilts down " +
    "ahead of you and the paving goes down with it, east. There is nobody on it in " +
    "either direction.\n" +
    "From somewhere past the bottom of the fall you can hear water.",
  lookAgain:
    "The new road with its spoil along the verge, the crossing back west and the fall " +
    "away east. The water is still going down there.",
  time: {
    // Road, not loose ground, exactly as the two high-crossing faces are.
    past: false,
    future: false,
  },
  items: [],
  scenery: [
    {
      id: "east-road-paving-2099-ba",
      nouns: ["road", "roads", "paving", "high road", "high roads", "east road", "surface"],
      description: "Laid this season, with the joints still pale where nothing has walked them shut.",
    },
    {
      id: "east-road-spoil-2099-ba",
      nouns: ["spoil", "heap", "heaps", "earth", "soil", "verge", "rubble"],
      description: "The waste out of the cutting, heaped the length of the verge and not grassed yet.",
    },
    {
      id: "east-road-fall-2099-ba",
      nouns: ["land", "fall", "slope", "ground", "hill", "valley"],
      description:
        "The ground gives up forty feet between here and the water, which is why this mile is cut and not laid.",
    },
    {
      id: "east-road-water-2099-ba",
      nouns: ["water", "river", "sound", "noise", "ford"],
      description: "A steady noise from past the bottom of the fall, with nothing in sight to put it to.",
    },
    {
      id: "east-road-crossing-2099-ba",
      nouns: ["crossing", "crossroads", "milestone", "stone", "house", "inn", "turning house", "lamp"],
      description: "A half mile back west, with the mason's lamp still going at the middle of it.",
    },
  ],
  exits: {
    west: "high-crossing:2099-ba",
  },
};
