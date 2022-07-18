import React from "react";
import { goBack } from "../routes/coordinator";
import { goToAdminHomePage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: white;
  font-weight: bold;
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

const Form = styled.input`
  width: 50vh;
  height: 4vh;
`;
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
    <Container>
      <p>Login</p>

      <form onSubmit={sendForm}>
        <Form
          placeholder="Email"
          value={form.email}
          name={"email"}
          required
          onChange={onChange}
          type={"email"}
        />
        <br />
        <Form
          placeholder="Senha"
          value={form.password}
          name={"password"}
          required
          onChange={onChange}
          type={"password"}
          pattern={"^.{3,}"}
        />
        <br />
        <Buttons>
          <Button onClick={() => goBack(navigate)}>Voltar</Button>
          <Button>Entrar</Button>
        </Buttons>
      </form>
    </Container>
  );
}

export default LoginPage;
