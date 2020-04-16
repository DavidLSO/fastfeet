import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {format, parseISO} from 'date-fns';

import {signOut} from '~/store/modules/auth/actions';
import {
  Container,
  Header,
  Avatar,
  Group,
  Label,
  Text,
  LogoutButton,
  TextButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: profile.avatar
              ? profile.avatar.url
              : `https://api.adorable.io/avatar/50/${profile.name}.png`,
          }}
        />
      </Header>
      <Group>
        <Label>Nome completo</Label>
        <Text>{profile.name}</Text>
      </Group>
      <Group>
        <Label>Email</Label>
        <Text>{profile.email}</Text>
      </Group>
      <Group>
        <Label>Data de cadastro</Label>
        <Text>{format(parseISO(profile.createdAt), 'dd/MM/yyyy')}</Text>
      </Group>
      <LogoutButton onPress={handleSignOut}>
        <TextButton>Logout</TextButton>
      </LogoutButton>
    </Container>
  );
}
