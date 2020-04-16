import styled from "styled-components";

import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background-color: #7d40e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 425px;
  max-width: 360px;
  text-align: center;
  background-color: #fff;
  border-radius: 4px;

  img {
    padding: 50px 15px 0px 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      display: flex;
      font-weight: bold;
      margin: 0 0 0 30px;
    }

    input {
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #999999;
      margin: 10px 30px 10px;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px 30px;
      font-weight: bold;
    }

    button {
      margin: 10px 30px 0 30px;
      height: 44px;
      background: #7d40e7;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, "#7d40e7")};
      }
    }
  }
`;
