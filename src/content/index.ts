import type { World } from "../types.ts";
import { turningHouse } from "./turning-house.ts";
import { turningHouse1099BA } from "./turning-house-1099-ba.ts";
import { turningHouse99BA } from "./turning-house-99-ba.ts";
import { turningHouse99AA } from "./turning-house-99-aa.ts";
import { turningHouse1099AA } from "./turning-house-1099-aa.ts";

// The assembled world. Every room in every era is registered here, and
// `landings` lists every era oldest-first — PAST and FUTURE step along it.
//
// Authoring a new room (see .claude/skills/generate-story): write it in its
// own file under src/content/, import it here, add it to `rooms`, and add its
// landing to `landings` if the era is new. Keep `landings` in chronological
// order. The engine validates the world on startup and `npm run eval:reach`
// proves every room can be reached from the start.

export const world: World = {
  start: "turning-house",
  landings: ["2099 BA", "1099 BA", "99 BA", "99 AA", "1099 AA", "2099 AA"],
  rooms: [
    turningHouse,
    turningHouse1099BA,
    turningHouse99BA,
    turningHouse99AA,
    turningHouse1099AA,
  ],
};
