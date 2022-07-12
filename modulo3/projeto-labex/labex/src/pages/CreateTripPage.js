import React from "react";
import { goBack } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>CreateTripPage</p>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
}

export default CreateTripPage;
