import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';

import {signOut} from '~/store/modules/auth/actions';
import api from '~/services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  ButtonSair,
  DeliverieList,
  Info,
  Welcome,
  DeliverieHeader,
  FiltersGroup,
  Action,
  Deliverie,
  Title,
  Footer,
  Group,
  Label,
  Text,
  ActionLink,
} from './styles';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [deliveries, setDeliveries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [pending, setPending] = useState(true);
  const [delivered, setDelivered] = useState(false);

  function handleFilterPending() {
    setPending(true);
    setDelivered(false);
    setSearchResults(
      deliveries.filter(
        (deliverie) =>
          deliverie.start_date === null &&
          deliverie.canceled_at === null &&
          deliverie.end_date === null,
      ),
    );
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`deliveries?deliveryman_id=${profile.id}`);

      setDeliveries(response.data);
      setSearchResults(response.data);
      handleFilterPending();
    }
    loadDeliveries();
  }, []);

  function handleFilterDelivered() {
    setPending(false);
    setDelivered(true);
    setSearchResults(
      deliveries.filter((deliverie) => deliverie.end_date !== null),
    );
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleDeliverie(deliverie) {
    navigation.navigate('Deliverie', {screen: 'Detail', params: {deliverie}});
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
        <Info>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{profile.name}</Name>
        </Info>
        <ButtonSair onPress={handleSignOut}>
          <Icon name="exit-to-app" size={30} color="#E74040" />
        </ButtonSair>
      </Header>
      <DeliverieHeader>
        <Name>Entregas</Name>
        <FiltersGroup>
          <Action active={pending} onPress={handleFilterPending}>
            Pendentes
          </Action>
          <Action active={delivered} onPress={handleFilterDelivered}>
            Entregues
          </Action>
        </FiltersGroup>
      </DeliverieHeader>
      <DeliverieList
        data={searchResults}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <Deliverie>
            <FiltersGroup>
              <Icon name="local-shipping" size={30} color="#7D40E7" />
              <Title>{item.product}</Title>
            </FiltersGroup>
            <Footer>
              <Group>
                <Label>Data</Label>
                <Text>{format(parseISO(item.createdAt), 'dd/MM/yyyy')}</Text>
              </Group>
              <Group>
                <Label>Cidade</Label>
                <Text>{item.recipient.city}</Text>
              </Group>
              <ActionLink onPress={() => handleDeliverie(item)}>
                Ver Detalhes
              </ActionLink>
            </Footer>
          </Deliverie>
        )}
      />
    </Container>
  );
}
