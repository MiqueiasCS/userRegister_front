import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Form = styled.form`
  display: flex;
  width: 400px;

  flex-direction: column;

  div {
    margin: 20px 0px;
    text-align: left;

    input {
      padding: 20px;
      border: none;
      border-radius: 7px;
      width: 100%;

      border: 2px solid;

      :focus {
        border: 2px solid #41b57d;
      }
    }
  }

  button {
    padding: 20px 0px;
    background-color: #41b57d;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;

    :hover {
      filter: brightness(0.9);
      transition: 0.3s;
    }
  }

  .text-error {
    font-size: 12px;
    color: red;
  }
`;
