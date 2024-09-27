import { useCallback, useId, useState } from 'react';

import helpIcon from '../assets/help.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

import styles from './FlightBooking.module.css';

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;
const STEP = 1;
const TOOL_TIP_MESSAGE = '최대 3명까지 예약할 수 있습니다';

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(MIN_PASSENGERS);
  const [statusMessage, setStatusMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const flightBookingId = useId();

  const makeElementId = (id: string) => `${flightBookingId}__${id}`;

  const ELEMENT_ID = {
    count: makeElementId('count'),
    helpLabel: makeElementId('help-label')
  };
  const incrementCount = useCallback(() => {
    if (adultCount === MAX_PASSENGERS) {
      setStatusMessage('최대 승객 수에 도달했습니다');
      return;
    }

    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + STEP));
    setStatusMessage('');
  }, [adultCount]);

  const decrementCount = useCallback(() => {
    if (adultCount === MIN_PASSENGERS) {
      setStatusMessage('최소 1명의 승객이 필요합니다');
      return;
    }

    setAdultCount((prev) => Math.max(MIN_PASSENGERS, prev - STEP));
    setStatusMessage('');
  }, [adultCount]);

  return (
    <section className={styles.flightBooking}>
      <form className={styles.form}>
        <legend className="heading-2-text">항공권 예매</legend>
        <fieldset className={styles.passengerCount}>
          <div className={styles.passengerLabel}>
            <label htmlFor={ELEMENT_ID.count} className="body-text">
              성인
            </label>
            <div
              className={styles.helpIconWrapper}
              aria-label="도움말 버튼"
              onTouchStart={() => setShowTooltip(true)}
              onTouchEnd={() => setShowTooltip(false)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <img src={helpIcon} alt="" className={styles.helpIcon} />
              {showTooltip && (
                <div role="alert" className={styles.tooltip}>
                  {TOOL_TIP_MESSAGE}
                </div>
              )}
            </div>
          </div>
          <div id={ELEMENT_ID.count} className={styles.counter}>
            <button
              type="button"
              className="button-text"
              onClick={decrementCount}
              aria-label="성인 승객 감소"
            >
              <img src={minus} alt="" />
            </button>
            <output aria-live="polite">{adultCount}</output>
            <button
              type="button"
              className="button-text"
              onClick={incrementCount}
              aria-label="성인 승객 증가"
            >
              <img src={plus} alt="" />
            </button>
          </div>
        </fieldset>
        {statusMessage && (
          <div className="visually-hidden" role="alert">
            {statusMessage}
          </div>
        )}
        <button className={styles.searchButton}>항공편 검색</button>
      </form>
    </section>
  );
};

export default FlightBooking;
