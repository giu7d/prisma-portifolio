import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import BauhausBackground from "./BauhausBackground";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 12px;
    background-color: #f5f5f5;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <BauhausBackground />
      </main>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
