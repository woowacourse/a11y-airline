import { useState } from 'react';

import styles from './FlightBooking.module.css';
import VisuallyHidden from './VisuallyHidden';

const MAX_PASSENGERS = 3;
const MIN_PASSENGERS = 1;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [announcement, setAnnouncement] = useState('');

  const incrementCount = () => {
    if (adultCount < MAX_PASSENGERS) {
      const newCount = adultCount + 1;
      setAdultCount(newCount);

      if (newCount === MAX_PASSENGERS) {
        setAnnouncement('성인 승객 증가, 최대 승객 수에 도달했습니다.');
      } else {
        setAnnouncement('성인 승객 증가');
      }
    } else {
      setAnnouncement('최대 승객수 입니다');
    }
  };

  const decrementCount = () => {
    if (adultCount > MIN_PASSENGERS) {
      const newCount = adultCount - 1;
      setAdultCount(newCount);
      setAnnouncement('성인 승객 감소');
    } else {
      setAnnouncement('최소 승객수 입니다');
    }
  };

  return (
    <div className={styles['flight-booking']}>
      <VisuallyHidden>
        <div aria-live="assertive">{announcement}</div>
      </VisuallyHidden>
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className={styles['passenger-count']}>
        <span className="body-text">성인</span>
        <div className={styles.counter}>
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가">
            +
          </button>
        </div>
      </div>
      <button className={styles['search-button']}>항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
