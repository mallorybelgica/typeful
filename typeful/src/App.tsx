import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Keyboard from "./components/Keyboard/Keyboard";
import Text from "./components/Text/Text";

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <Header />
        <Text />
        <Keyboard />
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
