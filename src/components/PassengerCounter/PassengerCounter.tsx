import React, { useEffect, useRef, useState } from 'react';

import { useMessageAction } from '../../hooks/useMessageAction';

import styles from './PassengerCounter.module.css';

type PassengerCounterProps = {
  label: string;
  min: number;
  max: number;
};

const PassengerCounter = ({ label, min, max }: PassengerCounterProps) => {
  const { displayMessage } = useMessageAction();
  const [value, setValue] = useState(1);
  const isRenderedRef = useRef(false);

  const handleClickDecreaseButton = () => {
    if (value <= min) return;

    setValue((prev) => prev - 1);
  };

  const handleClickIncreaseButton = () => {
    if (value >= max) return;

    setValue((prev) => prev + 1);
  };

  const handleChangeInputValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(target.value);

    if (value < min) return;
    if (value > max) value = max;

    setValue(value);
  };

  useEffect(() => {
    if (isRenderedRef.current) {
      displayMessage(`${label} 승객 추가 ${value}`);
    }

    isRenderedRef.current = true;
  }, [value]);

  return (
    <div>
      <label htmlFor={`${label} counter`} className={styles.label}>
        {label}
      </label>
      <button
        aria-label={`${label} 탑승자 한명 줄이기`}
        disabled={value === min}
        className={styles.button}
        onClick={handleClickDecreaseButton}
      >
        -
      </button>
      <input
        type="number"
        id={`${label} counter`}
        value={value}
        min={min}
        max={max}
        className={styles.input}
        onChange={handleChangeInputValue}
      />
      <button
        aria-label={`${label} 탑승자 한명 늘리기`}
        disabled={value === max}
        className={styles.button}
        onClick={handleClickIncreaseButton}
      >
        +
      </button>
    </div>
  );
};

export default PassengerCounter;
