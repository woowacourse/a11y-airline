import { css } from '@emotion/react';

const layoutStyle = css`
  display: flex;
  gap: 5px;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  border: 1px solid #ced4da;
  border-radius: 50%;

  background-color: white;

  font-size: 24px;
  line-height: 32px;

  cursor: pointer;
`;

const inputStyle = css`
  width: 32px;

  border: none;
  border-bottom: 1px solid black;

  font-size: 24px;
  text-align: center;
`;

const displayNoneStyle = css`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;

  border: 0;

  clip: rect(0, 0, 0, 0);
`;

export { buttonStyle, inputStyle, layoutStyle, displayNoneStyle };
