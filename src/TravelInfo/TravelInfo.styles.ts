import { css } from '@emotion/react';

const layoutStyle = css`
  position: relative;
  width: 236px;
  height: 299px;
  list-style-type: none;
`;

const linkStyle = css`
  text-decoration: none;
  color: black;
`;

const imageStyle = css`
  width: 234px;
  height: 299px;
`;

const textStyle = css`
  position: absolute;
  top: 10%;
  padding-left: 20px;
`;

const locationStyle = css`
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 8px;
`;

const seatStyle = css`
  font-size: 12px;
`;

const priceStyle = css`
  font-size: 15px;
  color: navy;
  font-weight: bold;
`;

export { layoutStyle, imageStyle, textStyle, locationStyle, seatStyle, priceStyle, linkStyle };
