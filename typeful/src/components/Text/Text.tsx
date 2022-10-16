import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { texts } from "../../data/data";
import {
  keysPressedState,
  mistakesState,
  textState,
  timerState,
} from "../../state/atoms";
import { CurrentCharacter, Wrapper } from "./TextStyles";

const Text = () => {
  const [text, setText] = useRecoilState(textState);
  const [numChar, setNumChar] = useState(0);
  const [isMistake, setIsMistake] = useState(false);
  const [numKeysPressed, setNumKeysPressed] = useRecoilState(keysPressedState);
  const [numMistakes, setNumMistakes] = useRecoilState(mistakesState);
  const [timerLength, setTimerLength] = useRecoilState(timerState);
  const excludedKeys = [
    "Shift",
    "CapsLock",
    "Meta",
    "Tab",
    "Backspace",
    "Enter",
    "Control",
  ];

  let startTime = 0;

  const startTimer = () => {
    startTime = performance.now();
  };

  const endTimer = () => {
    const endTime = performance.now();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;

    const seconds = Math.round(timeDiff);

    setTimerLength(seconds);
  };

  const handleTextCheck = (ev: KeyboardEvent) => {
    if (!excludedKeys.includes(ev.key) && ev.key) {
      setNumKeysPressed(numKeysPressed + 1);
    }

    if (!excludedKeys.includes(ev.key)) {
      if (ev.key === text[numChar]) {
        setIsMistake(false);
        setNumChar(numChar + 1);
      }
      if (ev.key !== text[numChar]) {
        setIsMistake(true);
        setNumMistakes(numMistakes + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleTextCheck);

    return () => {
      window.removeEventListener("keydown", handleTextCheck);
    };
  });

  useEffect(() => {
    if (numChar === 1) {
      startTimer();
    }
    if (numChar === text.length) {
      endTimer();
    }
  }, [numChar]);

  useEffect(() => {
    setNumChar(0);
    setNumKeysPressed(0);
    setNumMistakes(0);
    setTimerLength(0);
  }, [text]);

  useEffect(() => {
    const text = texts[Math.floor(Math.random() * texts.length)];
    setText(text);
  }, []);

  return (
    <Wrapper>
      <span>{text.slice(0, numChar)}</span>
      <CurrentCharacter isMistake={isMistake}>
        {text[numChar] !== " " ? text[numChar] : "\u00A0"}
      </CurrentCharacter>
      <span>{text.slice(numChar + 1, text.length)}</span>
    </Wrapper>
  );
};

export default Text;
