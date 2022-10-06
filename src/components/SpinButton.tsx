import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button';

const counterButton = css`
  border: 1px solid #999999;
  background-color: #ffffff;
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  font-size: 1.4em;
`;

const counterInput = css`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  text-align: center;
  vertical-align: middle;
  font-size: 2rem;
  width: 2rem;
  padding: 0 0.8rem;
  border: none;
  border-bottom: 2px solid black;
`;

const a11yHidden = css`
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

type Passengers = 1 | 2 | 3;

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<Passengers>(1);
  const [labelText, setLabelText] = useState('');

  const validCount = (newCount: number): newCount is Passengers => {
    return newCount > 0 && newCount <= 3;
  };

  const changeCount = (newCount: number) => {
    try {
      if (!validCount(newCount)) {
        throw new Error('인원수는 1~3명까지만 가능합니다.');
      }

      setCount(newCount);
      setLabelText(`성인 ${newCount} 텍스트 숫자만 수정`);
    } catch (err) {
      alert(err);
    }
  };

  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value[e.target.value.length - 1], 10) || 1;
    changeCount(newCount);
  };

  const handleIncreaseCount = () => {
    const newCount = count + 1;
    changeCount(newCount);
  };

  const handleDecreaseCount = () => {
    const newCount = count - 1;
    changeCount(newCount);
  };

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 16px;
      `}
    >
      <Button css={counterButton} type="button" aria-label="성인 탑승자 한명 줄이기" onClick={handleDecreaseCount}>
        -
      </Button>
      <label css={a11yHidden} htmlFor="counter" aria-live="polite">
        {labelText}
      </label>
      <input id="counter" css={counterInput} type="number" value={count} min="1" max="3" onChange={handleChangeCount} />
      <Button css={counterButton} type="button" aria-label="성인 탑승자 한명 늘리기" onClick={handleIncreaseCount}>
        +
      </Button>
    </div>
  );
};

export default SpinButton;
