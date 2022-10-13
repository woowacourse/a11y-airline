import React, { useState } from "react";
import "./spin-button.css";

const COUNT = {
  MIN: 0,
  MAX: 3,
};

const isCountInRange = (count: number) =>
  count >= COUNT.MIN && count <= COUNT.MAX;

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number | "">(COUNT.MIN);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [ariaMessage, setAriaMessage] = useState("");

  const handleTooltipClick = () => {
    setIsTooltipOpen((prev) => !prev);
  };

  const handleTooltipCloseButtonClick = () => {
    setIsTooltipOpen(false);
  };

  const handleDecreaseButtonClick = () => {
    setCount((prev) => {
      if (prev === "") {
        setAriaMessage(`성인 승객 감소 ${COUNT.MIN}`);
        return COUNT.MIN;
      }

      if (prev - 1 < COUNT.MIN) {
        setAriaMessage(`최소 성인 수는${COUNT.MIN}명 입니다.`);
        return prev;
      }

      setAriaMessage(`성인 승객 감소 ${prev - 1}`);
      return prev - 1;
    });
  };

  const handleIncreaseButtonClick = () => {
    setCount((prev) => {
      if (prev === "") {
        setAriaMessage(`성인 승객 추가 ${COUNT.MIN + 1}`);
        return COUNT.MIN + 1;
      }

      if (prev + 1 > COUNT.MAX) {
        setAriaMessage(`최대 성인 수는${COUNT.MAX}명 입니다.`);
        return prev;
      }

      setAriaMessage(`성인 승객 추가 ${prev + 1}`);
      return prev + 1;
    });
  };

  const handleCountChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (value === "") {
      setCount(value);
      setAriaMessage("성인 입력값 빔");
      return;
    }
    if (!isCountInRange(Number(value))) {
      setAriaMessage(
        `${COUNT.MIN}부터 ${COUNT.MAX}사이의 값만 입력할 수 있습니다.`
      );
      return;
    }
    setCount(Number(value));
    setAriaMessage(`성인 ${Number(value)}명 입력됨`);
  };

  return (
    <div>
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
        <div id="tooltip-content">
          <div>국제선 만 12세 이상, 국내선 만 13세 이상</div>
          <button aria-label="닫기" onClick={handleTooltipCloseButtonClick}>
            x
          </button>
        </div>
      )}
      <div className="container">
        <button
          className="spin-button"
          type="button"
          aria-label="성인 탑승자 한명 감소"
          disabled={count <= COUNT.MIN}
          aria-disabled={count <= COUNT.MIN}
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
          disabled={count >= COUNT.MAX}
          aria-disabled={count >= COUNT.MAX}
          onClick={handleIncreaseButtonClick}
        >
          +
        </button>
        <span
          className="hidden"
          aria-atomic
          aria-live="assertive"
          aria-relevant="additions"
        >
          {ariaMessage}
        </span>
      </div>
    </div>
  );
};

export default SpinButton;
