import React from "react";
import { ScreenContainer, Text, Image, Input } from "./styled";
import Logo from "../../assets/logo-maior.png";

function LoginPage() {
  return (
    <ScreenContainer>
      <Image>
        <img src={Logo} />
      </Image>
      <Text>
        <h1>LabEddit</h1>
        <p>O projeto de rede social da Labenu</p>
      </Text>
      <Input placeholder="Nome" />
    </ScreenContainer>
  );
}

export default LoginPage;
