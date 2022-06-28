import TelaCriarPlaylist from "./components/TelaCriarPlaylist";
import TelaListaPlaylists from "./components/TelaListaPlaylists";
import React, { Component } from "react";
import TelaDetalhes from "./components/TelaDetalhes";

export default class App extends React.Component {
  state = {
    telaAtual: "criar",
    clickedPlaylistUrl: "",
  };

  irParaCriar = () => {
    this.setState({ telaAtual: "criar" });
  };

  irParaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  irParaDetalhes = (id) => {
    this.setState({ telaAtual: "detalhe", clickedPlaylistUrl: id });
  };

  selecionaTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
        return <TelaCriarPlaylist irParaLista={this.irParaLista} />;
      case "lista":
        return (
          <TelaListaPlaylists
            irParaDetalhes={this.irParaDetalhes}
            irParaCriar={this.irParaCriar}
          />
        );
      case "detalhe":
        return (
          <TelaDetalhes
            irParaLista={this.state.irParaLista}
            id={this.state.clickedPlaylistUrl}
          />
        );
      default:
        return <TelaCriarPlaylist />;
    }
  };
  render() {
    return <div>{this.selecionaTela()}</div>;
  }
}
