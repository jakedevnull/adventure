import type { Room } from "../types.ts";

// Crossroads Yard, 1099 BA — the Long Noon.
// The same ground a thousand years on, fat with traffic. The milestone is out
// there at the centre of the crossing and nobody walks over to it, because there
// is no reason to look at a stone you have passed all your life. The carter is
// that fact in a person: he has gone by it since he was a boy and could not tell
// you what it says. The best wine and the worst maps, as the bible has it.
// All text here answers to design/WRITING-GUIDE.md.

export const crossroadsYard1099Ba: Room = {
  id: "crossroads-yard:1099-ba",
  place: "crossroads-yard",
  title: "Crossroads Yard",
  landing: "1099 BA",
  age: "the Long Noon",
  look:
    "The yard is full of carts waiting their turn at the crossing, wine going west and " +
    "wool going east. The well has a windlass on it now, brass, better than a well " +
    "needs. A carter sits on the gate with a map open on his knee, in no hurry about " +
    "any of it.\n" +
    "The inn door stands open behind you and the noise goes both ways through it.",
  lookAgain:
    "The yard, the carts, and the brass windlass on the well. The carter is still on " +
    "the gate with his map.",
  time: {
    past: true,
    future: true,
  },
  items: [
    {
      id: "carter-map",
      nouns: ["map", "chart", "leaves"],
      description: "A folding map in four leaves, worn soft at the crossing and not at the edges.",
      takeable: false,
      takeRefusal: "It is his map, and he is using it in a manner of speaking.",
      read:
        "THE ROADS FROM THE HIGH CROSSING, WITH THEIR DISTANCES. The river is on it " +
        "twice, in two places, and the carter has been going by the second one.",
      start: "room",
    },
  ],
  scenery: [
    {
      id: "carter",
      nouns: ["carter", "man", "driver", "him"],
      description: "He has come this way since he was a boy and has never once had reason to stop.",
      talk:
        "\"That old stone in the middle of the crossing?\" he says. \"It's been there. " +
        "My father went past it and I go past it. Nobody has ever said it wanted " +
        "anything.\"",
    },
    {
      id: "well-1099-ba",
      nouns: ["well", "windlass", "brass", "rope", "bucket", "water", "wellhead"],
      description:
        "The drystone head is the one that was always here, under a brass windlass that cost more than the water.",
    },
    {
      id: "carts-1099-ba",
      nouns: ["carts", "cart", "wagons", "traffic", "wine", "wool", "queue"],
      description: "Two dozen nose to tail, with the drivers arguing about precedence rather than about the road.",
    },
    {
      id: "yard-roads-1099-ba",
      nouns: ["road", "roads", "crossing", "crossroads", "high road", "high roads", "paving"],
      description: "Carrying more than they were built for, and not showing it.",
    },
    {
      id: "gate-1099-ba",
      nouns: ["gate", "fence", "rail"],
      description: "A field gate the yard borrowed, and now the best seat at the crossing.",
    },
    {
      id: "milestone-1099-ba",
      nouns: ["milestone", "stone", "marker"],
      description:
        "Out at the centre of the crossing with letters down it, and everyone here has passed it since they could walk.",
    },
    {
      id: "yard-door-1099-ba",
      nouns: ["door", "doorway", "inn", "house", "turning house"],
      description: "Open, with the noise of the common room coming out of it and some of the light.",
    },
  ],
  exits: {
    in: "turning-house:1099-ba",
  },
};
