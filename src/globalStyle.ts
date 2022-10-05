import { css } from '@emotion/react';

const globalStyle = css`
  body,
  html,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  button {
    user-select: none;
  }
`;

export default globalStyle;
