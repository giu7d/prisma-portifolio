import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

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
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <p>Hello World</p>
      </main>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
