import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-image: url(https://i.pinimg.com/564x/e1/77/62/e177623bfffab517811cbe5320df995e.jpg);
    background-size: cover;
    background-position: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color: black;
  }

  li {
    list-style: none;
  }
`;
