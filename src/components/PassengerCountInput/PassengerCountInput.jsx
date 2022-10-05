import React from "react";
import "./PassengerCountInput.css";

function PassengerCountInput() {
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
        <button className="spin-button count-decrease">-</button>
        <input
          className="passenger-count-input"
          id="adult"
          type="number"
          min="0"
          max="3"
        />
        <button className="spin-button count-increase">+</button>
      </div>
    </>
  );
}

export default PassengerCountInput;
