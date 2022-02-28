import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #99e4c0;
`;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  width: 100%;

  .menu-navegacao {
    display: flex;
    justify-content: space-between;
    width: 440px;
    align-items: center;

    nav ul {
      display: flex;
      justify-content: space-around;
      width: 440px;

      li {
        cursor: pointer;
        color: black;
        font-weight: 500;
        font-size: 18px;

        :hover {
          color: #41b57d;
          transition: 0.5s;
        }
      }
    }
  }
`;
