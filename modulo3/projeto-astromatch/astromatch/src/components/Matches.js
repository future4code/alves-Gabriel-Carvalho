import React from "react";
import axios from "axios";
import react, { useState, useEffect } from "react";
import styled from "styled-components";

const Match = styled.div`
  /* box-shadow: #f95353 0px 2px 8px 0px;
  border-radius: 12px;
  padding: 8px;
  margin: 8px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 8px 5px 0 5px;
  padding: 10px;
  background-color: white;
  color: #f95353;
  /* width: 80%; */
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
  border: #f95353 1px solid;
`;

const Roll = styled.div`
  overflow-y: scroll;
`;

function Matches(props) {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    pegaMatches();
  }, []);

  const pegaMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-/matches"
      )
      .then((res) => {
        console.log(res.data.matches);
        setMatch(res.data.matches);
      })
      .catch((err) => {
        console.error("Erro");
      });
  };

  const listaMatches = match.map((perfil) => {
    return (
      <Match>
        <img src={perfil.photo} alt={perfil.photo_alt} height={32} width={32} />{" "}
        {perfil.name}
      </Match>
    );
  });

  return (
    <Roll>
      <p>{listaMatches}</p>
    </Roll>
  );
}

export default Matches;
