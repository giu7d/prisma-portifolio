import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
