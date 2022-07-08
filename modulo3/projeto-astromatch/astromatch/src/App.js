import React from "react";
import { useState, useEffect } from "react";
import Perfis from "./components/Perfis";
import Matches from "./components/Matches";
import Header from "./components/Header";
import styled from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

const Content = styled.div`
  background-color: #ffffff;
  box-shadow: #f95353 0px 2px 8px 0px;
  border-radius: 12px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  object-fit: cover;
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
        <button onClick={() => mudaTela("matches")}>ir para Matches</button>
      );
    } else if (tela === "matches") {
      return <button onClick={() => mudaTela("perfis")}>ir para Perfis</button>;
    } else {
      return "ERRO";
    }
  };

  return (
    <ContainerCard>
      <Content>
        <Header mudaBotao={mudaBotao} mudaTela={mudaTela} />
        <br /> {selecionaTela()}
      </Content>
    </ContainerCard>
  );
}

export default App;
