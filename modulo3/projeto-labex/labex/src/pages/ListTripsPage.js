import React from "react";
import { goBack } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";
import { useGetData } from "../hooks/useGetData";
import styled from "styled-components";

const Trips = styled.div`
  border: 1px solid black;
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
    <div>
      <p>ListTripsPage</p>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(navigate)}>
        Inscrever-se
      </button>
      {returnTrips()}
    </div>
  );
}

export default ListTripsPage;
