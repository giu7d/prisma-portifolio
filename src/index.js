import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles";
import { ThemeProvider } from "styled-components";
import theme from "themes";
import Main from "~/screens/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
      <div
        style={{ height: 1000, width: "100%", background: theme.colors.dark }}
      ></div>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
