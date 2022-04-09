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
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.color.bgLow};
  }
  .roll - appear{
    opacity: 0;
  }
    .roll - enter{
    opacity: 0;
  }
`;

export { GlobalStyle };
