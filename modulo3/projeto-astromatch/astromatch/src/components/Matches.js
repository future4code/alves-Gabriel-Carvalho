import React from "react";
import axios from "axios";
import react, { useState, useEffect } from "react";

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
      <div>
        <img src={perfil.photo} alt={perfil.photo_alt} height={50} width={50} />{" "}
        <p>{perfil.name}</p>
      </div>
    );
  });

  return (
    <div>
      <p>{listaMatches}</p>
    </div>
  );
}

export default Matches;
