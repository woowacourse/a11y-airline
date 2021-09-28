import styled from '@emotion/styled';
import React, { useState } from 'react';

const PASSENGER_MIN_COUNT = 1;
const PASSENGER_MAX_COUNT = 3;
const initialPassengerCount = {
  prev: PASSENGER_MIN_COUNT,
  current: PASSENGER_MIN_COUNT,
};

const Mission1 = () => {
  const [passengerCount, setPassengerCount] = useState(initialPassengerCount);
  const { prev, current } = passengerCount;

  const decrementPassengerCount = () => {
    if (current <= PASSENGER_MIN_COUNT) return;

    setPassengerCount({ prev: current, current: current - 1 });
  };

  const incrementPassengerCount = () => {
    if (current >= PASSENGER_MAX_COUNT) return;

    setPassengerCount({ prev: current, current: current + 1 });
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (window.confirm('탑승자를 추가하시겠습니까?')) {
      alert('추가 되었습니다.');
      setPassengerCount(initialPassengerCount);
    }
  };

  return (
    <section>
      <form onSubmit={submitForm}>
        <InputStepper>
          <button
            type="button"
            aria-label="성인 탑승자 한명 줄이기"
            onClick={decrementPassengerCount}
          >
            -
          </button>
          <label htmlFor="passengerCount" className="sr-only">
            성인
          </label>
          <input
            type="tel"
            id="passengerCount"
            value={current}
            readOnly={true}
          />
          <div aria-live="assertive" aria-atomic={true}>
            {prev > current && (
              <p className="sr-only">성인 승객 감소 {current}</p>
            )}
            {prev < current && (
              <p className="sr-only">성인 승객 증가 {current}</p>
            )}
          </div>
          <button
            type="button"
            aria-label="성인 탑승자 한명 늘리기"
            onClick={incrementPassengerCount}
          >
            +
          </button>
        </InputStepper>
        <button>추가</button>
      </form>
    </section>
  );
};

const InputStepper = styled.div`
  display: flex;
`;

export default Mission1;
