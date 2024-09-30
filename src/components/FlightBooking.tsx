import { useCallback, useState } from 'react';

import helpIcon from '../assets/help.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

import styles from './FlightBooking.module.css';

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(MIN_PASSENGERS);
  const [statusMessage, setStatusMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const incrementCount = useCallback(() => {
    if (adultCount === MAX_PASSENGERS) {
      setStatusMessage('최대 승객 수에 도달했습니다');
      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
    setStatusMessage('');
  }, [adultCount]);

  const decrementCount = useCallback(() => {
    if (adultCount === MIN_PASSENGERS) {
      setStatusMessage('최소 1명의 승객이 필요합니다');
      return;
    }

    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - 1));
    setStatusMessage('');
  }, [adultCount]);

  return (
    <div className={styles.flightBooking}>
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className={styles.passengerCount}>
        <div className={styles.passengerLabel}>
          <span className="body-text">성인</span>
          <div
            className={styles.helpIconWrapper}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <img src={helpIcon} alt="도움말" className={styles.helpIcon} />
            {showTooltip && <div className={styles.tooltip}>최대 3명까지 예약할 수 있습니다</div>}
          </div>
        </div>
        <div className={styles.counter}>
          <button
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 감소"
            aria-disabled={adultCount <= MIN_PASSENGERS}
          >
            <img src={minus} alt="" />
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 증가"
            aria-disabled={adultCount >= MAX_PASSENGERS}
          >
            <img src={plus} alt="" />
          </button>
        </div>
      </div>
      {statusMessage && (
        <div role="status" aria-live="assertive">
          {statusMessage}
        </div>
      )}
      <button className={styles.searchButton}>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
