import React, { useState } from 'react';
import './App.css';

function App() {
  const [passengerCount, setPassengerCount] = useState(1);

  const handleIncreasePassengerCount = () => {
    if (passengerCount >= 3) {
      alert('한번에 최대 3인만 탑승 가능합니다');
      return;
    }

    setPassengerCount(passengerCount + 1);
  };

  const handleDecreasePassengerCount = () => {
    if (passengerCount <= 0) {
      return;
    }

    setPassengerCount(passengerCount - 1);
  };

  const handleChangePassengerCount: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      const { valueAsNumber } = event.currentTarget;

      if (valueAsNumber < 0) {
        return;
      }

      setPassengerCount(valueAsNumber);
    };

  return (
    <div className="App">
      <main className="main">
        <section className="spin-button-wrapper">
          <h3 className="">성인</h3>
          <button
            type="button"
            aria-label="성인 탑승자 한명 줄이기"
            className="spin-button spin-button--increase"
            onClick={handleDecreasePassengerCount}
          >
            -
          </button>
          <input
            type="number"
            aria-labelledby="passenger-count"
            className="passenger-count-input"
            onChange={handleChangePassengerCount}
            value={passengerCount}
          />
          <button
            type="button"
            aria-label="성인 탑승자 한명 늘리기"
            className="spin-button spin-button--increase"
            onClick={handleIncreasePassengerCount}
          >
            +
          </button>
          <span id="passenger-count" className="visually-hidden" role="status">
            {passengerCount}명
          </span>
        </section>
      </main>
    </div>
  );
}

export default App;
