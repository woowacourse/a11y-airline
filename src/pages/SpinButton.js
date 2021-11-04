import styled from "@emotion/styled";
import { useState } from "react";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 1px solid grey;
`;

const SpinButtonSection = styled.section`
  display: flex;
`;

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid black;
  font-weight: 600;
  text-align: center;
  margin: 0 1rem;
  padding-left: 0.8rem;
  width: 2rem;
`;

const CurrentPassenger = styled.span`
  width: 0;
  height: 0;
  opacity: 0;
`;

const SpinButton = () => {
  const [passengerCount, setPassengerCount] = useState(1);

  const handleIncreaseCount = () => {
    if (passengerCount < 3) {
      setPassengerCount(passengerCount + 1);
    }
  };

  const handleDecreaseCount = () => {
    if (passengerCount > 1) setPassengerCount(passengerCount - 1);
  };

  return (
    <>
      <Title>🎯 미션1 Spin Button: 승객수 입력하기</Title>
      <h2>승객 선택</h2>
      <h3>성인</h3>
      <SpinButtonSection>
        <button
          type="button"
          aria-label="성인 탑승자 한 명 줄이기"
          onClick={handleDecreaseCount}
        >
          -
        </button>
        <Input
          type="number"
          aria-label="성인"
          value={passengerCount}
          readOnly
        />
        <CurrentPassenger role="status">
          현재 승객 인원 {passengerCount}
        </CurrentPassenger>
        <button
          type="button"
          aria-label="성인 탑승자 한명 늘리기"
          onClick={handleIncreaseCount}
        >
          +
        </button>
      </SpinButtonSection>
    </>
  );
};

export default SpinButton;
