import { useState } from 'react';
import styles from '../styles/spinButton.module.css';
import commonStyles from '../styles/common.module.css';

const isString = (value) => /\D/.test(value);

const MIN = 0;
const MAX = 3;

const SpinButton = () => {
  const [count, setCount] = useState(0);

  const changeCount = ({ target }) => {
    if (isString(target.value)) {
      setCount(0);

      return;
    }

    const value = Number(target.value);

    if (MAX < value || MIN > value) return;

    setCount(value);
  };

  const plus = () => {
    if (count >= MAX) return;

    setCount((prevValue) => prevValue + 1);
  };

  const minus = () => {
    if (count <= MIN) return;

    setCount((prevValue) => prevValue - 1);
  };

  return (
    <main className={commonStyles.center}>
      <section>
        <h2>승객 선택</h2>
        <h3>성인</h3>
        <button className={styles.button} onClick={minus} disabled={count === MIN}>
          <span aria-hidden="true">-</span>
          <span className={commonStyles.blind}>성인 탑승자 한 명 줄이기</span>
        </button>
        <label htmlFor="count-input" className={commonStyles.blind}>
          성인
        </label>
        <input id="count-input" className={styles.text} value={count} onChange={changeCount} />
        <span className={commonStyles.blind} role="status">
          성인 탑승자 {count}명으로 변경됨
          {count === MIN && `최소 인원 ${MIN}명으로 더이상 줄이기 불가`}
          {count === MAX && `최대 인원 ${MAX}명으로 더이상 늘리기 불가`}
        </span>
        <button className={styles.button} onClick={plus} disabled={count === MAX}>
          <span aria-hidden="true">+</span>
          <span className={commonStyles.blind}>성인 탑승자 한 명 늘리기</span>
        </button>
      </section>
    </main>
  );
};

export default SpinButton;
