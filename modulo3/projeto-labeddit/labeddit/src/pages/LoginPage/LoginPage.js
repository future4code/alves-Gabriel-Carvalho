import React from "react";
import {
  ScreenContainer,
  Text,
  Image,
  Input,
  Form,
  ButtonSignUp,
  ButtonLogin,
} from "./styled";
import Logo from "../../assets/logo-maior.png";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import { login } from "../../services/users";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

function LoginPage() {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, handleInputChange, clear } = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate);
  };

  return (
    <ScreenContainer>
      <Image>
        <img src={Logo} />
      </Image>
      <Text>
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </Text>
      <Form onSubmit={onSubmitForm}>
        <Input
          name={"email"}
          value={form.email}
          onChange={handleInputChange}
          placeholder="Nome"
          required
          type={"email"}
          autoFocus
        />
        <Input
          name={"password"}
          value={form.password}
          onChange={handleInputChange}
          placeholder="Senha"
          required
          type={"password"}
        />
        <ButtonLogin type={"submit"}>Continuar</ButtonLogin>
      </Form>
      <ButtonSignUp onClick={() => goToSignUpPage(navigate)}>
        Crie uma conta!
      </ButtonSignUp>
    </ScreenContainer>
  );
}

export default LoginPage;
