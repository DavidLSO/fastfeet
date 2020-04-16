import styled from "styled-components";

import { Form } from "@unform/web";

export const Container = styled.div`
  margin: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cccccc;
    width: 112px;
    height: 36px;
    color: #fff;
    border-radius: 4px;
    font-weight: bold;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7d40e7;
    width: 112px;
    height: 36px;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
  }
`;

export const FormContainer = styled(Form)`
  width: 70%;
`;

export const PainelForm = styled.div`
  background-color: #fff;
  border-radius: 4px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  padding: 15px;

  label {
    color: #444444;
    font-weight: bold;
    padding-bottom: 5px;
  }
`;
