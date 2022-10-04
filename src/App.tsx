import styled from '@emotion/styled';
import { useState } from 'react';
import useAnnounceMessage from './useAnnounceMessage';

const PASSENGER_COUNT = {
  max: 3,
  min: 0,
};

const App = () => {
  const [count, setCount] = useState(PASSENGER_COUNT.min);
  const { announceMessage } = useAnnounceMessage();

  const handleClickPlusButton = () => {
    if (count >= PASSENGER_COUNT.max) {
      announceMessage(`승객은 최대 ${PASSENGER_COUNT.max}명입니다. `);

      return;
    }
    const changedCount = count + 1;
    setCount(changedCount);
    announceMessage(`승객 추가 ${changedCount}`);
  };

  const handleClickMinusButton = () => {
    if (count <= PASSENGER_COUNT.min) {
      announceMessage(`승객은 ${PASSENGER_COUNT.min}이하로 내릴 수 없습니다.`);

      return;
    }
    const changedCount = count - 1;
    announceMessage(`승객 감소 ${changedCount}`);
    setCount(changedCount);
  };

  return (
    <div>
      <h1>승객 선택</h1>
      <h2>성인</h2>?
      <StyledCounter>
        <button onClick={handleClickMinusButton} aria-label='성인 탑승자 한명 줄이기'>
          -
        </button>
        <input type='number' value={count} />
        <button onClick={handleClickPlusButton} aria-label='성인 탑승자 한명 늘리기'>
          +
        </button>
      </StyledCounter>
    </div>
  );
};

export default App;

const StyledCounter = styled.div`
  display: flex;
  gap: 20px;
`;
