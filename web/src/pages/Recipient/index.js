import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, SearchIcon, HeaderContainer, List } from "./styles";
import { getRequest } from "~/store/modules/recipient/actions";
import Actions from "./Actions";

export default function Recipient() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const recipients = useSelector((state) => state.recipient.recipients);

  useEffect(() => {
    dispatch(getRequest());

    const results = recipients.filter((recipient) =>
      recipient.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [dispatch, recipients, search]);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <Container>
      <HeaderContainer>
        <h3>Gerenciamento de destinatários</h3>
        <div>
          <SearchIcon color="#DDDDDD" size={15} />

          <input
            type="text"
            placeholder="Buscar por destinatário"
            value={search}
            onChange={handleSearch}
          />
          <Link to="/recipient/add">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
        </div>
      </HeaderContainer>
      <List>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th width="5%">Ações</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((recipient) => (
            <tr key={recipient.id}>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>{`${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}</td>
              <td>
                <Actions recipient={recipient} />
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
