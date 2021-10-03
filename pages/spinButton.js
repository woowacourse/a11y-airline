import { useState } from 'react';
import styles from '../styles/spinButton.module.css';
import commonStyles from '../styles/common.module.css';
import Head from 'next/head';

const MIN = 0;
const MAX = 3;

const SpinButton = () => {
  const [count, setCount] = useState(0);

  const changeCount = ({ target }) => {
    const value = target.valueAsNumber;

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
    <>
      <Head>
        <title>첫 번째 접근성 미션 페이지</title>
      </Head>
      <main className={commonStyles.center}>
        <section>
          <h2>승객 선택</h2>
          <h3>
            <label htmlFor="count-input">성인</label>
          </h3>
          <button className={styles.button} onClick={minus} aria-disabled={count === MIN}>
            <span aria-hidden="true">-</span>
            <span className={commonStyles['visibility-hidden']}>성인 탑승자 한 명 줄이기</span>
          </button>
          <input type="number" id="count-input" className={styles.text} value={count} onChange={changeCount} />
          <span className={commonStyles['visibility-hidden']} role="status">
            성인 탑승자 {count}명으로 변경됨
            {count === MIN && `최소 인원 ${MIN}명으로 더이상 줄이기 불가`}
            {count === MAX && `최대 인원 ${MAX}명으로 더이상 늘리기 불가`}
          </span>
          <button className={styles.button} onClick={plus} aria-disabled={count === MAX}>
            <span aria-hidden="true">+</span>
            <span className={commonStyles['visibility-hidden']}>성인 탑승자 한 명 늘리기</span>
          </button>
        </section>
      </main>
    </>
  );
};

export default SpinButton;
