import styled from "styled-components";

export const Container = styled.div`
  .card {
    padding: 10px;
    background-color: #ffc0ab;
    display: flex;
    justify-content: space-around;
    margin: 10px 0;

    > div {
      width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    button {
      padding: 10px 0px;
      background-color: #41b57d;
      border: none;
      border-radius: 10px;
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
      width: 100px;
      margin: 10px 0;
      font-size: 12px;

      :hover {
        filter: brightness(0.9);
        transition: 0.3s;
      }
    }
  }
`;
