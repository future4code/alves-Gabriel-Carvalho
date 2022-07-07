import React from "react";
import axios from "axios";
import react, { useState, useEffect } from "react";

function Perfis(props) {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    pegaPerfil();
  }, []);

  const pegaPerfil = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/-gabriel-/person"
      )
      .then((res) => {
        console.log(res.data.profile);
        setPerfil(res.data.profile);
      })
      .catch((err) => {
        console.error("Erro");
      });
  };

  const pegaLike = (escolha) => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/-gabriel-/choose-person";
    const body = {
      id: perfil.id,
      choice: escolha,
    };
    console.log(body);
    axios
      .post(url, body)
      .then((res) => {
        console.log(res);
        pegaPerfil();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div>
      <h2>Perfis</h2>
      <img src={perfil.photo} />
      <br />
      {`${perfil.name}, ${perfil.age}`}
      <br />
      {perfil.bio}
      <button onClick={() => pegaLike(false)}>Dislike</button>
      <button onClick={() => pegaLike(true)}>Like</button>
    </div>
  );
}

export default Perfis;
