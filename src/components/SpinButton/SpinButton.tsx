import { useState } from 'react';
import styled from 'styled-components';

const SpinButton = () => {
  const [value, setValue] = useState(1);
  const [message, setMessage] = useState('');

  const handleClickDecrease = () => {
    if (value <= 0) {
      return;
    }

    setValue((prevValue) => prevValue - 1);
    setMessage(`승객 감소 ${value - 1}`);
  };

  const handleClickIncrease = () => {
    if (value >= 3) {
      return;
    }

    setValue((prevValue) => prevValue + 1);
    setMessage(`승객 추가 ${value + 1}`);
  };

  return (
    <Wrapper>
      <label for="성인">{'성인'}</label>
      <ControlWrapper>
        <ControlButton
          type="button"
          onClick={handleClickDecrease}
          aria-label="성인 탑승자 한명 줄이기"
          aria-controls="spinnerMessage"
        >
          -
        </ControlButton>
        <Input value={value} type="text" maxLength={1} />
        <ControlButton
          type="button"
          onClick={handleClickIncrease}
          aria-label="성인 탑승자 한명 늘리기"
          aria-controls="spinnerMessage"
        >
          +
        </ControlButton>
      </ControlWrapper>
      <Message id="spinnerMessage" aria-live="polite">
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
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
