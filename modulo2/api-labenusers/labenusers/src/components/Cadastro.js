import React, { Component } from "react";
import axios from "axios";

export default class Cadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleMail = (event) => {
    this.setState({ email: event.target.value });
  };

  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "gabriel-carvalho-alves",
        },
      })
      .then((res) => {
        alert("Usuário cadastrado com sucesso");
        this.setState({ nome: "", email: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.changeLista}>lista de usuários</button>
        <h2>Cadastro</h2>
        <input
          placeholder="nome"
          value={this.state.nome}
          onChange={this.handleNome}
        />
        <input
          placeholder="email"
          value={this.state.email}
          onChange={this.handleMail}
        />
        <button onClick={this.fazerCadastro}>Enviar</button>
      </div>
    );
  }
}
