import React from "react";
import { Estilo } from "./styled";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <Estilo>
        <div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <p>
            5. Por que você não terminou um curso de graduação?
            <br />
            <input type="text"></input>
          </p>
          <p>
            6. Você fez algum curso complementar?
            <br />
            <select>
              <option>Nenhum</option>
              <option>Curso técnico</option>
              <option>Curso de inglês</option>
            </select>
          </p>
        </div>
      </Estilo>
    );
  }
}
