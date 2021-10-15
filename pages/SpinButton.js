import React, { useState } from 'react';

import Head from 'next/head';
import styles from '../style/SpinButton.module.css';

const MAX_PASSENGERS_COUNT = 3;
const MIN_PASSENGERS_COUNT = 1;
const OVER_PASSENGERS_COUNT_LIMIT = `성인 승객 최대 ${MAX_PASSENGERS_COUNT}명`;
const UNDER_PASSENGERS_COUNT_LIMIT = `성인 승객 최소 ${MIN_PASSENGERS_COUNT}명`;

const SpinButton = () => {
  const [passengers, setPassengers] = useState(1);
  const [status, setStatus] = useState('');
  const [alert, setAlert] = useState('');

  const handleAddPassenger = () => {
    if (passengers >= MAX_PASSENGERS_COUNT) {
      setAlert(OVER_PASSENGERS_COUNT_LIMIT);
      return;
    }

    setPassengers((prev) => prev + 1);
    setStatus(`성인 승객 추가 ${passengers + 1}`);
  };

  const handleSubtractPassenger = () => {
    if (passengers <= MIN_PASSENGERS_COUNT) {
      setAlert(UNDER_PASSENGERS_COUNT_LIMIT);
      return;
    }

    setPassengers((prev) => prev - 1);
    setStatus(`성인 승객 감소 ${passengers - 1}`);
  };

  const handleChangePassenger = (e) => {
    const inputValue = Number(e.currentTarget.value);
    if (inputValue < MIN_PASSENGERS_COUNT) {
      setPassengers(MIN_PASSENGERS_COUNT);
      setAlert(UNDER_PASSENGERS_COUNT_LIMIT);
      return;
    }

    if (inputValue > MAX_PASSENGERS_COUNT) {
      setPassengers(MAX_PASSENGERS_COUNT);
      setAlert(OVER_PASSENGERS_COUNT_LIMIT);
      return;
    }

    if (isNaN(inputValue)) {
      setPassengers(MIN_PASSENGERS_COUNT);
      setAlert('숫자 입력만 허용. 성인 1명으로 초기화');
      return;
    }

    setPassengers(inputValue);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>누구나 항공사 - 스핀 버튼</title>
      </Head>
      <form className={styles.passengers}>
        <h1 tabIndex="0">승객 선택</h1>
        <h2 tabIndex="0">성인</h2>
        <div>
          <button
            type="button"
            className={styles.buttons}
            aria-label="성인 탑승자 한명 줄이기"
            onClick={handleSubtractPassenger}
          >
            -
          </button>
          <input
            type="text"
            className={styles['number-input']}
            value={passengers}
            aria-label={`성인 ${passengers} 숫자만 수정`}
            onChange={handleChangePassenger}
          />
          <button
            type="button"
            className={styles.buttons}
            aria-label="성인 탑승자 한명 늘리기"
            onClick={handleAddPassenger}
          >
            +
          </button>
          <p role="alert" className={styles.hidden}>
            {alert}
          </p>
          <p role="status" className={styles.hidden}>
            {status}
          </p>
        </div>
      </form>
    </>
  );
};

export default SpinButton;
