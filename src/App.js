import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Router from "./Router";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 430px;
  height: 100vh;
  overflow: scroll;
  margin: 0 auto;
`;
