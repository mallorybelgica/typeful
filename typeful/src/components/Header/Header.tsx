import { Wrapper, Title, ButtonsWrapper, Button } from "./HeaderStyles";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useRecoilState, useRecoilValue } from "recoil";
import Results from "../Results/Results";
import { textState, timerState } from "../../state/atoms";
import { texts } from "../../data/data";

const Header = () => {
  const [text, setText] = useRecoilState(textState);
  const timerLength = useRecoilValue(timerState);
  const textIndex = texts.indexOf(text);

  const prev = () => {
    const index = texts.indexOf(text);

    if (index === 0) {
      setText(texts[0]);
    } else {
      const newText = texts[index - 1];
      setText(newText);
    }
  };

  const next = () => {
    if (textIndex === texts.length - 1) {
      setText(texts[0]);
    } else {
      setText(texts[textIndex + 1]);
    }
  };

  return (
    <Wrapper>
      <Title>typeful</Title>
      {timerLength > 0 && <Results />}
      <ButtonsWrapper>
        <Button onClick={prev}>
          <KeyboardDoubleArrowLeftIcon />
          prev
        </Button>
        <Button onClick={next}>
          next
          <KeyboardDoubleArrowRightIcon />
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Header;
