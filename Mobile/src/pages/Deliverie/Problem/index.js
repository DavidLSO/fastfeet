import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {createRequest} from '~/store/modules/problems/actions';
import {Container, TextButton, SendButton, Input} from '../styles';

export default function Problem({route, navigation}) {
  const dispatch = useDispatch();
  const [problemText, setProblemText] = useState('');
  const {deliverie} = route.params;

  function handleSubmit() {
    dispatch(createRequest(deliverie.id, problemText));
  }

  return (
    <Container>
      <Input
        multiline
        numberOfLines={10}
        placeholder="Inclua aqui o problema que ocorreu na entrega"
        value={problemText}
        onChangeText={(text) => setProblemText(text)}
      />
      <SendButton onPress={handleSubmit}>
        <TextButton color="#fff">Enviar</TextButton>
      </SendButton>
    </Container>
  );
}
