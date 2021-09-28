import './App.css';

import React, { useRef, useState } from 'react';

const MAX_PASSENGERS_COUNT = 3;
const MIN_PASSENGERS_COUNT = 1;

const App = () => {
  const [passengers, setPassengers] = useState(1);
  const passengerStatus = useRef(null);
  const passengerAlert = useRef(null);

  const handleAddPassenger = () => {
    if (passengers >= MAX_PASSENGERS_COUNT) {
      passengerAlert.current.innerText = `성인 승객 최대 ${MAX_PASSENGERS_COUNT}명`;
      return;
    }

    setPassengers((prev) => prev + 1);
    changeStatus(`성인 승객 추가 ${passengers}`);
  };

  const handleSubtractPassenger = () => {
    if (passengers <= MIN_PASSENGERS_COUNT) {
      passengerAlert.current.innerText = `성인 승객 최소 ${MIN_PASSENGERS_COUNT}명`;
      return;
    }

    setPassengers((prev) => prev - 1);
    changeStatus(`성인 승객 감소 ${passengers}`);
  };

  const handleChangePassenger = (e) => {
    const inputValue = e.currentTarget.valueAsNumber;
    if (inputValue < MIN_PASSENGERS_COUNT) {
      setPassengers(MIN_PASSENGERS_COUNT);
      return;
    }

    if (inputValue > MAX_PASSENGERS_COUNT) {
      setPassengers(MAX_PASSENGERS_COUNT);
      return;
    }

    setPassengers(inputValue);
  };

  const changeStatus = (message) => {
    passengerStatus.current.innerText = message;
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
          onClick={handleSubtractPassenger}
        >
          -
        </button>
        <input
          type="number"
          className="number-input"
          value={passengers}
          aria-label={`성인 ${passengers} 숫자만 수정`}
          onChange={handleChangePassenger}
        />
        <button
          type="button"
          className="buttons"
          aria-label="성인 탑승자 한명 늘리기"
          onClick={handleAddPassenger}
        >
          +
        </button>
        <p role="alert" className="hidden" ref={passengerAlert}></p>
        <p role="status" className="hidden" ref={passengerStatus}></p>
      </div>
    </form>
  );
};

export default App;
