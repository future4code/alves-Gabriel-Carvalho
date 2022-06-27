import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const CardPlaylist = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 10px 18px #888888;
  width: 200px;
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: lightsalmon;
    cursor: pointer;
  }
`;

const BotaoDel = styled.button`
  background-color: red;
  color: white;
  cursor: pointer;
  border: none;
`;

export default class TelaListaPlaylists extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  pegarPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, {
        headers: {
          Authorization: "gabriel-carvalho-alves",
        },
      })
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert("Erro");
      });
  };

  deletarPlaylists = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

    axios
      .delete(url, {
        headers: {
          Authorization: "gabriel-carvalho-alves",
        },
      })
      .then((res) => {
        alert("Playlist excluída com sucesso");
        this.pegarPlaylists();
      })
      .catch((err) => {
        alert("Erro");
      });
  };

  render() {
    const listaPlaylists = this.state.playlists.map((lista) => {
      return (
        <CardPlaylist
          key={lista.id}
          onClick={() => this.props.irParaDetalhes(lista.id)}
        >
          {lista.name}
          <BotaoDel onClick={() => this.deletarPlaylists(lista.id)}>X</BotaoDel>
        </CardPlaylist>
      );
    });
    return (
      <div>
        <button onClick={this.props.irParaCriar}>Voltar</button>
        <h2>Playlists</h2>
        {listaPlaylists}
      </div>
    );
  }
}
