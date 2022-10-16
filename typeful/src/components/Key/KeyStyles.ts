import styled from "styled-components";

interface Props {
  isActive?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isActive ? "#fc894d" : "#000")};
  border: ${(props) =>
    props.isActive ? "solid 1px #fc894d" : "solid 1px #000"};
  border-radius: 5px;
  height: 30px;
  min-width: 30px;
  margin: 5px;
  padding: 10px;
`;
