import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import logo from '~/assets/fastfeet-logo-light.png';

import {signInRequest} from '~/store/modules/auth/actions';
import {Container, Form, Logo, Button, Text, InputForm} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [idAccess, setIdAccess] = useState('');
  function handleAccess() {
    dispatch(signInRequest(idAccess));
  }
  return (
    <Container>
      <Form>
        <Logo source={logo} />
        <InputForm
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={handleAccess}
          value={idAccess}
          onChangeText={setIdAccess}
        />
        <Button onPress={handleAccess}>
          <Text>Entrar no sistema</Text>
        </Button>
      </Form>
    </Container>
  );
}
