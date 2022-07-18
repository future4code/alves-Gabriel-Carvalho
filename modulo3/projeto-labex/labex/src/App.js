import React from "react";
import Router from "./routes/Router";
import styled from "styled-components";
import img from "./img/james-webb.png";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  background-image: url(${img});
`;

function App() {
  return (
    <Container>
      <Router />
    </Container>
  );
}

export default App;
