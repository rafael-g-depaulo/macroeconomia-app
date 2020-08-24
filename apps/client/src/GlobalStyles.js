import { createGlobalStyle } from "styled-components";
import { fontSize } from "Themes/default";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Roboto", "Town Text";
    font-size: ${fontSize}px;
  }

  body {
    margin: 0;
  }

  #root {
    min-height: 100vh;
  }

`

export default GlobalStyles