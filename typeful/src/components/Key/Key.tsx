import React, { useEffect, useState } from "react";
import { KeyType } from "../../types/types";
import { Wrapper } from "./KeyStyles";

interface KeyProps {
  keyItem: KeyType;
}

const Key = (props: KeyProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === props.keyItem.value) {
      setIsActive(true);
    }

    if (ev.key === "Tab") {
      setTimeout(function () {
        setIsActive(false);
      }, 100);
    }
  };

  const handleKeyUp = (ev: KeyboardEvent) => {
    if (ev.key === props.keyItem.value) {
      setIsActive(false);
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

  return <Wrapper isActive={isActive}>{props.keyItem.key}</Wrapper>;
};

export default Key;
