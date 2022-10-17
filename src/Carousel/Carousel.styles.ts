import { css } from '@emotion/react';

const layoutStyle = (length: number) => css`
  position: relative;
  display: flex;

  overflow: overlay;
  width: ${length * 329}px;
  max-width: 100%;
`;

const listStyle = css`
  display: flex;
  gap: 30px;
  overflow: hidden;
  padding: 0;
`;

const prevButtonStyle = css`
  position: absolute;
  top: 50%;
  z-index: 10;
  background: url(https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-left.svg)
    no-repeat;
  transform: translate(0, -50%);

  width: 32px;
  height: 60px;
  border: none;

  box-sizing: border-box;
  &:hover {
    border: 1px solid blue;
    cursor: pointer;
  }
`;

const nextButtonStyle = css`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 10;
  background: url(https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-right.svg)
    no-repeat;
  transform: translate(0, -50%);

  width: 32px;
  height: 60px;
  border: none;

  &:hover {
    border: 1px solid blue;
    cursor: pointer;
  }
`;

export { layoutStyle, listStyle, prevButtonStyle, nextButtonStyle };
