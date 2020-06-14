import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
    padding: 0px;
    margin: 0px;
  }
  a {
    color: inherit; 
    text-decoration: inherit;
  }
`;

export default GlobalStyles;