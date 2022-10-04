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
  const [isShowTooltip, setIsShowTooltip] = useState(false);

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
      <StyledAdultHeading>
        <h2>성인</h2>
        <StyledTooltip>
          <div
            onMouseEnter={() => setIsShowTooltip(true)}
            onMouseLeave={() => setIsShowTooltip(false)}
          >
            ?
          </div>
          {isShowTooltip && <p aria-live='polite'>티켓은 최대 3장 구매 가능합니다.</p>}
        </StyledTooltip>
      </StyledAdultHeading>
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

const StyledAdultHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & > h2 {
    white-space: nowrap;
  }
`;

const StyledTooltip = styled.div`
  position: relative;
  width: 100%;
  block-size: fit-content;

  & > div {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
  }

  & > p {
    position: absolute;
    top: 0px;
    left: 0;
    transform: translate(50px, 25%);
    margin: 0;
  }
`;
