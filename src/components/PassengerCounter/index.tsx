import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "./style.css";

import HelpToolTip from "../HelpToolTip";

import { PASSENGER_TYPE, ValueOf } from "../../types";

const INITIAL_COUNT = 1;

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
  const [count, setCount] = useState(INITIAL_COUNT);
  const [helpOpen, setHelpOpen] = useState(false);
  const [description, setDescription] = useState("");
  const changedStatus = useRef("");

  const handlePlusButton = () => {
    if (isNaN(count)) setCount(0);
    if (count >= maxCount) return;

    changedStatus.current = "추가";
    setCount((prev) => prev + 1);
  };

  const handleMinusButton = () => {
    if (count <= minCount) return;

    changedStatus.current = "감소";
    setCount((prev) => prev - 1);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    if (value < minCount || value > maxCount) {
      alert(`${minCount} ~ ${maxCount} 범위의 값을 입력해주세요`);
      setCount(INITIAL_COUNT);
      return;
    }

    if (isNaN(value)) {
      setCount(value);
      return;
    }

    changedStatus.current = "";
    setCount(value);
  };

  const handleHelpToggle = () => {
    setHelpOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isNaN(count)) {
      setDescription(`${passengerType} 승객 ${changedStatus.current} ${count}`);
    }
  }, [count]);

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
          aria-label={`${passengerType} 탑승자 한명 줄이기`}
          disabled={count <= minCount || isNaN(count)}
        >
          -
        </button>
        <label
          htmlFor={`${passengerType}-Count`}
          aria-live="polite"
          className="sr-only"
        >
          {description}
        </label>
        <input
          id={`${passengerType}-Count`}
          value={count}
          type="number"
          min={minCount}
          max={maxCount}
          onChange={handleInputChange}
        />
        <button
          className="counter__btn"
          onClick={handlePlusButton}
          aria-label={`${passengerType} 탑승자 한명 늘리기`}
          disabled={count >= maxCount}
        >
          +
        </button>
      </div>
    </section>
  );
}
