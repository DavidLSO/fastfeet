import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Container,
  Avatar,
  SearchIcon,
  HeaderContainer,
  List,
  Badge,
} from "./styles";
import { getRequest } from "~/store/modules/deliverie/actions";
import Actions from "./Actions";

export default function Deliveries() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const deliveries = useSelector((state) => state.deliverie.deliveries);

  useEffect(() => {
    dispatch(getRequest());

    const results = deliveries.filter((delivery) =>
      delivery.product.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [dispatch, deliveries, search]);

  function handleStatus(deliverie) {
    if (deliverie.end_date !== null) {
      return "ENTREGUE";
    } else if (
      deliverie.end_date === null &&
      deliverie.start_date === null &&
      deliverie.canceled_at === null
    ) {
      return "PENDENTE";
    } else if (deliverie.start_date !== null) {
      return "RETIRADA";
    } else {
      return "CANCELADA";
    }
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <Container>
      <HeaderContainer>
        <h3>Gerenciamento de encomendas</h3>
        <div>
          <SearchIcon color="#DDDDDD" size={15} />

          <input
            type="text"
            placeholder="Buscar por encomendas"
            value={search}
            onChange={handleSearch}
          />
          <Link to="/delivery/add">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
        </div>
      </HeaderContainer>
      <List>
        <thead>
          <tr>
            <th width="5%">ID</th>
            <th>Destinatário</th>
            <th colSpan={2}>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th width="5%">Ações</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((deliverie) => (
            <tr key={deliverie.id}>
              <td>#{deliverie.id}</td>
              <td>{deliverie.recipient.name}</td>
              <td width="5%">
                <Avatar
                  src={
                    deliverie.deliveryman.avatar
                      ? deliverie.deliveryman.avatar.url
                      : "https://api.adorable.io/avatars/50/abott@adorable.png"
                  }
                />
              </td>
              <td>{deliverie.deliveryman.name}</td>
              <td>{deliverie.recipient.city}</td>
              <td>{deliverie.recipient.state}</td>
              <td>
                <Badge status={handleStatus(deliverie)}>
                  {handleStatus(deliverie)}
                </Badge>
              </td>
              <td>
                <Actions deliverie={deliverie} />
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
