import { FlexBox } from "components";
import { ChangeEventHandler, useState } from "react";
import styled, { css } from "styled-components";

const MIN_PASSENGER = 1;
const MAX_PASSENGER = 3;

export const PassengerSelection = () => {
  const [passenger, setPassenger] = useState(1);
  const [show, setShow] = useState(false);

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
    const inputValue = Number(event.target.value);
    if (inputValue > MAX_PASSENGER || inputValue < MIN_PASSENGER) {
      return;
    }
    setPassenger(inputValue);
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
        <Hidden
          aria-live="assertive"
          aria-relevant="additions"
          aria-atomic="true"
        >
          성인 승객 추가 {passenger}
        </Hidden>
      </FlexBox>
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

const Hidden = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0 0 0 0);
  margin: -1px;
  overflow: hidden;
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
