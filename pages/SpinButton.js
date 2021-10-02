import React from "react";
import { useState } from "react";

import styles from "../styles/spinButton.module.css";

const MIN_ADULT_COUNT = 0;
const MAX_ADULT_COUNT = 3;

const SpinButton = () => {
  const [adultCount, setAdultCount] = useState(MIN_ADULT_COUNT);
  const [isIncrementButtonDisabled, setIsIncrementButtonDisabled] =
    useState(false);
  const [isDecrementButtonDisabled, setIsDecrementButtonDisabled] =
    useState(true);

  const incrementCount = () =>
    setAdultCount((prevCount) => {
      setIsDecrementButtonDisabled(false);

      if (prevCount >= MAX_ADULT_COUNT) {
        return prevCount;
      }

      const nextCount = prevCount + 1;
      if (nextCount >= MAX_ADULT_COUNT) {
        setIsIncrementButtonDisabled(true);
        setIsDecrementButtonDisabled(false);
      }

      const $ariaLive = document.querySelector("#spinButtonAriaLive");
      $ariaLive.innerText = `성인 승객 추가 ${nextCount}`;

      return nextCount;
    });

  const decrementCount = () =>
    setAdultCount((prevCount) => {
      setIsIncrementButtonDisabled(false);

      if (prevCount <= MIN_ADULT_COUNT) {
        return prevCount;
      }

      const nextCount = prevCount - 1;
      if (nextCount === MIN_ADULT_COUNT) {
        setIsDecrementButtonDisabled(true);
        setIsIncrementButtonDisabled(false);
      }

      const $ariaLive = document.querySelector("#spinButtonAriaLive");
      $ariaLive.innerText = `성인 승객 감소 ${nextCount}`;

      return nextCount;
    });

  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>승객 선택</h1>
      <section>
        <h2 className={styles.h2}>성인</h2>
        <button
          type="button"
          className={`${styles.tooltip} ${styles.iconTextHidden}`}
          aria-describedby="tooltip-adult"
        >
          성인 기준 상세 안내
        </button>
        <p id="tooltip-adult" role="tooltip" hidden>
          국제선 만 12세 이상, 국내선 만 13세 이상
        </p>
        <section>
          <button
            className={`${styles.spinButton} ${styles.minusButton} ${styles.iconTextHidden}`}
            aria-disabled={isDecrementButtonDisabled}
            onClick={decrementCount}
          >
            성인 승객 한 명 줄이기
          </button>
          <input
            type="number"
            className={styles.adultCountInput}
            aria-label={`성인 ${adultCount}명`}
            maxLength="1"
            value={adultCount}
            onChange={() => {}}
          />
          <button
            className={`${styles.spinButton} ${styles.plusButton} ${styles.iconTextHidden}`}
            aria-disabled={isIncrementButtonDisabled}
            onClick={incrementCount}
          >
            성인 승객 한 명 늘리기
          </button>
          <div
            id="spinButtonAriaLive"
            className={styles.spinButtonAriaLive}
            aria-live="assertive"
          />
        </section>
      </section>
    </section>
  );
};

export default SpinButton;
