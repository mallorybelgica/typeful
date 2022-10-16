import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { keysPressedState, mistakesState, timerState } from "../../state/atoms";
import { Wrapper } from "./ResultsStyles";

const Results = () => {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const numKeysPressed = useRecoilValue(keysPressedState);
  const timerLength = useRecoilValue(timerState);
  const numMistakes = useRecoilValue(mistakesState);

  const getWpm = () => {
    let result = 0;
    if (timerLength < 60) {
      result = (((numKeysPressed / 5) * 60) / timerLength) * (accuracy / 100);
    } else {
      result = (numKeysPressed / 5 / (timerLength / 60)) * (accuracy / 100);
    }
    setWpm(result);
  };

  const getAccuracy = () => {
    const result = ((numKeysPressed - numMistakes) / numKeysPressed) * 100;
    setAccuracy(result);
  };

  useEffect(() => {
    getWpm();
  }, [accuracy]);

  useEffect(() => {
    getAccuracy();
  }, [timerLength]);

  return (
    <Wrapper>
      WPM: {Math.round(wpm)} - Accuracy: {Math.round(accuracy / 0.5) * 0.5}% -
      Mistakes: {numMistakes}
    </Wrapper>
  );
};
export default Results;
