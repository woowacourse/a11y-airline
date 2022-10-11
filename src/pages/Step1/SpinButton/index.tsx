import { useState } from 'react';

import { COUNT_RULE } from '@/constants/rule';

import styles from './index.module.scss';

interface SpinButtonProps {
  target: string;
}

function SpinButton({ target }: SpinButtonProps) {
  const [count, setCount] = useState(0);
  const [labelDescription, setLabelDescription] = useState('');

  const isDisabledMinusButton = count <= COUNT_RULE.MIN;
  const isDisabledPlusButton = count >= COUNT_RULE.MAX;

  const changeCount = (flag: 'plus' | 'minus') => () => {
    if (flag === 'plus') {
      if (isDisabledPlusButton) return;

      setCount(prevCount => {
        const newCount = prevCount + 1;

        setLabelDescription(`${target} 승객 추가 ${newCount}`);

        return newCount;
      });

      return;
    }

    if (isDisabledMinusButton) return;

    setCount(prevCount => {
      const newCount = prevCount - 1;

      setLabelDescription(`${target} 승객 감소 ${newCount}`);

      return newCount;
    });
  };

  const enterCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = Number(e.target.value);

    if (newCount < COUNT_RULE.MIN || newCount > COUNT_RULE.MAX) return;

    e.target.value = newCount.toString();

    setLabelDescription(`${target} ${newCount} 텍스트 숫자만 수정`);
    setCount(newCount);
  };

  return (
    <div
      className={styles.container}
      role="spinbutton"
      aria-label={`${target} 탑승자 인원 지정`}
      aria-valuenow={count}
      aria-valuemin={0}
      aria-valuemax={3}
    >
      <label aria-hidden={false} aria-live="polite" role="dialog" hidden>
        {labelDescription}
      </label>
      <button
        type="button"
        className={`${styles.button} ${
          isDisabledMinusButton ? styles.disabled : ''
        }`}
        onClick={changeCount('minus')}
        aria-label={`${target} 탑승자 한명 줄이기`}
        aria-disabled={isDisabledMinusButton}
      >
        -
      </button>
      <input
        type="number"
        className={styles.input}
        min={0}
        max={3}
        value={count}
        onChange={enterCount}
        aria-label={`${target} 탑승자 수정 텍스트`}
      />
      <button
        type="button"
        className={`${styles.button} ${
          isDisabledPlusButton ? styles.disabled : ''
        }`}
        onClick={changeCount('plus')}
        aria-label={`${target} 탑승자 한명 늘리기`}
        aria-disabled={isDisabledPlusButton}
      >
        +
      </button>
    </div>
  );
}

export default SpinButton;
