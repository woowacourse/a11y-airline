import React, { useState } from "react";
import "./style.css";

import HelpToolTip from "../HelpToolTip";

import { PASSENGER_TYPE, ValueOf } from "../../types";

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

  const handlePlusButton = () => {
    if (count >= maxCount) return;

    setCount((prev) => prev + 1);
  };

  const handleMinusButton = () => {
    if (count <= minCount) return;

    setCount((prev) => prev - 1);
  };

  const handleHelpToggle = () => {
    setHelpOpen((prev) => !prev);
  };

  return (
    <div className="counter">
      <div className="flexBox passenger__item">
        <label>{passengerType}</label>
        <HelpToolTip
          passengerType={passengerType}
          helpOpen={helpOpen}
          onClick={handleHelpToggle}
        />
      </div>
      <div className="flexBox">
        <button className="counter__btn" onClick={handleMinusButton}>
          -
        </button>
        <input value={count} type="number" min={0} max={maxCount} />
        <button className="counter__btn" onClick={handlePlusButton}>
          +
        </button>
      </div>
    </div>
  );
}
