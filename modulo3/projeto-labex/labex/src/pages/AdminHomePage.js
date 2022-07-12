import React from "react";
import { goBack } from "../routes/coordinator";
import { goToCreateTripPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

function AdminHomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>AdminHomePage</p>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
    </div>
  );
}

export default AdminHomePage;
