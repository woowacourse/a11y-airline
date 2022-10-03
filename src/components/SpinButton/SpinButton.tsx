import { useState, ChangeEventHandler } from 'react';
import styled from 'styled-components';

const MIN_VALUE = 0;
const MAX_VALUE = 3;

const SpinButton = () => {
  const [value, setValue] = useState<number>(1);
  const [message, setMessage] = useState('');

  const handleClickDecrease = () => {
    if (value <= MIN_VALUE) {
      return;
    }

    setValue((prevValue) => prevValue - 1);
    setMessage(`성인 승객 감소 ${value - 1}`);
  };

  const handleClickIncrease = () => {
    if (value >= MAX_VALUE) {
      return;
    }

    setValue((prevValue) => prevValue + 1);
    setMessage(`성인 승객 추가 ${value + 1}`);
  };

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { data } = event.nativeEvent as InputEvent;

    if (data === null || !Number.isInteger(Number(data))) {
      setValue(0);
      return;
    }

    if (Number(data) > MAX_VALUE) {
      return;
    }

    setValue(Number(data));
  };

  return (
    <Wrapper>
      <label htmlFor="adultCount">{'성인'}</label>
      <ControlWrapper>
        <ControlButton
          type="button"
          onClick={handleClickDecrease}
          aria-label="성인 탑승자 한 명 줄이기"
          aria-controls="spinnerMessage"
          aria-disabled={value <= MIN_VALUE}
        >
          -
        </ControlButton>
        <Input
          id="adultCount"
          type="tel"
          value={value}
          onChange={handleChangeInput}
          aria-description="숫자만 수정"
        />
        <ControlButton
          type="button"
          onClick={handleClickIncrease}
          aria-label="성인 탑승자 한 명 늘리기"
          aria-controls="spinnerMessage"
          aria-disabled={value >= MAX_VALUE}
        >
          +
        </ControlButton>
      </ControlWrapper>
      <Message id="spinnerMessage" aria-live="assertive">
        {message}
      </Message>
    </Wrapper>
  );
};

export default SpinButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControlWrapper = styled.div`
  display: flex;
`;

const ControlButton = styled.button``;

const Input = styled.input``;

const Message = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
