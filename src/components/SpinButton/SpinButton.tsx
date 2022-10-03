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
      <Label htmlFor="adultCount">{'성인'}</Label>
      <ControlWrapper>
        <ControlButton
          type="button"
          onClick={handleClickDecrease}
          aria-label="성인 탑승자 한 명 줄이기"
          aria-controls="spinnerMessage"
          aria-disabled={value <= MIN_VALUE}
          disabled={value <= MIN_VALUE}
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
          disabled={value >= MAX_VALUE}
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

const Label = styled.label`
  margin-bottom: 20px;
  font-weight: bold;
`;

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ControlButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e6e7ea;
  background-color: none;
  font-size: 20px;

  &:disabled {
    color: #e6e7ea;
  }
`;

const Input = styled.input`
  width: 38px;
  height: 40px;
  margin: 0 20px;
  border-bottom: 1px solid #000000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Message = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
