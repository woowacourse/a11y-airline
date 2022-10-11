import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    box-sizing: border-box;
    background-color: transparent;
  }
`;

export default GlobalStyle;
