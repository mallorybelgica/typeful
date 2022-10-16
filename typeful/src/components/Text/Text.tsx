import { useEffect, useState } from "react";
import { texts } from "../../data/data";
import { CurrentCharacter, Wrapper } from "./TextStyles";

const Text = () => {
  const [text, setText] = useState("");
  const [numChar, setNumChar] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  const handleTextCheck = (ev: KeyboardEvent) => {
    if (ev.key === texts[0][numChar]) {
      setNumChar(numChar + 1);
    }
    if (ev.key !== texts[0][numChar]) {
      setMistakes(mistakes + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleTextCheck);

    return () => {
      window.removeEventListener("keydown", handleTextCheck);
    };
  });

  useEffect(() => {
    const text = texts[Math.floor(Math.random() * texts.length)];
    setText(text);
  }, []);

  return (
    <Wrapper>
      <span>{text.slice(0, numChar)}</span>
      <CurrentCharacter>
        {text[numChar] !== " " ? text[numChar] : "\u00A0"}
      </CurrentCharacter>
      <span>{text.slice(numChar + 1, text.length)}</span>
    </Wrapper>
  );
};

export default Text;
