import logo from "./logo.svg";
import "./App.css";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Final from "./Components/Final";
import React, { Component } from "react";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };

  render() {
    return (
      <div>
        {this.renderizaEtapa()}
        {this.state.etapa === 4 || (
          <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
        )}
      </div>
    );
  }
}
