import React from "react";
import { useState, useEffect } from "react";
import Perfis from "./components/Perfis";
import Matches from "./components/Matches";
import Header from "./components/Header";
import styled from "styled-components";
import match from "./components/img/user.png";
import card from "./components/img/card.png";

const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  box-shadow: #f95353 0px 2px 8px 0px;
  border-radius: 12px;
  height: 85vh;
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  margin: 0;
`;

const LogoButton = styled.img`
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

function App() {
  const [tela, setTela] = useState("perfis");

  const mudaTela = (telaAtual) => {
    setTela(telaAtual);
  };

  const selecionaTela = () => {
    if (tela === "perfis") {
      return <Perfis />;
    } else if (tela === "matches") {
      return <Matches />;
    }
  };

  const mudaBotao = () => {
    if (tela === "perfis") {
      return (
        <Button onClick={() => mudaTela("matches")}>
          {" "}
          <LogoButton src={card} />{" "}
        </Button>
      );
    } else if (tela === "matches") {
      return (
        <Button onClick={() => mudaTela("perfis")}>
          {" "}
          <LogoButton src={match} />{" "}
        </Button>
      );
    } else {
      return "ERRO";
    }
  };

  return (
    <ContainerCard>
      <Content>
        <Header mudaBotao={mudaBotao} mudaTela={mudaTela} /> {selecionaTela()}
      </Content>
    </ContainerCard>
  );
}

export default App;
