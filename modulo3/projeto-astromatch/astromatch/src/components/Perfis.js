import React from "react";
import axios from "axios";
import react, { useState, useEffect } from "react";
import styled from "styled-components";

function Perfis(props) {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    pegaPerfil();
  }, []);

  const pegaPerfil = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-/person"
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
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-/choose-person";
    const body = {
      id: perfil.id,
      choice: escolha,
    };
    console.log(body);
    axios
      .post(url, body)
      .then((res) => {
        if (res.data.isMatch) {
          alert("deu match");
        }
        pegaPerfil();
      })
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  const limpaMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-/clear";
    const body = {
      id: perfil.id,
    };
    axios
      .put(url, body)
      .then((res) => {
        console.log(res.data);
        alert("perfis resetados");
        pegaPerfil();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  // const handleOnClick = () => {
  //   limpaMatches();
  //   pegaPerfil();
  // };

  return (
    <div>
      <h2>Perfis</h2>
      {perfil ? (
        <div>
          <img
            src={perfil.photo}
            alt={perfil.photo_alt}
            height="400px"
            width="300px"
          />
          <br />
          {`${perfil.name}, ${perfil.age}`}
          <br />
          {perfil.bio}
          <br />
          <button onClick={() => pegaLike(false)}>Dislike</button>
          <button onClick={() => pegaLike(true)}>Like</button>
        </div>
      ) : (
        <button onClick={limpaMatches}>Resetar</button>
      )}
    </div>
  );
}

export default Perfis;
