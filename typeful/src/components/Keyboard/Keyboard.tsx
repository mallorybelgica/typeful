import { useEffect, useState } from "react";
import Key from "../Key/Key";
import { upperCaseKeys, lowerCaseKeys } from "../../data/data";
import { KeyboardRow, Wrapper } from "./KeyboardStyles";

const Keyboard = () => {
  const [isUpperCase, setIsUppercase] = useState(false);
  const keys = isUpperCase ? upperCaseKeys : lowerCaseKeys;

  const firstRow = keys.slice(0, 14).map((key) => key);
  const secondRow = keys.slice(14, 28).map((key) => key);
  const thirdRow = keys.slice(28, 41).map((key) => key);
  const fourthRow = keys.slice(41, 52).map((key) => key);

  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.shiftKey && !ev.getModifierState("CapsLock")) {
      setIsUppercase(true);
    } else if (ev.shiftKey && ev.getModifierState("CapsLock")) {
      setIsUppercase(false);
    } else if (!ev.shiftKey && !ev.getModifierState("CapsLock")) {
      setIsUppercase(false);
    } else if (!ev.shiftKey && ev.getModifierState("CapsLock")) {
      setIsUppercase(true);
    }
  };

  const handleKeyUp = (ev: KeyboardEvent) => {
    if (ev.shiftKey && !ev.getModifierState("CapsLock")) {
      setIsUppercase(true);
    } else if (ev.shiftKey && ev.getModifierState("CapsLock")) {
      setIsUppercase(false);
    } else if (!ev.shiftKey && !ev.getModifierState("CapsLock")) {
      setIsUppercase(false);
    } else if (!ev.shiftKey && ev.getModifierState("CapsLock")) {
      setIsUppercase(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <Wrapper>
      <KeyboardRow>
        {firstRow.map((key, index) => (
          <Key keyItem={key} key={index} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {secondRow.map((key, index) => (
          <Key keyItem={key} key={index} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {thirdRow.map((key, index) => (
          <Key keyItem={key} key={index} />
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {fourthRow.map((key, index) => (
          <Key keyItem={key} key={index} />
        ))}
      </KeyboardRow>
    </Wrapper>
  );
};

export default Keyboard;
