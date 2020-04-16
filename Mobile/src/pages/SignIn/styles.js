import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #7159c1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 325px;
  height: 191px;
`;

export const Logo = styled.Image`
  width: 244px;
  height: 48px;
`;

export const InputForm = styled.TextInput`
  margin-top: 15px;
  width: 100%;
  height: 46px;
  background: #fff;
  border-radius: 4px;
`;

export const Button = styled(RectButton)`
  margin-top: 15px;
  background: #82bf18;
  height: 45px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
