import styled from '@emotion/styled';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickPlusButton = () => {
    if (count >= 3) {
      return;
    }
    setCount(count => count + 1);
  };

  const handleClickMinusButton = () => {
    if (count <= 0) {
      return;
    }
    setCount(count => count - 1);
  };

  return (
    <div>
      <h1>승객 선택</h1>
      <h2>성인</h2>?
      <StyledCounter>
        <button onClick={handleClickMinusButton} aria-label='성인 탑승자 한명 줄이기'>
          -
        </button>
        <span>{count}</span>
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
