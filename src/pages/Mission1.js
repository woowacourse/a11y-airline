import styled from '@emotion/styled';
import React, { useState } from 'react';

const PASSENGER_MIN_COUNT = 1;
const PASSENGER_MAX_COUNT = 3;

const isValidPassengerCount = (count) =>
  PASSENGER_MIN_COUNT <= count && count <= PASSENGER_MAX_COUNT;

const Mission1 = () => {
  const [passengerCount, setPassengerCount] = useState(PASSENGER_MIN_COUNT);

  const incrementPassengerCount = () => {
    if (passengerCount >= PASSENGER_MAX_COUNT) return;

    setPassengerCount(Number(passengerCount) + 1);
  };

  const decrementPassengerCount = () => {
    if (passengerCount <= PASSENGER_MIN_COUNT) return;

    setPassengerCount(Number(passengerCount) - 1);
  };

  const changePassengerCountInput = (event) => {
    try {
      const { value } = event.target;

      if (isNaN(value)) {
        throw new Error();
      }

      setPassengerCount(value);
    } catch (error) {
      setPassengerCount(PASSENGER_MIN_COUNT);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    if (!isValidPassengerCount(passengerCount)) {
      alert(
        `탑승자는 ${PASSENGER_MIN_COUNT}명 이상 ${PASSENGER_MAX_COUNT}명 이하로 추가할 수 있습니다.`
      );

      return;
    }

    if (window.confirm('탑승자를 추가하시겠습니까?')) {
      alert('추가 되었습니다.');
      setPassengerCount(PASSENGER_MIN_COUNT);
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
            disabled={passengerCount <= PASSENGER_MIN_COUNT}
          >
            -
          </button>
          <input
            type="tel"
            id="passengerCount"
            value={passengerCount}
            aria-label="성인"
            maxLength={1}
            onChange={changePassengerCountInput}
          />
          <p className="sr-only" role="alert">
            성인 {passengerCount}
          </p>
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
