import { useNavigate } from "react-router-dom";
// import { pokeDex, listPokemon } from "../../Router/Coordinator";
import { Container, Button, Image } from "./styled";
import Logo from "../../assets/logo.png";
import React from "react";
import { goToLoginPage } from "../../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const headerButton = () => {
    if (
      window.location.pathname === `/` ||
      window.location.pathname === `/post/:id`
    ) {
      return <Button onClick={logout()}>Logout</Button>;
    } else if (window.location.pathname === `/signup`) {
      return <Button onClick={() => goToLoginPage(navigate)}>Entrar</Button>;
    } else if (window.location.pathname === `/login`) {
      return <div></div>;
    }
  };

  return (
    <Container>
      <Image>
        <img src={Logo} alt="logo labenu" />
      </Image>
      {headerButton()}
    </Container>
  );
}

export default Header;
