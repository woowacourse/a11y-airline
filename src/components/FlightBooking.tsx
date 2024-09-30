import { useCallback, useState } from 'react';

import helpIcon from '../assets/help.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

import styles from './FlightBooking.module.css';
import useElementId from '../hooks/useElementId';

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;
const STEP = 1;
const TOOL_TIP_MESSAGE = '최대 3명까지 예약할 수 있습니다';

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(MIN_PASSENGERS);
  const [statusMessage, setStatusMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const elementId = useElementId({ childrenNameList: ['countLabel'] });

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

  const openTooltip = () => setShowTooltip(true);
  const closeTooltip = () => setShowTooltip(false);

  return (
    <section className={styles.flightBooking}>
      <form className={styles.form}>
        <h2 className="heading-2-text">항공권 예매</h2>
        <section className={styles.passengerCount}>
          <div id={elementId.countLabel} className={styles.passengerLabel}>
            <h3 className="body-text">성인</h3>
            <div
              className={styles.helpIconButton}
              tabIndex={0}
              aria-label={`도움말: ${TOOL_TIP_MESSAGE}`}
              onMouseEnter={openTooltip}
              onMouseLeave={closeTooltip}
              onFocus={openTooltip}
              onBlur={closeTooltip}
            >
              {showTooltip && (
                <div role="alert" className={styles.tooltip}>
                  {TOOL_TIP_MESSAGE}
                </div>
              )}
              <img src={helpIcon} alt="" className={styles.helpIcon} />
            </div>
          </div>
          <div aria-labelledby={elementId.countLabel} className={styles.counter}>
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
        </section>
        <div role="alert" className={styles.statusMessage}>
          {statusMessage}
        </div>
        <button className={styles.searchButton}>항공편 검색</button>
      </form>
    </section>
  );
};

export default FlightBooking;
