import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, HeaderContainer, List } from "./styles";
import { getRequest } from "~/store/modules/problems/actions";
import Actions from "./Actions";

export default function Problems() {
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.problems.problems);

  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);

  return (
    <Container>
      <HeaderContainer>
        <h3>Problemas na entrega</h3>
      </HeaderContainer>
      <List>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th width="5%">Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>#{problem.delivery_id}</td>
              <td>{problem.description}</td>
              <td>
                <Actions problem={problem} />
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
