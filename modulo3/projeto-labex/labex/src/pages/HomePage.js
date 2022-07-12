import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinator";
import { goToLoginPage } from "../routes/coordinator";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>HomePage</p>
      <button onClick={() => goToListTripsPage(navigate)}>
        Lista de Viagens
      </button>
      <button onClick={() => goToLoginPage(navigate)}>Área Admin</button>
    </div>
  );
}

export default HomePage;
