import React from "react";
import { Estilo } from "./styled";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <Estilo>
        <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
          <h2>
            1. Qual o seu nome?
            <br />
            <input type="text"></input>
          </h2>
          <h2>
            1. Qual sua idade?
            <br />
            <input type="text"></input>
          </h2>
          <h2>
            1. Qual seu email?
            <br />
            <input type="text"></input>
          </h2>
          <h2>
            1. Qual sua escolaridade?
            <br />
            <select>
              <option>Ensino médio incompleto</option>
              <option>Ensino médio completo</option>
              <option>Ensino superior incompleto</option>
              <option>Ensino superior completo</option>
            </select>
          </h2>
        </div>
      </Estilo>
    );
  }
}
