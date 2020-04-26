import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "themes";
import Main from "~/screens/Main";
import Projects from "~/screens/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
      <Projects />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
