import styled, { keyframes } from "styled-components";

interface Props {
  isMistake?: boolean;
}

const blink = keyframes`
from {
    background: white
} to {
background: black
}
`;

export const Wrapper = styled.div`
  margin: 20px;
  font-size: 28px;
  letter-spacing: 2px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CurrentCharacter = styled.div<Props>`
  display: inline-block;
  animation: ${blink} 0.3s alternate infinite;
  color: ${(props) => (props.isMistake ? "red" : "#000")};
`;
