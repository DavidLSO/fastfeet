import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {RNCamera} from 'react-native-camera';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
`;

export const Info = styled.View`
  border: 0.5px solid #999;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;

export const Group = styled.View`
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Actions = styled.View`
  flex-direction: row;
  background: #f8f9fd;
  border-radius: 4px;
  height: 80px;
  justify-content: space-between;
  width: 374px;
  align-self: center;
`;

export const ActionButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 1px solid #333;
  width: 110px;
`;

export const TextButton = styled.Text`
  max-width: 80px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#999999')};
`;

export const Division = styled.View`
  border: 0.5px solid #999;
`;

export const Input = styled.TextInput`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const SendButton = styled(RectButton)`
  background: #7d40e7;
  height: 45px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const TitleProblem = styled.Text`
  font-size: 18px;
  align-self: center;
  color: #7d40e7;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 20},
})``;

export const Problem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  border: 0.5px solid #999;
  height: 55px;
  border-radius: 4px;
  margin-bottom: 10px;
  align-items: center;
  padding: 10px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  width: 335px;
  height: 544px;
  margin: 70px;
  align-self: center;
`;

export const CameraButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 120px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  align-items: center;
  justify-content: center;
  align-self: center;
`;
