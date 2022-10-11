import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import useAnnounceMessage from './useAnnounceMessage';

const PASSENGER_COUNT = {
  max: 3,
  min: 0,
};

const App = () => {
  const [count, setCount] = useState(PASSENGER_COUNT.min);
  const { announceMessage } = useAnnounceMessage();
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const tooltipTimerRef = useRef<number>();

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

  const showTooltip = () => {
    setIsShowTooltip(true);
    if (tooltipTimerRef.current) {
      clearTimeout(tooltipTimerRef.current);
    }

    tooltipTimerRef.current = window.setTimeout(() => {
      setIsShowTooltip(false);
    }, 3000);
  };

  return (
    <section>
      <h1>승객 선택</h1>
      <form>
        <StyledAdultHeading>
          <label htmlFor='adult'>성인</label>
          <StyledTooltip>
            <button
              type='button'
              onClick={showTooltip}
              onMouseEnter={showTooltip}
              aria-label='성인 기준 안내'
            >
              ?
            </button>
            {isShowTooltip && (
              <p role='status' aria-live='polite'>
                만 20세 이상
              </p>
            )}
          </StyledTooltip>
        </StyledAdultHeading>
        <StyledCounter>
          <button
            type='button'
            onClick={handleClickMinusButton}
            aria-label='성인 탑승자 한명 줄이기'
            disabled={count <= PASSENGER_COUNT.min}
          >
            -
          </button>
          <input type='number' id='adult' value={count} />
          <button
            type='button'
            onClick={handleClickPlusButton}
            aria-label='성인 탑승자 한명 늘리기'
            disabled={count >= PASSENGER_COUNT.max}
          >
            +
          </button>
        </StyledCounter>
      </form>
    </section>
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
  & > label {
    white-space: nowrap;
    font-size: 24px;
    margin: 12px 0;
  }
`;

const StyledTooltip = styled.div`
  position: relative;
  width: 100%;
  block-size: fit-content;

  & > button {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    text-align: center;
    background-color: white;
  }

  & > p {
    position: absolute;
    top: 0px;
    left: 0;
    transform: translate(50px, 25%);
    margin: 0;
  }
`;
