import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, button, p, ul, li {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    box-sizing: border-box;
    background-color: transparent;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyle;
