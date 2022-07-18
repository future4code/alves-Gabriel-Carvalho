import React from "react";
import { goBack } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";
import { useGetData } from "../hooks/useGetData";
import styled from "styled-components";

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

const Buttons = styled.div`
  display: flex;
  /* padding: 10px; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
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

const List = styled.div`
  font-size: bold;
  color: white;
  margin: 0 auto;
  opacity: 0.7;
`;

function ListTripsPage() {
  const navigate = useNavigate();
  const { data, loading, error } = useGetData("/trips");
  const trips = data?.trips;

  const returnTrips = () => {
    if (loading) {
      return <p>...loading</p>;
    } else if (!loading && error) {
      return <p>{error}</p>;
    } else if (trips && trips.length > 0) {
      return trips.map((trip) => {
        return (
          <Trips key={trip.id}>
            <p>Nome: {trip.name} </p>
            <p>Descrição: {trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <p>Data: {trip.date}</p>
          </Trips>
        );
      });
    } else if (trips?.length === 0) {
      return <p>Nenhuma viagem encontrada</p>;
    }
  };

  return (
    <List>
      <Buttons>
        <h1>Lista de Viagens</h1>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <Button onClick={() => goToApplicationFormPage(navigate)}>
          Inscrever-se
        </Button>
      </Buttons>

      {returnTrips()}
    </List>
  );
}

export default ListTripsPage;
