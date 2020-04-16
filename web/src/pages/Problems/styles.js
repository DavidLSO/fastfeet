import styled from "styled-components";

export const Container = styled.div`
  margin: 5%;
  width: 100%;
  min-height: 100vh;
`;

export const HeaderContainer = styled.header`
  max-width: 1200px;
  margin: 0px auto 2% auto;

  h3 {
    display: block;
    margin-bottom: 25px;
  }
`;

export const List = styled.table`
  width: 100%;
  max-width: 1200px;
  border-collapse: separate;
  border-spacing: 0 10px;
  margin: 0px auto;

  thead th {
    background-color: #f5f5f5;
    text-align: left;
  }
  tr {
    background-color: #fff;
    height: 57px;
    padding-bottom: 15px;

    td {
      text-align: left;
      border: 0;
      padding-left: 10px;

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;
