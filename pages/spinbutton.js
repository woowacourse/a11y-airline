import React, { useState } from "react";
import styled from "@emotion/styled";

const PASSENGER_MAX_COUNT = 3;
const PASSENGER_MIN_COUNT = 1;

const SpinButton = () => {
  const [adultPassengerCount, setAdultPassengerCount] = useState(
    PASSENGER_MIN_COUNT,
  );

  const onDecreaseCount = () => {
    if (adultPassengerCount < PASSENGER_MIN_COUNT) return;

    setAdultPassengerCount((count) => count - 1);
  };

  const onIncreaseCount = () => {
    if (adultPassengerCount >= PASSENGER_MAX_COUNT) return;

    setAdultPassengerCount((count) => count + 1);
  };

  const onUpdateAdultPassengerCount = (event) => {
    setAdultPassengerCount(event.target.value);
  };

  return (
    <Section>
      <h2>승객 선택</h2>

      <label htmlFor="adultPassenger">성인</label>
      <div aria-label="성인 승객 수">
        <Button
          onClick={onDecreaseCount}
          aria-label="성인 탑승자 한명 줄이기"
          disabled={adultPassengerCount < PASSENGER_MIN_COUNT}
        >
          -
        </Button>
        <Input
          id="adultPassenger"
          type="number"
          min={PASSENGER_MIN_COUNT - 1}
          max={PASSENGER_MAX_COUNT}
          value={adultPassengerCount}
          onChange={onUpdateAdultPassengerCount}
        />
        <VisibilityHidden role="alert" aria-atomic="true" aria-live="polite">
          성인 {adultPassengerCount}명
        </VisibilityHidden>
        <Button
          onClick={onIncreaseCount}
          aria-label="성인 탑승자 한 명 늘리기"
          disabled={adultPassengerCount >= PASSENGER_MAX_COUNT}
        >
          +
        </Button>
      </div>
    </Section>
  );
};

export default SpinButton;

const Section = styled.section`
  width: fit-content;
  padding: 2rem;
  margin: 1rem auto;
  border: 1px solid #333333;
  border-radius: 0.5rem;

  h2 {
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
  }
`;

const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;

  border-radius: 50%;
  border: 1px solid #333333;

  :hover {
    font-weight: 600;
    border: 2px solid #333333;
  }
`;

const Input = styled.input`
  width: 5rem;
  height: 3rem;

  font-size: 2rem;
  text-align: center;

  border: none;
  border-bottom: 2px solid #333333;
`;

const VisibilityHidden = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: react(1px, 1px, 1px, 1px);
  white-space: nowrap;
`;
