import './App.css';

import React, { useRef } from 'react';

const MAX_PASSENGERS_COUNT = 3;
const MIN_PASSENGERS_COUNT = 1;

const App = () => {
  const passengerCountInput = useRef(null);
  const passengerCountStatus = useRef(null);

  const addPassenger = () => {
    const inputValue = passengerCountInput.current.value;
    if (inputValue >= 3) {
      passengerCountStatus.current.innerText = `성인 승객 추가 불가능`;
      return;
    }

    passengerCountInput.current.value = Number(inputValue) + 1;
    passengerCountStatus.current.innerText = `성인 승객 추가 ${passengerCountInput.current.value}`;
  };

  const subtractPassenger = () => {
    const inputValue = passengerCountInput.current.value;
    if (inputValue <= 1) {
      passengerCountStatus.current.innerText = `성인 승객 감소 불가능`;
      return;
    }

    passengerCountInput.current.value = Number(inputValue) - 1;
    passengerCountStatus.current.innerText = `성인 승객 감소 ${passengerCountInput.current.value}`;
  };

  return (
    <form className="passengers">
      <h1>승객 선택</h1>
      <h2>성인</h2>
      <div>
        <button
          type="button"
          className="buttons"
          aria-label="성인 탑승자 한명 줄이기"
          onClick={subtractPassenger}
        >
          -
        </button>
        <input
          type="text"
          className="number-input"
          aria-label={`성인 텍스트 숫자만 수정`}
          defaultValue={MIN_PASSENGERS_COUNT}
          min={MIN_PASSENGERS_COUNT}
          max={MAX_PASSENGERS_COUNT}
          ref={passengerCountInput}
        />
        <button
          type="button"
          className="buttons"
          aria-label="성인 탑승자 한명 늘리기"
          onClick={addPassenger}
        >
          +
        </button>
        <span
          role="status"
          className="hidden"
          ref={passengerCountStatus}
        ></span>
      </div>
    </form>
  );
};

export default App;
