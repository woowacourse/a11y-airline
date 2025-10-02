import { useCallback, useState } from 'react';

import helpIcon from '../assets/help.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

import styles from './FlightBooking.module.css';
import VisuallyHidden from './VisuallyHidden';

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
    <form className={styles.flightBooking} aria-labelledby="flight-booking-title">
      <h2 id="flight-booking-title" className="heading-2-text">
        항공권 예매
      </h2>
      <fieldset className={styles.passengerCount}>
        <legend className="body-text">성인</legend>
        <button
          type="button"
          className={styles.helpIconWrapper}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
        >
          <img
            src={helpIcon}
            alt="도움말"
            className={styles.helpIcon}
            aria-describedby="tooltipInfo"
          />
          {showTooltip ? (
            <span className={styles.tooltip} role="tooltip" id="tooltipInfo">
              최대 3명까지 예약할 수 있습니다
            </span>
          ) : (
            <VisuallyHidden as="span" role="tooltip" id="tooltipInfo">
              최대 3명까지 예약할 수 있습니다
            </VisuallyHidden>
          )}
        </button>

        <p className={styles.counter}>
          <button
            type="button"
            className="button-text"
            onClick={decrementCount}
            aria-label="성인 승객 감소"
          >
            <img src={minus} alt="" />
          </button>
          <span>{adultCount}</span>
          <VisuallyHidden aria-live="polite" aria-atomic="true" as="span">
            성인 {adultCount}명을 선택하였습니다.
          </VisuallyHidden>
          <button
            type="button"
            className="button-text"
            onClick={incrementCount}
            aria-label="성인 승객 증가"
          >
            <img src={plus} alt="" />
          </button>
        </p>
      </fieldset>
      {statusMessage && (
        <span className="visually-hidden" role="alert">
          {statusMessage}
        </span>
      )}
      <button
        type="submit"
        className={styles.searchButton}
        aria-label={`성인 ${adultCount}명 항공편 검색`}
      >
        항공편 검색
      </button>
    </form>
  );
};

export default FlightBooking;
