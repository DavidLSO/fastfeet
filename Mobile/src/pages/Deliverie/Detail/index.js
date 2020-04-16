import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';
import {
  Container,
  Info,
  Header,
  Title,
  Group,
  Label,
  Text,
  Row,
  Actions,
  ActionButton,
  TextButton,
  Division,
} from '../styles';

export default function Detail({route, navigation}) {
  const {deliverie} = route.params;

  function handleCreateProblem() {
    navigation.navigate('Deliverie', {screen: 'Problem', params: {deliverie}});
  }

  function handleListProblem() {
    navigation.navigate('Deliverie', {
      screen: 'ListProblem',
      params: {deliverie},
    });
  }

  function handleConfirm() {
    navigation.navigate('Deliverie', {screen: 'Confirm', params: {deliverie}});
  }

  function handleStatus() {
    if (deliverie.end_date !== null) {
      return 'ENTREGUE';
    } else if (
      deliverie.end_date === null &&
      deliverie.start_date === null &&
      deliverie.canceled_at === null
    ) {
      return 'PENDENTE';
    } else if (deliverie.start_date !== null) {
      return 'RETIRADA';
    } else {
      return 'CANCELADA';
    }
  }

  return (
    <Container>
      <Info>
        <Header>
          <Icon name="local-shipping" size={30} color="#7D40E7" />
          <Title> Informações da entrega</Title>
        </Header>
        <Group>
          <Label>DESTINATÁRIO</Label>
          <Text>{deliverie.recipient.name}</Text>
        </Group>
        <Group>
          <Label>ENDEREÇO DE ENTREGA</Label>
          <Text>{`${deliverie.recipient.street}, ${deliverie.recipient.number}, ${deliverie.recipient.city} - ${deliverie.recipient.state}, ${deliverie.recipient.zip_code}`}</Text>
        </Group>
        <Group>
          <Label>PRODUTO</Label>
          <Text>{deliverie.product}</Text>
        </Group>
      </Info>
      <Info>
        <Header>
          <Icon name="event" size={30} color="#7D40E7" />
          <Title>Situação da entrega</Title>
        </Header>
        <Group>
          <Label>STATUS</Label>
          <Text>{handleStatus()}</Text>
        </Group>
        <Row>
          <Group>
            <Label>DATA DE RETIRADA</Label>
            <Text>
              {deliverie.start_date
                ? format(parseISO(deliverie.start_date), 'dd/MM/yyyy')
                : '--/--/--'}
            </Text>
          </Group>
          <Group>
            <Label>DATA DE ENTREGA</Label>
            <Text>
              {deliverie.end_date
                ? format(parseISO(deliverie.end_date), 'dd/MM/yyyy')
                : '--/--/--'}
            </Text>
          </Group>
        </Row>
      </Info>
      <Actions>
        <ActionButton onPress={handleCreateProblem}>
          <Icon name="highlight-off" size={30} color="#E74040" />
          <TextButton>Informar Problemas</TextButton>
        </ActionButton>
        <Division />
        <ActionButton onPress={handleListProblem}>
          <Icon name="info-outline" size={30} color="#E7BA40" />
          <TextButton>Visualizar Problemas</TextButton>
        </ActionButton>
        <Division />
        <ActionButton onPress={handleConfirm}>
          <Icon name="offline-pin" size={30} color="#7D40E7" />
          <TextButton>Confirmar Entrega</TextButton>
        </ActionButton>
      </Actions>
    </Container>
  );
}
