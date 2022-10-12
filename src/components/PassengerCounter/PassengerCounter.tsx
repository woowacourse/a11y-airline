import {useState} from 'react';

import ToolTip from '../ToolTip/ToolTip';

import styles from './PassengerCounter.module.css';

const PassengerCounter = () => {
  const [count, setCount] = useState(0);
  const [countValidate, setCountValidate] = useState('');

  const handleClickDecreasePassengerCount = () => {
    if (count === 0) {
      return setCountValidate('현재 추가한 승객은 0명입니다. 추가할 승객 수를 선택해주세요.');
    } else {
      setCountValidate('');
    }
    setCount((prev) => prev - 1);
  };

  const handleIncreasePassengerCount = () => {
    if (count === 3) {
      return setCountValidate('현재 추가한 승객은 3명입니다. 최대 3명까지 추가할 수 있습니다.');
    } else {
      setCountValidate('');
    }
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className={styles.subTitleBox}>
        <h2>성인</h2>
        <ToolTip text={'만 20세 이상 성인, 0명부터 3명까지 추가할 수 있습니다.'} />
      </div>
      <section className={styles.counterBox}>
        <div aria-live='polite' aria-atomic='true' className={styles.counterText}>
          성인 승객 {count}명
        </div>
        <div className={styles.countButtonBox}>
          <button type='button' className={styles.decreaseButton} onClick={handleClickDecreasePassengerCount}>
            성인 탑승자 한명 줄이기
          </button>
          <div>{count}</div>
          <button type='button' className={styles.increaseButton} onClick={handleIncreasePassengerCount}>
            성인 탑승자 한명 늘이기
          </button>
        </div>
        {countValidate && (
          <span aria-live='polite' role='alert' className={styles.countValidateText}>
            {countValidate}
          </span>
        )}
      </section>
    </>
  );
};

export default PassengerCounter;
