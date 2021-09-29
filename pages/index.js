import { useEffect, useState } from 'react';
import Head from 'next/head';

import styles from '../src/styles/index.module.css';

const DEFAULT_PASSENGER_NUMBER = 1;
const MIN_PASSENGER_NUMBER = 1;
const MAX_PASSENGER_NUMBER = 3;

const ERROR_PASSENGER_NUMBER_OVER_MAX = 0;
const PASSENGER_NUMBER_IS_VALID = 1;
const ERROR_PASSENGER_NUMBER_UNDER_MIN = 2;

const MESSAGES = {
  [ERROR_PASSENGER_NUMBER_OVER_MAX]: `성인 승객은 최대 ${MAX_PASSENGER_NUMBER}명 까지만 설정할 수 있습니다.`,
  [ERROR_PASSENGER_NUMBER_UNDER_MIN]: `성인 승객은 최소 ${MIN_PASSENGER_NUMBER}명 이상이어야 합니다.`,
};

const checkValidatePassengerNumber = (passenger) => {
  if (passenger < MIN_PASSENGER_NUMBER) {
    return ERROR_PASSENGER_NUMBER_UNDER_MIN;
  }

  if (passenger > MAX_PASSENGER_NUMBER) {
    return ERROR_PASSENGER_NUMBER_OVER_MAX;
  }

  return PASSENGER_NUMBER_IS_VALID;
};

const HomePage = () => {
  const [passenger, setPassenger] = useState(DEFAULT_PASSENGER_NUMBER);
  const [statusText, setStatusText] = useState('');
  const [alertText, setAlertText] = useState('');

  const [isTooltipOn, setIsTooltipOn] = useState(false);

  const onIncrease = () => {
    if (passenger >= MAX_PASSENGER_NUMBER) {
      return;
    }

    setPassenger(passenger + 1);
    setStatusText(`성인 승객 추가 ${passenger + 1}명`);
  };

  const onDecrease = () => {
    if (passenger <= MIN_PASSENGER_NUMBER) {
      return;
    }

    setPassenger(passenger - 1);
    setStatusText(`성인 승객 감소 ${passenger - 1}명`);
  };

  const onChangePassengerNumber = (event) => {
    const value = event.target.value;
    setPassenger(value);

    if (value <= MAX_PASSENGER_NUMBER && value >= MIN_PASSENGER_NUMBER) {
      setStatusText(`성인 승객 설정 ${value}명`);
    }
  };

  const onBlurPassengerInput = () => {
    if (passenger < MIN_PASSENGER_NUMBER) {
      setPassenger(MIN_PASSENGER_NUMBER);
      setStatusText(`성인 승객 대치됨 ${MIN_PASSENGER_NUMBER}명`);
      return;
    }
    if (passenger > MAX_PASSENGER_NUMBER) {
      setPassenger(MAX_PASSENGER_NUMBER);
      setStatusText(`성인 승객 대치됨 ${MAX_PASSENGER_NUMBER}명`);
      return;
    }
  };

  useEffect(() => {
    const isValidPassengerNumber = checkValidatePassengerNumber(passenger);

    if (isValidPassengerNumber !== PASSENGER_NUMBER_IS_VALID) {
      setAlertText(MESSAGES[isValidPassengerNumber]);
      return;
    }

    setAlertText('');
  }, [passenger]);

  // input 입력 후 enter시 이벤트 막기 위함
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const offTooltip = () => {
    setIsTooltipOn(false);
  };

  const onTooltip = () => {
    setIsTooltipOn(true);
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" type="icon" href="/images/favicon.ico" />

        <title>우테코 항공 | 예약하기</title>
      </Head>
      <main>
        <h1 className={styles.page_top_hidden__heading}>우테코 항공</h1>
        <h2>예약하기</h2>
        <form onSubmit={onSubmit}>
          <div className={styles.flex_column}>
            <div className={styles.flex}>
              <label htmlFor="adult-passenger-number" className={styles.form__label}>
                성인
              </label>
              <div className={styles.flex}>
                <button
                  type="button"
                  aria-label="성인 항목 툴팁"
                  aria-describedby="tip-adult"
                  className={styles.tooltip}
                  onClick={onTooltip}
                  onMouseEnter={onTooltip}
                  onMouseLeave={offTooltip}
                  onBlur={offTooltip}
                >
                  ?
                </button>
                <p
                  id="tip-adult"
                  aria-role="tooltip"
                  className={styles.tooltip_content}
                  hidden={!isTooltipOn}
                >
                  (만 16세 이상)
                </p>
              </div>
            </div>
            <p
              id="passenger-hint"
              className={styles.sub_text}
            >{`최소 ${MIN_PASSENGER_NUMBER}명, 최대 ${MAX_PASSENGER_NUMBER}명`}</p>
            <div className={styles.flex}>
              <button
                type="button"
                className={styles.round__button}
                aria-label="성인 탑승자 한명 줄이기"
                onClick={onDecrease}
                aria-disabled={passenger <= MIN_PASSENGER_NUMBER}
              >
                -
              </button>
              <input
                type="number"
                id="adult-passenger-number"
                className={styles.passenger__input}
                max={MAX_PASSENGER_NUMBER}
                min={MIN_PASSENGER_NUMBER}
                value={passenger}
                onChange={onChangePassengerNumber}
                onBlur={onBlurPassengerInput}
                aria-describedby="passenger-hint"
              />
              <button
                type="button"
                className={styles.round__button}
                aria-label="성인 탑승자 한명 늘리기"
                onClick={onIncrease}
                aria-disabled={passenger >= MAX_PASSENGER_NUMBER}
              >
                +
              </button>
            </div>
            <p role="status" className={styles.status}>
              {statusText}
            </p>
            <p role="alert" className={styles.error_text}>
              {alertText}
            </p>
          </div>
        </form>
      </main>
    </>
  );
};

export default HomePage;
