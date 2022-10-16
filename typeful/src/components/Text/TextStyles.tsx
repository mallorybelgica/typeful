import styled, { keyframes } from "styled-components";

const blink = keyframes`
from {
    background: white
} to {
background: black
}
`;

export const Wrapper = styled.div`
  margin: 20px;
  font-size: 24px;
  text-align: center;
`;

export const CurrentCharacter = styled.div`
  display: inline-block;
  animation: ${blink} 0.3s alternate infinite;
`;
