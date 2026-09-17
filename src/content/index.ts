import type { World } from "../types.ts";
import { turningHouse } from "./turning-house.ts";
import { turningHouse1099Ba } from "./turning-house-1099-ba.ts";
import { turningHouse99Ba } from "./turning-house-99-ba.ts";
import { turningHouse99Aa } from "./turning-house-99-aa.ts";
import { turningHouse1099Aa } from "./turning-house-1099-aa.ts";
import { turningHouse2099Aa } from "./turning-house-2099-aa.ts";
import { crossroadsYard2099Ba } from "./crossroads-yard-2099-ba.ts";
import { highCrossing2099Ba } from "./high-crossing-2099-ba.ts";
import { eastRoad2099Ba } from "./east-road-2099-ba.ts";
import { ford2099Ba } from "./ford-2099-ba.ts";
import { crossroadsYard1099Ba } from "./crossroads-yard-1099-ba.ts";
import { ford1099Ba } from "./ford-1099-ba.ts";
import { crossroadsYard99Ba } from "./crossroads-yard-99-ba.ts";
import { ford99Ba } from "./ford-99-ba.ts";
import { crossroadsYard99Aa } from "./crossroads-yard-99-aa.ts";
import { ford99Aa } from "./ford-99-aa.ts";
import { eastRoad99Aa } from "./east-road-99-aa.ts";
import { highCrossing99Aa } from "./high-crossing-99-aa.ts";
import { crossroadsYard1099Aa } from "./crossroads-yard-1099-aa.ts";
import { crossroadsYard2099Aa } from "./crossroads-yard-2099-aa.ts";

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
    turningHouse1099Ba,
    turningHouse99Ba,
    turningHouse99Aa,
    turningHouse1099Aa,
    turningHouse2099Aa,
    crossroadsYard2099Ba,
    highCrossing2099Ba,
    eastRoad2099Ba,
    ford2099Ba,
    crossroadsYard1099Ba,
    ford1099Ba,
    crossroadsYard99Ba,
    ford99Ba,
    crossroadsYard99Aa,
    highCrossing99Aa,
    eastRoad99Aa,
    ford99Aa,
    crossroadsYard1099Aa,
    crossroadsYard2099Aa,
  ],
};
