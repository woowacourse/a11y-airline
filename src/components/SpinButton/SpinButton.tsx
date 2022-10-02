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
      <ControlButton onClick={handleClickDecrease}>-</ControlButton>
      <Input value={value} type="number" min={1} max={3} />
      <ControlButton onClick={handleClickIncrease}>+</ControlButton>
    </Wrapper>
  );
};

export default SpinButton;

const Wrapper = styled.div`
  display: flex;
`;

const ControlButton = styled.button``;

const Input = styled.input``;
