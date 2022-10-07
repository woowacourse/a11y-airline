import React, { useState } from "react";
import "./index.css";
import { PASSENGER, LABEL } from "../../constant";

interface SpinButtonProps {
  label: typeof LABEL.ADULT;
}

const SpinButton = ({ label }: SpinButtonProps) => {
  const [passenger, setPassenger] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleIncrease = () => {
    if (passenger === PASSENGER.MAX) {
      setErrorMessage(`선택할 수 있는 승객은 최대 ${PASSENGER.MAX}명입니다.`);
      return;
    }
    setPassenger((prev) => {
      setResultMessage(`${label} 승객 추가 ${prev + 1}`);
      return prev + 1;
    });
    setErrorMessage("");
  };

  const handleDecrease = () => {
    if (passenger === PASSENGER.MIN) {
      setErrorMessage(`승객은 최소 ${PASSENGER.MIN}명 이상이어야 합니다.`);
      return;
    }
    setPassenger((prev) => {
      setResultMessage(`${label} 승객 제거 ${prev - 1}`);
      return prev - 1;
    });
    setErrorMessage("");
  };

  const handleChangePassenger = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const value = target.valueAsNumber;

    if (value < PASSENGER.MIN) {
      setErrorMessage(`선택할 수 있는 승객은 최대 ${PASSENGER.MAX}명입니다.`);
      return;
    }
    if (value > PASSENGER.MAX) {
      setErrorMessage(`승객은 최소 ${PASSENGER.MIN}명 이상이어야 합니다.`);
      return;
    }
    setPassenger(value);
    setErrorMessage("");
  };

  return (
    <div className="spin-container">
      <label className="passenger-label" htmlFor="passenger-input">
        {label}
      </label>
      <div className="question-icon" aria-labelledby="tool-tip">
        <span aria-hidden>?</span>
      </div>
      <div className="tool-tip" role="tooltip" id="tool-tip">
        {label} 승객을 선택합니다. 더하기 빼기 버튼을 이용해 승객을 증가, 감소
        할 수 있습니다.
      </div>

      <div>
        <button
          type="button"
          aria-label={`${label} 탑승자 한 명 줄이기`}
          className="button"
          onClick={handleDecrease}
        >
          ➖
        </button>
        <input
          type="number"
          min={PASSENGER.MIN}
          max={PASSENGER.MAX}
          id="passenger-input"
          value={passenger}
          onChange={handleChangePassenger}
        />
        <button
          aria-label={`${label} 탑승자 한 명 늘이기`}
          type="button"
          className="button"
          onClick={handleIncrease}
        >
          ➕
        </button>
      </div>
      <div role="alert" className="error-message">
        {errorMessage}
      </div>
      <span className="result-message" role="status" aria-live="assertive">
        {resultMessage}
      </span>
    </div>
  );
};

export default SpinButton;
