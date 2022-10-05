import React, { useState } from "react";
import "./PassengerCountInput.css";

function PassengerCountInput() {
  const [count, setCount] = useState(0);

  const handleDecreaseCount = () => {
    if (count === 0) {
      alert("0명 이하를 선택할 수 없습니다.");
      return;
    }
    setCount(count - 1);
  };

  const handleIncreaseCount = () => {
    if (count === 3) {
      alert("최대 3명까지 선택가능합니다.");
      return;
    }
    setCount(count + 1);
  };

  return (
    <>
      <h2>승객 선택</h2>

      {/* TODO: 이후 이 부분은 재사용 컴포넌트로 빼도 될듯 (성인 이외 다른 것도 들어올 수 있도록)  */}
      <div className="passenger-type-container">
        <label className="passenger-type-name" htmlFor="adult">
          성인
        </label>
        <button className="passenger-type-explanation-button">
          <span className="tooltip-icon">?</span>
        </button>
      </div>

      <div className="passenger-count-input-container">
        <button
          className={
            count === 0
              ? "spin-button count-decrease disabled"
              : "spin-button count-decrease"
          }
          onClick={handleDecreaseCount}
        >
          -
        </button>
        <input
          className="passenger-count-input"
          id="adult"
          type="number"
          min="0"
          max="3"
          value={count}
          readOnly
        />
        <button
          onClick={handleIncreaseCount}
          className={
            count === 3
              ? "spin-button count-increase disabled"
              : "spin-button count-increase"
          }
        >
          +
        </button>
      </div>
    </>
  );
}

export default PassengerCountInput;
