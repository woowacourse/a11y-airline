import { TOOLTIP_INFO } from '../../constants/passenger';
import styles from './styles.module.scss';
import usePassengerItem from './usePassengerItem';

interface Props {
  passengerType: '성인' | '소아' | '유아';
  minNumber?: number;
  maxNumber?: number;
}

const PassengerItem = ({
  passengerType,
  minNumber = 0,
  maxNumber = 3,
}: Props) => {
  const {
    toggleInfo,
    isShowInfo,
    passengerNumber,
    onClickSubtractButton,
    onChangeInput,
    onClickAddButton,
    statusMessage,
    alertMessage,
  } = usePassengerItem(passengerType, minNumber, maxNumber);

  return (
    <article className={styles.passengerItem}>
      <div className={styles.passengerTitle}>
        <label htmlFor={`${passengerType}-passenger-number`}>
          {passengerType}
        </label>
        <button
          onClick={toggleInfo}
          type="button"
          aria-label={`${passengerType} 기준 상세안내`}
          aria-expanded={isShowInfo}
          aria-describedby="popover-info"
          aria-controls="popover-info"
          aria-haspopup="dialog"
        >
          ?
        </button>
        <div className={styles.popover}>
          {isShowInfo && (
            <p id="popover-info">{TOOLTIP_INFO[`${passengerType}`]}</p>
          )}
        </div>
      </div>

      <div className={styles.passengerNumberControl}>
        <button
          className={passengerNumber <= minNumber ? styles.disabled : ''}
          onClick={onClickSubtractButton}
          type="button"
          aria-label={`${passengerType} 탑승자 한명 줄이기`}
          aria-disabled={passengerNumber <= minNumber}
        >
          -
        </button>
        <input
          id={`${passengerType}-passenger-number`}
          value={passengerNumber}
          type="tel"
          min={minNumber}
          max={maxNumber}
          maxLength={1}
          onChange={onChangeInput}
        />
        <button
          className={passengerNumber >= maxNumber ? styles.disabled : ''}
          onClick={onClickAddButton}
          type="button"
          aria-label={`${passengerType} 탑승자 한명 늘리기`}
          aria-disabled={passengerNumber >= maxNumber}
        >
          +
        </button>
        <div>
          {alertMessage !== '' && (
            <p role="alert" className={styles.alertMessage}>
              {alertMessage}
            </p>
          )}
        </div>
        <div className="sr-only">
          <p role="status">{statusMessage}</p>
        </div>
      </div>
    </article>
  );
};

export default PassengerItem;
