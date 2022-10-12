import { css } from '@emotion/react';

const layoutStyle = css`
  position: relative;
  display: flex;

  overflow: overlay;
`;

const listStyle = css`
  position: relative;
  display: flex;
  flex=direction: row;
  gap: 30px;

  height: 310px;
  overflow: overlay;
`;

const prevButtonStyle = css`
  position: sticky;
  top: 50%;
  left: 30px;
  z-index: 10;
  background: url(https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-left.svg)
    no-repeat;
  transform: translate(0, -50%);

  width: 40px;
  height: 60px;
  border: none;

  &:hover {
    border: 1px solid blue;
    cursor: pointer;
  }
`;

const nextButtonStyle = css`
  position: sticky;
  top: 50%;
  right: 30px;
  z-index: 10;
  background: url(https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-right.svg)
    no-repeat;
  transform: translate(0, -50%);

  width: 40px;
  height: 60px;
  border: none;

  &:hover {
    border: 1px solid blue;
    cursor: pointer;
  }
`;

const hiddenStyle = css`
  overflow: hidden;
  white-space: nowrap;
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
`;
export { layoutStyle, listStyle, prevButtonStyle, nextButtonStyle, hiddenStyle };
