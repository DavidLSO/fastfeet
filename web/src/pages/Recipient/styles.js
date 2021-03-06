import styled from "styled-components";
import { MdSearch } from "react-icons/md";

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

  div {
    display: flex;
    justify-content: space-between;

    input {
      width: 237px;
      height: 36px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      color: #999999;
      text-indent: 15%;

      &::placeholder {
        text-align: center;
        color: #999999;
      }
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 142px;
    height: 36px;
    border: 0;
    background-color: #7d40e7;
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
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

export const SearchIcon = styled(MdSearch)`
  float: left;
  margin-left: 10px;
  margin-top: 13px;
  position: absolute;
  z-index: 2;
`;
