import React, { useState } from 'react';

import './SpinButton.css';

const SpinButton = () => {
  const [passengerCount, setPassengerCount] = useState(0);

  const increasePassengerCount = () => {
    if (passengerCount > 2) {
      alert('최대 3명까지 선택할 수 있습니다.');

      return;
    }

    setPassengerCount((passengerCount) => passengerCount + 1);
  };

  const decreasePassengerCount = () => {
    if (passengerCount < 1) return;

    setPassengerCount((passengerCount) => passengerCount - 1);
  };

  const handlePassengerCount = (event) => {
    const { valueAsNumber: value } = event.target;

    if (value < 1) {
      setPassengerCount(1);
    } else if (value > 3) {
      setPassengerCount(3);
    } else {
      setPassengerCount(event.target.value);
    }
  };

  return (
    <section className="container">
      <h1>승객 선택</h1>
      <div>성인</div>
      <div>
        <button type="button" aria-label="성인 탑승자 한명 줄이기" onClick={decreasePassengerCount}>
          -
        </button>
        <input
          type="number"
          aria-label="성인 탑승객 수"
          value={passengerCount}
          onChange={handlePassengerCount}
          min="1"
          max="3"
        />
        <span id="passenger-count" className="visually-hidden" role="status" aria-live="assertive">
          성인 승객 {passengerCount}명
        </span>
        <button type="button" aria-label="성인 탑승자 한명 늘리기" onClick={increasePassengerCount}>
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;
