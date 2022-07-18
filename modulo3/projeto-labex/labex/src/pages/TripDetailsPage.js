import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import styled from "styled-components";
import { BASE_URL } from "../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

const Trips = styled.div`
  border: 1px solid black;
  background-color: white;
  color: black;
  box-shadow: #456075 0px 2px 8px 0px;
  margin: 32px;
  border-radius: 10px;
  font-size: 20px;
  padding: 16px;
  opacity: 0.7;
`;

const Button = styled.button`
  background-color: white;
  color: white;
  border-radius: 10px;
  font-size: large;
  padding: 12px;
  margin: 8px;
  color: blueviolet;
  font-weight: bold;
  :hover {
    background-color: blueviolet;
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  font-weight: bold;
  font-size: bold;
  font-size: larger;
`;
const Buttons = styled.div`
  display: flex;
  /* padding: 10px; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function TripDetailsPage() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const params = useParams();
  const [approve, setApprove] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      navigate("/login");
    }
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-carvalho/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setData(res.data.trip);
      })
      .catch((err) => {});
  }, []);

  const approveCadidate = (idCandidate, choice) => {
    const token = localStorage.getItem("token");
    const body = {
      approve: choice,
    };
    axios
      .put(
        `${BASE_URL}/trips/${data.id}/candidates/${idCandidate}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        if (choice === true) {
          alert("Candidato Aprovado");
          setApprove(!approve);
        } else {
          alert("Candidato Reprovado");
          setApprove(!approve);
        }
        document.location.reload(true);
      })
      .catch((err) => {
        alert("Erro", err);
      });
  };

  const candidadesList = data?.candidates.map((candidate) => {
    return (
      <div>
        <p>{candidate.name}</p>
        <p>{candidate.profession}</p>
        <p>{candidate.age}</p>
        <p>{candidate.country}</p>
        <p>{candidate.applicationText}</p>
        <Buttons>
          <Button
            onClick={() => {
              approveCadidate(candidate.id, false);
            }}
          >
            Reprovar
          </Button>
          <Button
            onClick={() => {
              approveCadidate(candidate.id, true);
            }}
          >
            Aprovar
          </Button>
        </Buttons>
      </div>
    );
  });

  const approved = data?.approved.map((approved, index) => {
    return (
      <div key={index}>
        <p>{approved.name}</p>
      </div>
    );
  });

  const deleteTrip = () => {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-carvalho/trips/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        alert("Viagem deletada");
        navigate(-1);
      })
      .catch((err) => {
        alert("Erro");
      });
  };

  return (
    <Container>
      <Trips>
        <h1>{data?.name}</h1>
        <p>Nome: {data?.name}</p>
        <p>Descrição: {data?.description}</p>
        <p>Planeta: {data?.planet}</p>
        <p>Duração: {data?.duration}</p>
        <p>Data: {data?.date}</p>
        <Button onClick={deleteTrip}>Deletar Viagem</Button>
        <br />

        <h2>Candidatos pendentes</h2>
        {candidadesList}
        <h2>Candidatos aprovados</h2>
        {approved}
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
      </Trips>
    </Container>
  );
}

export default TripDetailsPage;
