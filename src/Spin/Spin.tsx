import React, { ChangeEvent } from 'react';
import helpIcon from '../images/help.png';
import minusIcon from '../images/minus.png';
import plusIcon from '../images/plus.png';
import './Spin.css';
import { useState } from 'react';

function Spin() {
  const [passengerAmount, setPassengerAmount] = useState(1);
  const [passengerAmountStatus, setPassengerAmountStatus] = useState('');

  const handleIncreasePassengerAmount = () => {
    if (passengerAmount >= 3) {
      alert('최대 승객은 3명입니다');

      return;
    }

    setPassengerAmount((prev) => prev + 1);
    setPassengerAmountStatus('추가');
  };

  const handleDecreasePassengerAmount = () => {
    if (passengerAmount <= 1) {
      alert('최소 승객은 1명입니다');

      return;
    }

    setPassengerAmount((prev) => prev - 1);
    setPassengerAmountStatus('감소');
  };

  const handleSetPassengerAmountStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setPassengerAmount(Number(e.target.value));
  };

  return (
    <div className="container">
      <h1>승객 선택</h1>
      <div className="header">
        <h2>성인</h2>
        <img className="help-icon" src={helpIcon} alt="성인에 대한 설명" />
      </div>
      <div className="content">
        <button onClick={handleDecreasePassengerAmount}>
          <img
            src={minusIcon}
            className="minus-icon"
            alt="성인 탑승자 한명 줄이기"
          />
        </button>
        <label htmlFor="성인" aria-hidden="false" hidden>
          성인
        </label>
        <input
          id="성인"
          className="passenger-amount-input"
          type="number"
          onChange={handleSetPassengerAmountStatus}
          value={passengerAmount}
        />
        <button onClick={handleIncreasePassengerAmount}>
          <img
            src={plusIcon}
            className="plus-icon"
            alt="성인 탑승자 한명 늘리기"
          />
        </button>
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          성인 승객 {passengerAmountStatus} {passengerAmount}
        </span>
      </div>
    </div>
  );
}

export default Spin;
