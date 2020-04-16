import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background: #fff;
  width: 100%;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid #eee;
      height: 25px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  color: #999999;
  margin-right: 15px;
  border-color: #707070;

  &.active {
    color: #444444;
    font-weight: bold;
  }
`;

export const Profile = styled.div`
  display: block;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }
  }
  a {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: #de3b3b;
    cursor: pointer;
  }
`;
