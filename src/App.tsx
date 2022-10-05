import React from 'react';
import helpIcon from './images/help.png';
import minusIcon from './images/minus.png';
import plusIcon from './images/plus.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [passengerAmount, setPassengerAmount] = useState(1);
  const handleIncreasePassengerAmount = () => {
    setPassengerAmount((prev) => {
      if (prev >= 3) {
        alert('최대 승객은 3명입니다');

        return prev;
      }

      return prev + 1;
    });
  };

  const handleDecreasePassengerAmount = () => {
    setPassengerAmount((prev) => {
      if (prev <= 1) {
        alert('최소 승객은 1명입니다');

        return prev;
      }

      return prev - 1;
    });
  };

  return (
    <div className="container">
      <h1>승객 선택</h1>
      <div className="header">
        <h2>성인</h2>
        <img className="help-icon" src={helpIcon} alt="성인에 대한 설명" />
      </div>
      <div className="content">
        <button>
          <img
            src={minusIcon}
            className="minus-icon"
            onClick={handleDecreasePassengerAmount}
            alt="성인 탑승자 한명 줄이기"
          />
        </button>
        <div className="passenger-amount-wrapper">
          <span>{passengerAmount}</span>
        </div>
        <button>
          <img
            src={plusIcon}
            className="plus-icon"
            onClick={handleIncreasePassengerAmount}
            alt="성인 탑승자 한명 늘리기"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
