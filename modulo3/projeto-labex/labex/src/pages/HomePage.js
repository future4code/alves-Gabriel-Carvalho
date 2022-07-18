import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";
import { goToLoginPage } from "../routes/coordinator";
import styled from "styled-components";

const Home = styled.div`
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  color: white;
  font-size: larger;
  opacity: 0.7;
`;

const Buttons = styled.div`
  display: flex;
  /* padding: 10px; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

function HomePage() {
  const navigate = useNavigate();
  return (
    <Home>
      <h1>LabeX</h1>
      <Buttons>
        <Button onClick={() => goToListTripsPage(navigate)}>
          Lista de Viagens
        </Button>
        <Button onClick={() => goToLoginPage(navigate)}>Área Admin</Button>
      </Buttons>
    </Home>
  );
}

export default HomePage;
