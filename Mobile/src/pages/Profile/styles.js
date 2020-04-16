import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

export const Group = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: #666666;
  font-size: 12px;
`;

export const Text = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const LogoutButton = styled(RectButton)`
  height: 40px;
  margin-top: 20px;
  background: #e74040;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
