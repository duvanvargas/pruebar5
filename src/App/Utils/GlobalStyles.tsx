import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
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