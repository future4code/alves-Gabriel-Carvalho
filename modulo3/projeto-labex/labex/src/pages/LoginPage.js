import React from "react";
import { goBack } from "../routes/coordinator";
import { goToAdminHomePage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const sendForm = (event) => {
    event.preventDefault();
    console.log("Form enviado", form);

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-carvalho/login",
        form
      )
      .then((res) => {
        console.log("Deu certo", res.data);
        localStorage.setItem("token", res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        alert("Usuário não encontrado");
      });

    cleanFields();
  };

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={() => goBack(navigate)}>Voltar</button>

      <form onSubmit={sendForm}>
        <input
          placeholder="Email"
          value={form.email}
          name={"email"}
          required
          onChange={onChange}
          type={"email"}
        />
        <input
          placeholder="Senha"
          value={form.password}
          name={"password"}
          required
          onChange={onChange}
          type={"password"}
          pattern={"^.{3,}"}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default LoginPage;
