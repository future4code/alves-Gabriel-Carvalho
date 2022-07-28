import react, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./img/logo1.png";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding-bottom: 0px;
  border-bottom: 1px solid gray;
  margin: 0 16px 0 16px;
`;

function Header(props) {
  return (
    <HeaderStyle>
      <img src={logo} width="60%" />
      {props.mudaBotao()}
    </HeaderStyle>
  );
}

export default Header;
