import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Content, Profile, Link } from "./styles";
import logo from "~/assets/fastfeet-logo.png";
import { signOut } from "~/store/modules/auth/actions";

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <Link to="/delivery">ENCOMENDAS</Link>
          <Link to="/deliveryman">ENTREGADORES</Link>
          <Link to="/recipient">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
            </div>
            <a onClick={handleSignOut} href="/#">
              sair do sistema
            </a>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
