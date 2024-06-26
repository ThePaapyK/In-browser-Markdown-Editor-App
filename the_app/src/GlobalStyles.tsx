import { createGlobalStyle } from 'styled-components';

export  const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
