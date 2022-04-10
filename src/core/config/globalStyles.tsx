import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family:  Helvetica, Arial, sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #18191a;
  }

  .roll - appear{
    opacity: 0;
  }
    .roll - enter{
    opacity: 0;
  }
`;

export { GlobalStyle };
