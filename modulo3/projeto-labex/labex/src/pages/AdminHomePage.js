import React from "react";
import { goBack } from "../routes/coordinator";
import { goToCreateTripPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import returnTrips from "../pages/ListTripsPage";
import { useGetData } from "../hooks/useGetData";
import styled from "styled-components";

const Trips = styled.div`
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background-color: lightblue;
  }
`;

function AdminHomePage() {
  const navigate = useNavigate();
  const { data, loading, error } = useGetData("/trips");
  const trips = data?.trips;

  const goToDetailPage = (id) => {
    navigate(`${id}`);
  };

  const returnTrips = () => {
    if (loading) {
      return <p>...loading</p>;
    } else if (!loading && error) {
      return <p>{error}</p>;
    } else if (trips && trips.length > 0) {
      return trips.map((trip) => {
        return (
          <Trips onClick={() => goToDetailPage(trip.id)} key={trip.id}>
            <p>Nome: {trip.name} </p>
          </Trips>
        );
      });
    } else if (trips?.length === 0) {
      return <p>Nenhuma viagem encontrada</p>;
    }
  };

  return (
    <div>
      <p>AdminHomePage</p>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
      {returnTrips()}
    </div>
  );
}

export default AdminHomePage;
