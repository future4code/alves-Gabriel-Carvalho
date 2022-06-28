import React, { Component } from "react";
import axios from "axios";

export default class TelaCriarPlaylist extends React.Component {
  state = {
    nome: "",
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  criarPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.nome,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "gabriel-carvalho-alves",
        },
      })
      .then((res) => {
        alert("Playlist cadastrada com sucesso");
        this.setState({ nome: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>Lista de Playlists</button>
        <h2>Criar Playlists</h2>
        <input
          placeholder={"Nome"}
          value={this.state.nome}
          onChange={this.handleNome}
        ></input>
        <button onClick={this.criarPlaylist}>Criar</button>
      </div>
    );
  }
}
