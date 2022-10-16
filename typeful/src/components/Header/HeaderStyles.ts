import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  text-decoration-line: underline;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const Button = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;
