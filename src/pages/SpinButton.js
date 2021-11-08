import React, { useState } from 'react';
import '../styles/util.css';

const MIN_NUMBER = 0;
const MAX_NUMBER = 3;

const ACTION = {
  CHANGE: '변경',
  DECREASE: '감소',
  INCREASE: '증가',
};

const SpinButton = () => {
  const [number, setNumber] = useState(1);
  const [action, setAction] = useState('');

  const isMaxNumber = number === MAX_NUMBER;
  const isMinNumber = number === MIN_NUMBER;

  const onDecrease = () => {
    if (number <= MIN_NUMBER) {
      return;
    }

    setNumber((prev) => prev - 1);
    setAction(ACTION.DECREASE);
  };

  const onIncrease = () => {
    if (number >= MAX_NUMBER) {
      return;
    }

    setNumber((prev) => prev + 1);
    setAction(ACTION.INCREASE);
  };

  const onChangeNumber = ({ target: { value } }) => {
    const num = Number(value);
    if (value === '') {
      setNumber(value);
    }

    if (MIN_NUMBER + 1 <= num && num <= MAX_NUMBER) {
      setNumber(num);
      setAction(ACTION.CHANGE);
    }
  };

  const onSetEmptyInput = ({ target: { value } }) => {
    if (value === '') {
      setNumber(0);
      setAction(ACTION.CHANGE);
    }
  };

  return (
    <main>
      <h2>승객 선택</h2>
      <section>
        <h3>성인</h3>
        <div style={{ display: 'flex' }}>
          <button
            aria-label="성인 탑승자 한명 줄이기"
            onClick={onDecrease}
            disabled={isMinNumber}
            aria-disabled={isMinNumber}
          >
            -
          </button>
          <div>
            <label htmlFor="number-input" className="visually-hidden">
              {`성인 ${number}`}
            </label>
            <input
              id="number-input"
              type="number"
              value={number}
              onChange={onChangeNumber}
              onBlur={onSetEmptyInput}
              placeholder="0~3 사이의 숫자만 입력"
            />
            <span className="visually-hidden" role="status">
              {`성인 승객 ${action} ${number}`}
            </span>
          </div>
          <button
            aria-label="성인 탑승자 한명 늘리기"
            onClick={onIncrease}
            disabled={isMaxNumber}
            aria-disabled={isMaxNumber}
          >
            +
          </button>
        </div>
      </section>
    </main>
  );
};

export default SpinButton;
