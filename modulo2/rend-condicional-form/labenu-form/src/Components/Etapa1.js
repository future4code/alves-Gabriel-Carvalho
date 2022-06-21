import React from "react";
import { Estilo } from "./styled";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <Estilo>
        <div>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
          <p>
            1. Qual o seu nome?
            <br />
            <input type="text"></input>
          </p>
          <p>
            2. Qual sua idade?
            <br />
            <input type="text"></input>
          </p>
          <p>
            3. Qual seu email?
            <br />
            <input type="text"></input>
          </p>
          <p>
            4. Qual a sua escolaridade?
            <br />
            <select>
              <option>Ensino médio incompleto</option>
              <option>Ensino médio completo</option>
              <option>Ensino superior incompleto</option>
              <option>Ensino superior completo</option>
            </select>
          </p>
        </div>
      </Estilo>
    );
  }
}
