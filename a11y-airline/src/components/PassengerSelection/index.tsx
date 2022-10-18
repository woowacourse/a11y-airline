import { FlexBox, Hidden } from "components";
import { ChangeEventHandler, useRef, useState } from "react";
import styled, { css } from "styled-components";

const MIN_PASSENGER = 0;
const MAX_PASSENGER = 3;

export const PassengerSelection = () => {
  const [passenger, setPassenger] = useState(1);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const errorTimerRef = useRef(0);

  const handleDecreasePassenger = () => {
    if (passenger <= MIN_PASSENGER) {
      return;
    }
    setPassenger((prev) => prev - 1);
  };

  const handleIncreasePassenger = () => {
    if (passenger >= MAX_PASSENGER) {
      return;
    }
    setPassenger((prev) => prev + 1);
  };

  const handleHelpButton = () => {
    setShow((prev) => !prev);
  };

  const handlePassengerInput: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let inputValue = Number(event.target.value);
    if (isNaN(inputValue)) {
      return;
    }
    if (inputValue > MAX_PASSENGER) {
      inputValue = MAX_PASSENGER;
      handleErrorMessage();
    }
    if (inputValue < MIN_PASSENGER) {
      inputValue = MIN_PASSENGER;
      handleErrorMessage();
    }
    event.target.value = inputValue.toString();
    setPassenger(inputValue);
  };

  const handleErrorMessage = () => {
    setShowError(true);

    clearTimeout(errorTimerRef.current);

    errorTimerRef.current = window.setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  return (
    <FlexBox as="section" flexDirection="column" gap="10px">
      <h1>승객 선택</h1>
      <FlexBox alignItems="center" gap="5px">
        <h2>성인</h2>
        <HelpButton
          aria-label="성인 기준 상세 안내"
          aria-expanded={show}
          aria-controls="help_button_desc"
          onClick={handleHelpButton}
        >
          <p aria-hidden="true">?</p>
        </HelpButton>
        {show && (
          <FlexBox gap="5px" alignItems="center">
            <p id="help_button_desc">
              국제선 만 12세 이상, 국내선 만 13세 이상
            </p>
            <CloseButton onClick={handleHelpButton} aria-label="닫기">
              <p aria-hidden="true">x</p>
            </CloseButton>
          </FlexBox>
        )}
      </FlexBox>
      <FlexBox alignItems="center" gap="5px">
        <ControlButton
          aria-disabled={passenger <= MIN_PASSENGER}
          onClick={handleDecreasePassenger}
          aria-label="성인 탑승자 한명 줄이기"
          isDisabled={passenger <= MIN_PASSENGER}
        >
          <p aria-hidden="true">-</p>
        </ControlButton>
        <Passenger
          type="number"
          value={passenger}
          min={MIN_PASSENGER}
          max={MAX_PASSENGER}
          onChange={handlePassengerInput}
          aria-label="성인 승객 추가"
        />
        <ControlButton
          aria-disabled={passenger >= MAX_PASSENGER}
          onClick={handleIncreasePassenger}
          aria-label="성인 탑승자 한명 늘리기"
          isDisabled={passenger >= MAX_PASSENGER}
        >
          <p aria-hidden="true">+</p>
        </ControlButton>
        <Hidden aria-live="assertive" aria-atomic="true" aria-hidden="false">
          성인 승객 추가 {passenger}
        </Hidden>
      </FlexBox>
      <div role="status" aria-live="polite">
        {showError ? "0 ~ 3명 사이의 승객만 입력 가능합니다" : ""}
      </div>
    </FlexBox>
  );
};

const HelpButton = styled.button.attrs({
  type: "button",
})`
  width: 0.8rem;
  aspect-ratio: 1;
  border: 1px solid gray;
  color: gray;
  border-radius: 50%;
  font-size: 0.5rem;
  text-align: center;
`;

type ControlButtonProps = {
  isDisabled: boolean;
};

const ControlButton = styled.button.attrs({
  type: "button",
})<ControlButtonProps>`
  ${({ isDisabled }) => css`
    width: 1rem;
    height: 1rem;
    border: 0.5px solid lightgray;
    border-radius: 50%;
    text-align: center;

    ${isDisabled &&
    css`
      cursor: not-allowed;
      background-color: lightgray;
      color: gray;
    `}
  `}
`;

const Passenger = styled.input`
  width: 3rem;
  font-size: 1.4rem;
  font-weight: bold;
  border-bottom: 0.5px solid black;
`;

const CloseButton = styled.button.attrs({
  type: "button",
})`
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  border: 1px solid gray;
  p {
    margin-top: -0.3rem;
  }
`;
