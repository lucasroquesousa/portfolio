import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 350px;
  background: rgb(8, 26, 137, 8);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .logo {
    max-width: 250px;
  }
  .ul-header {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    padding: 10px;
    .li-header {
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      cursor: pointer;
      :hover {
        color: rgb(26, 243, 140);
        transition: 0.5s;
      }
    }
  }
`;
