import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import styled from "styled-components";
import { BASE_URL } from "../constants/BASE_URL";

const Candidates = styled.div`
  border: 1px solid black;
`;

function TripDetailsPage() {
  const [data, setData] = useState();
  const params = useParams();
  const [approve, setApprove] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
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
        console.log(res.data.trip);
        setData(res.data.trip);
      })
      .catch((err) => {
        console.log(err.response);
      });
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
        console.log("Erro", err);
      });
  };

  const candidadesList = data?.candidates.map((candidate) => {
    return (
      <Candidates>
        <p>{candidate.name}</p>
        <p>{candidate.profession}</p>
        <p>{candidate.age}</p>
        <p>{candidate.country}</p>
        <p>{candidate.applicationText}</p>
        <button
          onClick={() => {
            approveCadidate(candidate.id, false);
          }}
        >
          Reprovar
        </button>
        <button
          onClick={() => {
            approveCadidate(candidate.id, true);
          }}
        >
          Aprovar
        </button>
      </Candidates>
    );
  });

  const approved = data?.approved.map((approved, index) => {
    return (
      <div key={index}>
        <p>Nome: {approved.name}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>Nome: {data?.name}</p>
      <p>Descrição: {data?.description}</p>
      <p>Planeta: {data?.planet}</p>
      <p>Duração: {data?.duration}</p>
      <p>Data: {data?.date}</p>
      <br />
      <h2>Candidatos pendentes</h2>
      {candidadesList}
      <h2>Candidatos aprovados</h2>
      {approved}
    </div>
  );
}

export default TripDetailsPage;

// `/trip/${params.id}`;
