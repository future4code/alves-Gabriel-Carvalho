import React from "react";
import { goBack } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";

function ListTripsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>ListTripsPage</p>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(navigate)}>
        Inscrever-se
      </button>
    </div>
  );
}

export default ListTripsPage;
