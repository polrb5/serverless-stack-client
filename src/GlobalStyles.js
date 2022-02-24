import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    /* scroll-behavior: smooth; */
  }
  html {
    background-color: #FFFDFA;
  }
  a.no-underlined {
    text-decoration: none;
  }
  h1, h2, h3, h4 {
    font-family: 'Bebas Neue', sans-serif;
  }
  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
