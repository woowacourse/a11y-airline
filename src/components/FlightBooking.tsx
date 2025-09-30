import { useCallback, useState } from 'react';

import helpIcon from '../assets/help.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

import styles from './FlightBooking.module.css';

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(MIN_PASSENGERS);
  const [message, setMessage] = useState('');

  const incrementCount = useCallback(() => {
    if (adultCount === MAX_PASSENGERS) {
      setMessage('최대 인원입니다');
      return;
    }
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  }, [adultCount]);

  const decrementCount = useCallback(() => {
    if (adultCount === MIN_PASSENGERS) {
      setMessage('최소 인원입니다');
      return;
    }
    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - 1));
  }, [adultCount]);

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={styles.flightBooking}>
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className={styles.passengerCount}>
        <div className={styles.passengerLabel}>
          <label className="body-text">성인</label>
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
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            <img src={minus} alt="" />
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="인원 수 늘리기">
            <img src={plus} alt="" />
          </button>
        </div>
      </div>
      {message && (
        <div className="visually-hidden" role="alert">
          {message}
        </div>
      )}
      <button className={styles.searchButton}>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
