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
    props.isActive ? "solid 2px #fc894d" : "solid 1px #000"};
  border-radius: 5px;
  height: 30px;
  min-width: 30px;
  margin: 5px;
  padding: 10px;
  @media (max-width: 480px) {
    font-size: 12px;
    height: 20px;
    width: 15px;
    min-width: 10px;
    margin: 2.5px;
    padding: 2.5px;
  }
`;
