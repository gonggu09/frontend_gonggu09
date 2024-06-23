import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import NewProduct from "./NewProduct"; // NewProduct 컴포넌트를 임포트합니다.

function App() {
  return (
    <>
      <GlobalStyle />
      <NewProduct /> {/* NewProduct 컴포넌트를 사용합니다. */}
    </>
  );
}

export default App;
