import { css } from '@emotion/react';

const hidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const layout = css`
  margin: 0 40px;
`;

const content = css`
  position: relative;
  width: 600px;
  height: 400px;
  overflow: hidden;
`;

const ul = css`
  position: relative;
  display: flex;
  padding: 0 4px;
  margin: 40px 0;
`;

const li = css`
  list-style: none;
  height: 300px;
  width: 240px;
  position: relative;
  margin-right: 20px;
  :hover {
    box-shadow: -1px -1px 10px 0px #000;
  }
`;

const a = css`
  text-decoration: none;
  color: inherit;
`;

const textBox = css`
  position: absolute;
  top: 10%;
  left: 10%;
`;

const textTitle = css`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 16px;
`;

const text = css`
  margin: 0;
  margin-bottom: 4px;
`;

const textPrice = css`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  color: #11277b;
  text-shadow: 1px 1px 1px #ffffff;
`;

const imageBox = css`
  width: auto;
  height: 100%;
`;

const image = css`
  width: auto;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
`;

const buttonLayout = css`
  position: absolute;
  top: 50%;
  margin: 0;
  padding: 0;
  height: 0;
`;

const buttonWrapper = css`
  position: fixed;
  width: 600px;
  margin: 0;
  padding: 0;
  height: 0;
`;

const button = (imgUrl: string, disableLeftButton: boolean) => css`
  border: none;

  position: absolute;
  background: url(${imgUrl}) no-repeat center top;
  background-size: 30px 60px;
  height: 60px;
  width: 30px;
  transform: translateY(-50%);
  cursor: pointer;
  ${disableLeftButton && `cursor: not-allowed;`}
  :hover {
    box-shadow: -1px -1px 10px 0px #ffffff;
  }
`;

const styles = {
  hidden,
  layout,
  content,
  ul,
  li,
  a,
  textBox,
  textTitle,
  textPrice,
  text,
  imageBox,
  image,
  buttonLayout,
  buttonWrapper,
  button,
};

export default styles;
