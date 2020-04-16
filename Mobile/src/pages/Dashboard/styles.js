import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100px;
  margin: 20px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Welcome = styled.Text`
  color: #666666;
  font-size: 14px;
`;
export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonSair = styled(RectButton)``;

export const DeliverieHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const FiltersGroup = styled.View`
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

export const Action = styled.Text`
  padding: 5px;
  color: ${(props) => (props.active ? '#7d40e7' : '#999999')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const DeliverieList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 20},
})``;

export const Deliverie = styled.View`
  border: 0.5px solid #999;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  margin-left: 15px;
  align-self: center;
  font-size: 15px;
  color: #7d40e7;
  font-weight: bold;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-top: 15px;
  background: #f8f9fd;
`;
export const Group = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: 10px;
  color: #999999;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #444444;
  font-weight: bold;
`;

export const ActionLink = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
`;
