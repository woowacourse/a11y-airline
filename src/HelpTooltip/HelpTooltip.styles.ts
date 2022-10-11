import { css } from '@emotion/react';

const layoutStyle = css`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 20px;
`;

const baseInfoStyle = css`
  font-size: 20px;
`;

const buttonStyle = css`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  border: 1px solid gray;

  background-color: white;

  font-size: 10px;
  color: gray;
`;

const tooltipMessageStyle = css`
  position: absolute;
  z-index: 10;
  left: 100px;

  border: 1px solid #ced4da;
  border-radius: 8px;

  background: white;
  width: 100%;
`;

export { layoutStyle, baseInfoStyle, buttonStyle, tooltipMessageStyle };
