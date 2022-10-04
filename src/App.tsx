import styled from '@emotion/styled';
import { useState } from 'react';
import useAnnounceMessage from './useAnnounceMessage';

const App = () => {
  const [count, setCount] = useState(0);
  const { announceMessage } = useAnnounceMessage();

  const handleClickPlusButton = () => {
    if (count >= 3) {
      return;
    }
    const changedCount = count + 1;
    setCount(changedCount);
    announceMessage(`승객 추가 ${changedCount}`);
  };

  const handleClickMinusButton = () => {
    if (count <= 0) {
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
