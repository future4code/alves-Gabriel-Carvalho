import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const CardUser = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  box-shadow: 5px 10px 18px #888888;
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const BotaoDel = styled.button`
  background-color: red;
  color: white;
  cursor: pointer;
  border: none;
`;

export default class Lista extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, {
        headers: {
          Authorization: "gabriel-carvalho-alves",
        },
      })
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        alert("Erro");
      });
  };

  deletarUsuarios = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios
      .delete(url, {
        headers: {
          Authorization: "gabriel-carvalho-alves",
        },
      })
      .then((res) => {
        alert("Usuário deletado com sucesso");
        this.pegarUsuarios();
      })
      .catch((err) => {
        alert("Erro");
      });
  };

  render() {
    const listaUsuarios = this.state.users.map((user) => {
      return (
        <CardUser key={user.id}>
          {user.name}
          <BotaoDel key={user.id} onClick={() => this.deletarUsuarios(user.id)}>
            X
          </BotaoDel>
        </CardUser>
      );
    });

    return (
      <div>
        <button onClick={this.props.changeCadastro}>cadastro</button>
        <h2>Lista de usuários</h2>
        {listaUsuarios}
      </div>
    );
  }
}
