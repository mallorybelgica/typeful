import { atom } from "recoil";

export const timerState = atom({
  key: "timerLength",
  default: 0,
});

export const textState = atom({
  key: "text",
  default: "",
});

export const keysPressedState = atom({
  key: "numKeysPressed",
  default: 0,
});

export const mistakesState = atom({
  key: "numMistakes",
  default: 0,
});
