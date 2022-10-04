import { css } from '@emotion/react';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  .sr-only {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`;

export default globalStyle;
