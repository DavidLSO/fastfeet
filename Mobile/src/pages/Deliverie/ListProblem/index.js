import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {format, parseISO} from 'date-fns';

import {getRequest} from '~/store/modules/problems/actions';
import {Container, List, Problem, Label, Text, TitleProblem} from '../styles';

export default function ListProblem({route, navigation}) {
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.problems.problems);
  const {deliverie} = route.params;

  useEffect(() => {
    dispatch(getRequest(deliverie.id));
  }, []);

  return (
    <Container>
      <TitleProblem>{deliverie.product}</TitleProblem>
      <List
        data={problems}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <Problem>
            <Text>{item.description}</Text>
            <Label>{format(parseISO(item.createdAt), 'dd/MM/yyyy')}</Label>
          </Problem>
        )}
      />
    </Container>
  );
}
