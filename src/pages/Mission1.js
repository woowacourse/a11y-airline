import React, { useState } from 'react';

const PASSENGER_MAX_COUNT = 3;

const Mission1 = () => {
  const [passengerCount, setPassengerCount] = useState(0);

  const decrementPassengerCount = () => {
    if (passengerCount === 0) return;

    setPassengerCount(passengerCount - 1);
  };

  const incrementPassengerCount = () => {
    if (passengerCount === PASSENGER_MAX_COUNT) return;

    setPassengerCount(passengerCount + 1);
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (passengerCount === 0) {
      alert('추가할 탑승객이 없습니다.');

      return;
    }

    if (window.confirm('탑승객을 추가하시겠습니까?')) {
      alert('추가 되었습니다.');
      setPassengerCount(0);
    }
  };

  return (
    <section>
      <form onSubmit={submitForm}>
        <button type="button" onClick={decrementPassengerCount}>
          -
        </button>
        <input value={passengerCount} readOnly />
        <button type="button" onClick={incrementPassengerCount}>
          +
        </button>
        <button>추가</button>
      </form>
    </section>
  );
};

export default Mission1;
