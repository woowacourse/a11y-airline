import React, { useState } from "react";
import "./PassengerCountInput.css";

function PassengerCountInput() {
  const [count, setCount] = useState(1);

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
        <button
          className="passenger-type-explanation-button"
          aria-label="성인 탑승자에 대한 설명 보기"
          aria-hidden="true"
        >
          {/* <span className="tooltip-icon" aria-hidden="true"> */}?
          {/* </span> */}
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
          aria-label="성인 탑승자 한명 줄이기"
        >
          <span aria-hidden="true">-</span>
        </button>
        <input
          className="passenger-count-input"
          id="adult"
          type="number"
          min="0"
          max="3"
          value={count}
        />
        <button
          onClick={handleIncreaseCount}
          className={
            count === 3
              ? "spin-button count-increase disabled"
              : "spin-button count-increase"
          }
          aria-label="성인 탑승자 한명 늘리기"
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </>
  );
}

export default PassengerCountInput;
