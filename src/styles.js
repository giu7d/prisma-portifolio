import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-snap-type: y mandatory;
    overflow-y: auto;
  }

  html,
  body,
  #root {
    height: 100%;
    font-family: ${props => props.theme.fonts.normal}, Helvetica, sans-serif;
    font-size: 12px;
    background-color: ${props => props.theme.colors.light};
  }
`;
