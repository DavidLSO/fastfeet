import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Avatar, SearchIcon, HeaderContainer, List } from "./styles";
import { getRequest } from "~/store/modules/deliveryman/actions";
import Actions from "./Actions";

export default function Deliveryman() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const deliverymans = useSelector((state) => state.deliveryman.deliverymans);

  useEffect(() => {
    dispatch(getRequest());

    const results = deliverymans.filter((deliveryman) =>
      deliveryman.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [dispatch, deliverymans, search]);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <Container>
      <HeaderContainer>
        <h3>Gerenciamento de entregador</h3>
        <div>
          <SearchIcon color="#DDDDDD" size={15} />

          <input
            type="text"
            placeholder="Buscar por entregador"
            value={search}
            onChange={handleSearch}
          />
          <Link to="/deliveryman/add">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
        </div>
      </HeaderContainer>
      <List>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th width="5%">Ações</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((deliveryman) => (
            <tr key={deliveryman.id}>
              <td>#{deliveryman.id}</td>
              <td>
                <Avatar
                  src={
                    deliveryman.avatar
                      ? deliveryman.avatar.url
                      : "https://api.adorable.io/avatars/50/abott@adorable.png"
                  }
                />
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <Actions deliveryman={deliveryman} />
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
