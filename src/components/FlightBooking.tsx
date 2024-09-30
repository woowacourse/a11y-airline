import { useState } from 'react';

import helpIcon from '../assets/help.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

import styles from './FlightBooking.module.css';
import useAdultCount from '../hooks/useAdultCount';

const FlightBooking = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { adultCount, incrementCount, decrementCount, alertMessage, messageForATUser } =
    useAdultCount();

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
            {showTooltip && (
              <div className={styles.tooltip} role="alert">
                최대 3명까지 예약할 수 있습니다
              </div>
            )}
          </div>
        </div>
        <div className={styles.counter}>
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            <img src={minus} alt="" />
          </button>
          {messageForATUser && (
            <div
              className="visually-hidden"
              aria-live="polite"
              aria-atomic="true"
              aria-relevant="additions"
            >
              <p>{messageForATUser}</p>
            </div>
          )}
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가">
            <img src={plus} alt="" />
          </button>
        </div>
      </div>
      {alertMessage && (
        <div className="visually-hidden" role="alert">
          {alertMessage}
        </div>
      )}
      <button className={styles.searchButton}>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
