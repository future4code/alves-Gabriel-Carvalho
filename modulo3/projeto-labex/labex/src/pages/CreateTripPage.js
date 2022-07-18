import React from "react";
import { goBack } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_URL";
import axios from "axios";
import useForm from "../hooks/useForm";
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
  width: 75vh;
  height: 5vh;
  border-radius: 10px;
  font-size: 16px;
`;
const Select = styled.select`
  width: 76.5vh;
  height: 5vh;
  border-radius: 10px;
  font-size: 16px;
`;

function CreateTripPage() {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const sendForm = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();

    cleanFields();

    axios
      .post(`${BASE_URL}/trips`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alert("Viagem criada com sucesso");
      })
      .catch((err) => {
        alert("Erro");
      });
  };

  return (
    <Container>
      <p>Criar Viagem</p>

      <form onSubmit={sendForm}>
        <Form
          placeholder="Nome"
          value={form.name}
          name={"name"}
          required
          onChange={onChange}
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 caracteres"}
        />
        <br />
        <Select name={"planet"} defaultValue={""} onChange={onChange} required>
          <option value="" disabled>
            Escolha um Planeta
          </option>
          <option value="Brasil">Mercúrio</option>
          <option value="Afeganistão">Vênus</option>
          <option value="África do Sul">Terra</option>
          <option value="Albânia">Marte</option>
          <option value="Alemanha">Júpiter</option>
          <option value="Andorra">Saturno</option>
          <option value="Angola">Urano</option>
          <option value="Anguilla">Netuno</option>
          <option value="Antilhas Holandesas">Plutão</option>
        </Select>
        <br />
        <Form
          placeholder="Data"
          value={form.date}
          name={"date"}
          required
          onChange={onChange}
          type={"date"}
        />
        <br />
        <Form
          placeholder="Descrição"
          value={form.description}
          name={"description"}
          required
          onChange={onChange}
          pattern={"^.{30,}"}
          title={"A descrição deve ter no mínimo 30 caracteres"}
        />
        <br />
        <Form
          placeholder="Duração em dias"
          value={form.durationInDays}
          name={"durationInDays"}
          required
          onChange={onChange}
          type={"number"}
          min={50}
        />
        <Buttons>
          <Button onClick={() => goBack(navigate)}>Voltar</Button>
          <Button>Criar</Button>
        </Buttons>
      </form>
    </Container>
  );
}

export default CreateTripPage;
