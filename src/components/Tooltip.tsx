import { css } from '@emotion/react';
import Button from './Button';

const tooltip = css`
  border: 2px solid #999999;
  background-color: #ffffff;
  height: 1.4rem;
  width: 1.4rem;
  font-size: 0.9em;
  color: #999999;
  border-radius: 1rem;
  position: relative;

  :hover {
    & p {
      visibility: visible;
    }
  }

  & p {
    visibility: hidden;
  }
`;

const tipText = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  font-size: 1rem;
  z-index: 1;
  background-color: #00000090;
  color: #ffffff;
`;

const Tooltip: React.FC = () => {
  return (
    <Button type="button" css={tooltip} role="tooltip" aria-label="인원수는 1~3명까지만 가능합니다.">
      <span aria-hidden>?</span>
      <p css={tipText} aria-hidden>
        인원수는 1~3명까지만 가능합니다.
      </p>
    </Button>
  );
};

export default Tooltip;
