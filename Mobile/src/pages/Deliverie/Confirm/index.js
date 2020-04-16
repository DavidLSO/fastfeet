import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

import {updateRequest} from '~/store/modules/deliverie/actions';
import api from '~/services/api';
import {
  Container,
  Camera,
  CameraButton,
  SendButton,
  TextButton,
} from '../styles';

export default function Confirm({initialProps, route}) {
  const dispatch = useDispatch();
  const [signature, setSignature] = useState(null);
  const [{cameraRef}, {takePicture}] = useCamera(initialProps);
  const {deliverie} = route.params;

  async function handleSubmit() {
    const data = new FormData();

    data.append('file', {
      name: `signature_${deliverie.id}.jpg`,
      type: 'image/jpeg',
      uri: signature.uri,
    });

    const response_file = await api.post('files', data);
    const {id} = response_file.data;

    dispatch(
      updateRequest(
        {end_date: new Date().toLocaleString(), signature_id: id},
        deliverie.id,
      ),
    );
  }

  async function handleCatch() {
    const data = await takePicture({
      quality: 0.5,
      base64: true,
      pauseAfterCapture: true,
    });

    setSignature(data);
  }

  return (
    <Container>
      <Camera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
      />

      <CameraButton onPress={handleCatch}>
        <Icon name="camera-alt" size={40} color="#fff"></Icon>
      </CameraButton>
      {signature && (
        <SendButton onPress={handleSubmit}>
          <TextButton color="#fff">Enviar</TextButton>
        </SendButton>
      )}
    </Container>
  );
}
