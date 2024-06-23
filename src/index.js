import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyles"; // GlobalStyle 불러오기
import "./styles/font.css"; // 폰트 스타일 불러오기 (있는 경우)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle /> {/* GlobalStyle 적용 */}
    <App />
  </>
);
