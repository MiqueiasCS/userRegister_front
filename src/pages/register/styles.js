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
    margin: 8px 0px;
    text-align: left;

    input {
      padding: 8px;
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
    padding: 10px 0px;
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

  .cep {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      margin: 8px 0px;
      text-align: left;
      display: flex;
      flex-direction: column;

      input {
        padding: 8px;
        border: none;
        border-radius: 7px;
        width: 80%;

        border: 2px solid;

        :focus {
          border: 2px solid #41b57d;
        }
      }
    }
    > button {
      padding: 10px 0px;
      background-color: #41b57d;
      border: none;
      border-radius: 10px;
      text-transform: uppercase;
      color: #fff;
      font-weight: bold;
      font-size: 10px;
      width: 40px;
      height: 40px;
      margin-top: 17px;

      :hover {
        filter: brightness(0.9);
        transition: 0.3s;
      }
    }
  }

  .address {
      display: flex;
      justify-content:center;
      
    input {
      padding: 8px;
      border: none;
      border-radius: 5px;
      width: 80%;

      border: 1px solid;

      :focus {
        border: 2px solid #41b57d;
      }
    }
  }

  .number{
    input {
      padding: 8px;
      border: none;
      border-radius: 5px;
      width: 100px;

      border: 1px solid;
  }
`;
