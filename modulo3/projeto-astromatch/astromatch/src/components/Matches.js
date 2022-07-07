import React from "react";
import axios from "axios";
import react, { useState, useEffect } from "react";

function Matches() {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    pegaMatches();
  }, []);

  const pegaMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/-gabriel-/matches"
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
    return <p>{perfil.name}</p>;
  });

  return (
    <div>
      <p>{listaMatches}</p>
    </div>
  );
}

export default Matches;
