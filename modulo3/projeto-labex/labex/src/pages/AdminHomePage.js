import React from "react";
import { goBack } from "../routes/coordinator";
import { goToCreateTripPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import returnTrips from "../pages/ListTripsPage";
import { useGetData } from "../hooks/useGetData";
import styled from "styled-components";

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
  opacity: 0.7;
`;

const Trips = styled.div`
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background-color: blueviolet;
  }
  border: 1px solid black;
  background-color: white;
  color: black;
  box-shadow: #456075 0px 2px 8px 0px;
  margin: 32px;
  border-radius: 10px;
  font-size: 20px;
  padding: 16px;
`;

const Buttons = styled.div`
  display: flex;
  /* padding: 10px; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
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
            <p>{trip.name} </p>
          </Trips>
        );
      });
    } else if (trips?.length === 0) {
      return <p>Nenhuma viagem encontrada</p>;
    }
  };

  return (
    <Container>
      <h1>Viagens</h1>

      {returnTrips()}
      <Buttons>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
        <Button onClick={() => goToCreateTripPage(navigate)}>
          Criar Viagem
        </Button>
      </Buttons>
    </Container>
  );
}

export default AdminHomePage;
