import React from "react";
import { useState, useEffect } from "react";
import Perfis from "./components/Perfis";
import Matches from "./components/Matches";
import Header from "./components/Header";

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
    <div>
      <Header mudaBotao={mudaBotao} mudaTela={mudaTela} />
      {selecionaTela()}
    </div>
  );
}

export default App;
