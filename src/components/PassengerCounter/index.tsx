import React, { useRef, useState } from "react";
import "./style.css";

import HelpToolTip from "../HelpToolTip";

import { HELP_DESCRIPTION, PASSENGER_TYPE, ValueOf } from "../../types";

interface CounterProp {
  passengerType: ValueOf<typeof PASSENGER_TYPE>;
  minCount?: number;
  maxCount?: number;
}

export default function PassengerCounter({
  passengerType,
  minCount = 0,
  maxCount = 5,
}: CounterProp) {
  const [count, setCount] = useState(1);
  const [helpOpen, setHelpOpen] = useState(false);
  const changedStatus = useRef("");

  const handlePlusButton = () => {
    if (count >= maxCount) return;

    changedStatus.current = "추가";
    setCount((prev) => prev + 1);
  };

  const handleMinusButton = () => {
    if (count <= minCount) return;

    changedStatus.current = "감소";
    setCount((prev) => prev - 1);
  };

  const handleHelpToggle = () => {
    setHelpOpen((prev) => !prev);
  };

  return (
    <section className="counter">
      <div className="flexBox passenger__item">
        <label aria-live="polite">{passengerType}</label>
        <HelpToolTip
          passengerType={passengerType}
          helpOpen={helpOpen}
          onClick={handleHelpToggle}
        />
      </div>
      <div className="flexBox">
        <button
          className="counter__btn"
          onClick={handleMinusButton}
          aria-label={`${passengerType} 탑승자 한명 줄이기 버튼`}
          disabled={count <= minCount}
        >
          -
        </button>
        <label
          htmlFor={`${passengerType} Count`}
          aria-live="polite"
          className="sr-only"
        >
          {HELP_DESCRIPTION[passengerType]}
        </label>
        <input
          id={`${passengerType} Count`}
          value={count}
          type="number"
          min={0}
          max={maxCount}
        />
        <button
          className="counter__btn"
          onClick={handlePlusButton}
          aria-label={`${passengerType} 탑승자 한명 늘리기 버튼 `}
          disabled={count >= maxCount}
        >
          +
        </button>
      </div>
    </section>
  );
}
