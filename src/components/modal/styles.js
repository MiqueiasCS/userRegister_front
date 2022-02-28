import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000087;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerChild = styled.div`
  background-color: #f3edec;
  width: 400px;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p.fields_labels {
    font-weight: bold;
    font-size: 16px;
  }
  button {
    padding: 12px 0px;
    background-color: #41b57d;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    width: 100px;
    margin: 10px 0;
    font-size: 16px;

    :hover {
      filter: brightness(0.9);
      transition: 0.3s;
    }
  }
`;
