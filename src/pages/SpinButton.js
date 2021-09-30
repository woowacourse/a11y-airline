import { useState } from 'react';

import './SpinButton.css';

const ADULT_COUNT_MIN = 0;
const ADULT_COUNT_MAX = 3;

function SpinButton() {
  const [adultCount, setAdultCount] = useState(ADULT_COUNT_MIN);
  const isIncrementDisabled = adultCount >= ADULT_COUNT_MAX;
  const isDecrementDisabled = adultCount <= ADULT_COUNT_MIN;

  const increment = () =>
    setAdultCount((prevCount) => {
      if (prevCount >= ADULT_COUNT_MAX) {
        return prevCount;
      }

      const nextCount = prevCount + 1;
      const $ariaLive = document.querySelector('.SpinButton_AriaLive');

      $ariaLive.innerText = `성인 승객 추가 ${nextCount}`;
      return nextCount;
    });
  const decrement = () =>
    setAdultCount((prevCount) => {
      if (prevCount <= ADULT_COUNT_MIN) {
        return prevCount;
      }

      const nextCount = prevCount - 1;
      const $ariaLive = document.querySelector('.SpinButton_AriaLive');

      $ariaLive.innerText = `성인 승객 감소 ${nextCount}`;
      return nextCount;
    });

  return (
    <section className="Controller">
      <h1>승객 선택</h1>

      <section className="AdultSection">
        <h2>성인</h2>
        <button type="button" className="Tooltip IconOnly" aria-describedby="tooltip-adult">
          성인 기준 상세 안내
        </button>
        <p id="tooltip-adult" role="tooltip" hidden>
          국제선 만 12세 이상, 국내선 만 13세 이상
        </p>

        <div>
          <button
            className="SpinButton SpinButtonMinus IconOnly"
            aria-disabled={isDecrementDisabled}
            onClick={decrement}
          >
            성인 승객 한 명 줄이기
          </button>

          <input
            type="number"
            className="AdultCountInput"
            aria-label={`성인 ${adultCount}명`}
            min={ADULT_COUNT_MIN}
            max={ADULT_COUNT_MAX}
            value={adultCount}
            onChange={() => {}}
          />

          <button
            className="SpinButton SpinButtonPlus IconOnly"
            aria-disabled={isIncrementDisabled}
            onClick={increment}
          >
            성인 승객 한 명 늘리기
          </button>
          <div className="SpinButton_AriaLive" aria-live="assertive" />
        </div>
      </section>
    </section>
  );
}

export default SpinButton;
