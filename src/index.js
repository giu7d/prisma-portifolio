import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "~/styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <main></main>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
