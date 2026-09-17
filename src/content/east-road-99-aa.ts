import type { Room } from "../types.ts";

// East Road, 99 AA — the Morning Country.
// The same mile, a drove road now, trodden into the grass by sheep that go down
// to the water and come back. It holds the line of the buried paving to within a
// foot and nothing here knows why; the narrator does not say why either. This is
// where the walk is a walk: the mile between the two stones, on foot, in an age
// that has lost the road and kept the route.
//
// Strideless in both directions, exactly as the 2099 BA face is and for the same
// reason. The forty feet of fall is the figure the High Masonry face gives, so
// the mile measures the same in both ages.
// All text here answers to design/WRITING-GUIDE.md.

export const eastRoad99Aa: Room = {
  id: "east-road:99-aa",
  place: "east-road",
  title: "East Road",
  landing: "99 AA",
  age: "the Morning Country",
  look:
    "The road east is a drovers' path trodden into the grass, and it holds the line of " +
    "the paving under it to within a foot. A hedge has grown up the whole of one side, " +
    "laid once by somebody who knew how and let go since. The ground falls away east " +
    "toward the water, and the crossing is back west over the rise.\n" +
    "Sheep have been down it this morning and nothing else has.",
  lookAgain:
    "The drovers' path and its hedge. It falls east to the water and rises west to the crossing.",
  time: {
    // Road, not loose ground, as in the High Masonry. No time line prints.
    past: false,
    future: false,
  },
  items: [],
  scenery: [
    {
      id: "east-road-path-99-aa",
      nouns: ["path", "road", "roads", "track", "grass", "paving", "drove", "high road", "high roads"],
      description: "Trodden bare down the middle and dead straight, which no drove road is unless there is something under it.",
    },
    {
      id: "east-road-hedge-99-aa",
      nouns: ["hedge", "thorn", "bushes", "blackthorn"],
      description: "Thorn, laid once by somebody who knew the work, and not touched since they stopped.",
    },
    {
      id: "east-road-sheep-99-aa",
      nouns: ["sheep", "droppings", "tracks", "flock", "marks"],
      description: "Gone down toward the water in the night and not come back up yet.",
    },
    {
      id: "east-road-fall-99-aa",
      nouns: ["land", "fall", "slope", "ground", "hill", "valley", "water", "river"],
      description: "The ground gives up forty feet between here and the river, the same forty it always gave.",
    },
    {
      id: "east-road-crossing-99-aa",
      nouns: ["crossing", "crossroads", "rise", "milestone", "stone", "village", "houses"],
      description: "Back west over the rise, where the grass keeps the shape of two roads and a stone lies in it.",
    },
  ],
  exits: {
    west: "high-crossing:99-aa",
    east: "ford:99-aa",
  },
};
