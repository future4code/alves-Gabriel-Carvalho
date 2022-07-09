import React from "react";
import axios from "axios";
import react, { useState, useEffect } from "react";
import styled from "styled-components";
import like from "./img/campfire.png";
import likehover from "./img/campfire3.png";
import close from "./img/close.png";

const Imagem = styled.img`
  height: 350px;
  width: 300px;
  object-fit: contain;
  margin-bottom: 32px;
  margin-top: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DivInfo = styled.div`
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

const Texto = styled.div`
  position: absolute;
  bottom: 8px;
  /* right: 20px; */
  color: white;
  font-weight: bold;
  margin-bottom: 32px;
  padding: 8px;
  text-shadow: 0.1em 0.1em 0.2em black;
`;

const Nome = styled.div`
  font-size: 26px;
  font-weight: bold;
`;
const Info = styled.div`
  font-size: 20px;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 48px 0 48px;
  padding-bottom: 32px;
`;

const ButtonLike = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const LogoButton = styled.img`
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
`;

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
    axios
      .put(url)
      .then((res) => {
        console.log(res.data);
        alert("perfis resetados");
        setPerfil(res.data.id);
        pegaPerfil();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div>
      {perfil ? (
        <div>
          <DivInfo>
            <Imagem src={perfil.photo} alt={perfil.photo_alt} />
            <Texto>
              <Nome>{`${perfil.name}, ${perfil.age}`}</Nome>

              <Info>{perfil.bio}</Info>
            </Texto>
          </DivInfo>
          <Buttons>
            <ButtonLike onClick={() => pegaLike(false)}>
              <LogoButton src={close} />
            </ButtonLike>
            <ButtonLike onClick={() => pegaLike(true)}>
              <LogoButton src={likehover} />
            </ButtonLike>
          </Buttons>
        </div>
      ) : (
        <button onClick={limpaMatches}>Resetar</button>
      )}
    </div>
  );
}

export default Perfis;
