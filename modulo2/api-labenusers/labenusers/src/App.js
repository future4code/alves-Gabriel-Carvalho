import axios from "axios";
import React, { Component } from "react";
import Cadastro from "./components/Cadastro";
import Lista from "./components/Lista";

export default class App extends Component {
  state = {
    telaAtual: "cadastro",
  };

  setScreen = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro changeLista={this.changeLista} />;
      case "lista":
        return <Lista changeCadastro={this.changeCadastro} />;
      default:
        return <div>Tela não encontrada</div>;
    }
  };

  changeCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  changeLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  render() {
    return <div>{this.setScreen()}</div>;
  }
}
