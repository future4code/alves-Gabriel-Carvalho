import "./App.css";
import axios from "axios";

import React, { Component } from "react";

export default class App extends React.Component {
  state = {
    dados: [],
    erro: "",
  };

  componentDidMount() {
    this.pegarDados();
  }
  pegarDados = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "gabriel-carvalho-alves",
          },
        }
      )
      .then((resposta) => {
        console.log(resposta.data);
        this.setstate({ dados: resposta.data });
      })
      .catch((erro) => {
        console.log(erro.response.data);
        this.setState({ erro: erro.response.data });
      });
  };
  render() {
    return (
      <div>
        {this.state.erro ? (
          <p>{this.state.erro}</p>
        ) : (
          this.state.dados.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })
        )}
      </div>
    );
  }
}
