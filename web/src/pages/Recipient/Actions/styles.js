import styled from "styled-components";

export const ActionList = styled.div`
  position: absolute;
  width: 150px;
  left: calc(75%);
  background: #fff;
  color: #999999;
  border-radius: 4px;
  padding: 10px 5px;
  margin-top: 10px;
  display: ${props => (props.visible ? "block" : "none")};
  border: 1px solid #707070;

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #707070;
  }

  ul {
    li {
      margin: 5px;
      border-bottom: 1px solid #eeeeee;

      a {
        color: #999999;
      }

      button {
        color: #999999;
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: inline;
        margin: 0;
        padding: 0;

        &:hover {
          text-decoration: none;
        }

        &:focus {
          text-decoration: none;
        }
      }
    }
  }
`;
