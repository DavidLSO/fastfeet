import styled from "styled-components";
import ReactSelect from "react-select";

export const InputStyled = styled.input`
  height: 36px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dddddd;
  color: #999999;
`;

export const SelectStyled = styled(ReactSelect)`
  padding-bottom: 15px;
`;

export const AvatarContainer = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
    }
    input {
      display: none;
    }
  }
`;
