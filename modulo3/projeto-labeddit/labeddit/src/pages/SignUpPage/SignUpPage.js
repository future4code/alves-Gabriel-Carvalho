import React from "react";
import Header from "../../components/Header/Header";
import {
  ScreenContainer,
  Text,
  Image,
  Input,
  Form,
  ButtonSignUp,
  ButtonLogin,
  TextSignUp,
  Check,
} from "./styled";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/users";

function SignUpPage() {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, handleInputChange, clear } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate);
  };

  return (
    <ScreenContainer>
      <Header />
      <Text>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
      </Text>
      <Form onSubmit={onSubmitForm}>
        <Input
          name={"username"}
          value={form.username}
          onChange={handleInputChange}
          placeholder="Nome de usuário"
          required
          autoFocus
        />
        <Input
          name={"email"}
          value={form.email}
          onChange={handleInputChange}
          placeholder="E-mail"
          required
          type={"email"}
        />
        <Input
          name={"password"}
          value={form.password}
          onChange={handleInputChange}
          placeholder="Senha"
          required
          type={"password"}
        />
        <TextSignUp>
          <p>
            Ao continuar, você concorda com o nosso Contrato de usuário e nossa
            Política de Privacidade
          </p>
          <Check>
            <input type={"checkbox"} required />
            <p>
              {" "}
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </p>
          </Check>
        </TextSignUp>
        <ButtonLogin type={"submit"}>Cadastrar</ButtonLogin>
      </Form>
    </ScreenContainer>
  );
}

export default SignUpPage;
