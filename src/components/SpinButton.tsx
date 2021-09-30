import React, { useState } from 'react';
import styles from './SpinButton.module.css';

const SpinButton = (): JSX.Element => {
  const [numberOfPerson, setNumberOfPerson] = useState(1);
  const [status, setStatus] = useState<'추가' | '감소' | null>(null);

  const onDecrease = () => {
    if (numberOfPerson < 0) return;

    setNumberOfPerson((prev) => prev - 1);
    setStatus('감소');
  };

  const onIncrease = () => {
    if (numberOfPerson >= 3) return;

    setNumberOfPerson((prev) => prev + 1);
    setStatus('추가');
  };

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(target.value);
    const prevNumberOfPerson = numberOfPerson;

    if (value < 0 || value > 3 || numberOfPerson === value) return;

    setNumberOfPerson(value);
    setStatus(value > prevNumberOfPerson ? '추가' : '감소');
  };

  return (
    <div lang="ko">
      <h1>승객 선택</h1>
      <h2>성인</h2>
      <div>
        <button
          type="button"
          onClick={onDecrease}
          disabled={numberOfPerson === 1}
          aria-disabled={numberOfPerson === 1}
          aria-label="성인 탑승자 한 명 줄이기"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          max="3"
          aria-label="성인 탑승 승객 수"
          value={numberOfPerson}
          onChange={onChange}
        />
        <span className={styles['sr-only']} role="alert" aria-live="assertive">
          성인 승객 {status} {numberOfPerson}
        </span>
        <button
          type="button"
          onClick={onIncrease}
          disabled={numberOfPerson === 3}
          aria-disabled={numberOfPerson === 3}
          aria-label="성인 탑승자 한 명 늘리기"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SpinButton;
