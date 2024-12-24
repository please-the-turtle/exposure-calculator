import * as themes from "../components/ThemeProvider/themes";

import ev3 from "./icons/ev/3.svg";
import ev4 from "./icons/ev/4.svg";
import ev5 from "./icons/ev/5.svg";
import ev6 from "./icons/ev/6.svg";
import ev7 from "./icons/ev/7.svg";
import ev8 from "./icons/ev/8.svg";
import ev9 from "./icons/ev/9.svg";
import ev10 from "./icons/ev/10.svg";
import ev11 from "./icons/ev/11.svg";
import ev12 from "./icons/ev/12.svg";
import ev13 from "./icons/ev/13.svg";
import ev14 from "./icons/ev/14.svg";
import ev15 from "./icons/ev/15.svg";
import ev16 from "./icons/ev/16.svg";

export const evItems = [
  {
    icon: ev3,
    value: 3,
    title: "3",
    description: "Streetlights Fireworks",
    theme: themes.darkCold,
  },
  {
    icon: ev4,
    value: 4,
    title: "4",
    description: "Floodlit buildings, Bright streetlights",
    theme: themes.darkCold,
  },
  {
    icon: ev5,
    value: 5,
    title: "5",
    description: "Average home night interior",
    theme: themes.darkWarm,
  },
  {
    icon: ev6,
    value: 6,
    title: "6",
    description: "Bright night interior, Shady day interior",
    theme: themes.darkWarm,
  },
  {
    icon: ev7,
    value: 7,
    title: "7",
    description: "Indoor sports, Stage shows",
    theme: themes.darkWarm,
  },
  {
    icon: ev8,
    value: 8,
    title: "8",
    description: "Floodlit stadium, Bright day interior",
    theme: themes.darkWarm,
  },
  {
    icon: ev9,
    value: 9,
    title: "9",
    description: "Neon lights, Spot-lit subjects",
    theme: themes.darkWarm,
  },
  {
    icon: ev10,
    value: 10,
    title: "10",
    description: "Immediately after sunset",
    theme: themes.darkWarm,
  },
  {
    icon: ev11,
    value: 11,
    title: "11",
    description: "Open shade Sunsets",
    theme: themes.darkWarm,
  },
  {
    icon: ev12,
    value: 12,
    title: "12",
    description: "Heavily overcast day",
    theme: themes.lightWarm,
  },
  {
    icon: ev13,
    value: 13,
    title: "13",
    description: "Bright cloudy day (no shadows)",
    theme: themes.lightWarm,
  },
  {
    icon: ev14,
    value: "14",
    title: "14",
    description: "Hazy sunshine (soft shadows)",
    theme: themes.lightWarm,
  },
  {
    icon: ev15,
    value: "15",
    title: "15",
    description: "Bright sunny day (hard shadows)",
    theme: themes.lightCold,
  },
  {
    icon: ev16,
    value: "16",
    title: "16",
    description: "Bright sun on sand or snow",
    theme: themes.lightCold,
  },
];

export const isoItems = [
  { value: 25, title: "25" },
  { value: 50, title: "50" },
  { value: 100, title: "100" },
  { value: 200, title: "200" },
  { value: 400, title: "400" },
  { value: 800, title: "800" },
];

export const apertureItems = [
  { value: 2.8, title: "f/2.8" },
  { value: 4, title: "f/4" },
  { value: 5.6, title: "f/5.6" },
  { value: 8, title: "f/8" },
  { value: 11, title: "f/11" },
  { value: 16, title: "f/16" },
  { value: 22, title: "f/22" },
];

export const shutterSpeedItems = [
  { title: "1/1000", value: 1 / 1000 },
  { title: "1/500", value: 1 / 500 },
  { title: "1/250", value: 1 / 250 },
  { title: "1/125", value: 1 / 125 },
  { title: "1/60", value: 1 / 60 },
  { title: "1/30", value: 1 / 30 },
  { title: "1/15", value: 1 / 15 },
  { title: "1/8", value: 1 / 8 },
  { title: "1/2", value: 1 / 2 },
  { title: "1", value: 1 },
  { title: "2", value: 2 },
];
