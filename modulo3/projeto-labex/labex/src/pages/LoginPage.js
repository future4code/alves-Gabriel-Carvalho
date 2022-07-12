import React from "react";
import { goBack } from "../routes/coordinator";
import { goToAdminHomePage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>LoginPage</p>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button>
    </div>
  );
}

export default LoginPage;
