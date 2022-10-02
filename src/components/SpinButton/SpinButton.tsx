import { useState } from 'react';
import styled from 'styled-components';

const SpinButton = () => {
  const [value, setValue] = useState(1);

  const handleClickDecrease = () => {
    if (value <= 0) {
      return;
    }

    setValue((prevValue) => prevValue - 1);
  };

  const handleClickIncrease = () => {
    if (value >= 3) {
      return;
    }

    setValue((prevValue) => prevValue + 1);
  };

  return (
    <Wrapper>
      <label id="성인">{'성인'}</label>
      <ControlWrapper>
        <ControlButton
          type="button"
          onClick={handleClickDecrease}
          aria-label="탑승자 한명 줄이기"
        >
          -
        </ControlButton>
        <Input name="성인" value={value} type="number" min={1} max={3} />
        <ControlButton
          type="button"
          onClick={handleClickIncrease}
          aria-label="성인 탑승자 한명 늘리기"
        >
          +
        </ControlButton>
      </ControlWrapper>
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
