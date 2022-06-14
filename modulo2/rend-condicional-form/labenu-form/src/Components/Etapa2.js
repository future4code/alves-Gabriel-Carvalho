import React from "react";
import { Estilo } from "./styled";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <Estilo>
        <div>
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          <p>
            5. Qual curso?
            <br />
            <input type="text"></input>
          </p>
          <p>
            6. Qual a unidade de ensino?
            <br />
            <input type="text"></input>
          </p>
        </div>
      </Estilo>
    );
  }
}
