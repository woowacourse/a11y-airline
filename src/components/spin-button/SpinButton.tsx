import React, { useState } from "react";
import "./spin-button.css";

const COUNT = {
  MIN: 0,
  MAX: 3,
};

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number | "">(COUNT.MIN);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleTooltipClick = () => {
    setIsTooltipOpen((prev) => !prev);
  };

  const handleDecreaseButtonClick = () => {
    setCount((prev) => {
      if (prev === "") return COUNT.MIN;
      return prev - 1 >= COUNT.MIN ? prev - 1 : prev;
    });
  };

  const handleIncreaseButtonClick = () => {
    setCount((prev) => {
      if (prev === "") return COUNT.MIN;
      return prev + 1 <= COUNT.MAX ? prev + 1 : prev;
    });
  };

  const isCountInRange = (count: number) =>
    count >= COUNT.MIN && count <= COUNT.MAX;
  const handleCountChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (value === "") {
      setCount(value);
      return;
    }
    if (!isCountInRange(Number(value))) return;
    setCount(Number(value));
  };

  return (
    <>
      <h2>승객 선택</h2>
      <label htmlFor="spin-button-count">성인</label>
      <button
        className="tooltip"
        aria-label="성인 기준 상세 안내"
        aria-controls="tooltip-content"
        aria-expanded={isTooltipOpen}
        type="button"
        onClick={handleTooltipClick}
      >
        ?
      </button>
      {isTooltipOpen && (
        <div id="tooltip-content">국제선 만 12세 이상, 국내선 만 13세 이상</div>
      )}
      <div className="container">
        <button
          className="spin-button"
          type="button"
          aria-label="성인 탑승자 한명 감소"
          onClick={handleDecreaseButtonClick}
        >
          -
        </button>
        <input
          id="spin-button-count"
          className="count"
          type="tel"
          maxLength={1}
          value={count}
          onChange={handleCountChange}
        />
        <button
          className="spin-button"
          type="button"
          aria-label="성인 탑승자 한명 증가"
          onClick={handleIncreaseButtonClick}
        >
          +
        </button>
        <div
          className="hidden"
          aria-atomic
          aria-live="assertive"
          aria-relevant="additions"
        >
          성인 승객 추가 {count}
        </div>
      </div>
    </>
  );
};

export default SpinButton;
