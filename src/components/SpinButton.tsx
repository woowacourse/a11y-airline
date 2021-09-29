import { ChangeEvent, useRef, useState } from "react";

const LIMIT_COUNT = {
  MIN: 1,
  MAX: 3
} as const;

const SpinButton = () => {
  const [count, setCount] = useState(1);

  const canIncrease = count < LIMIT_COUNT.MAX;
  const canDecrease = LIMIT_COUNT.MIN < count;

  const onClickDecreaseButton = () => {
    if (!canDecrease) {
      alert(`최소 인원은 ${LIMIT_COUNT.MIN}명입니다.`);

      return;
    }

    setCount(state => state - 1);
  };

  const onClickIncreaseButton = () => {
    if (!canIncrease) {
      alert(`최대 인원은 ${LIMIT_COUNT.MAX}명입니다.`);

      return;
    }

    setCount(state => state + 1);
  };

  const onChangeCount = (event: ChangeEvent) => {
    const _count = Number((event.target as HTMLInputElement).value);

    setCount(_count);
  };

  return (
    <div>
      <button
        type="button"
        onClick={onClickDecreaseButton}
        disabled={!canDecrease}
      >
        -
      </button>

      <label htmlFor="count"></label>
      <input
        id="count"
        value={count}
        type="number"
        onChange={onChangeCount}
        min={LIMIT_COUNT.MIN}
        max={LIMIT_COUNT.MAX}
      />

      <button
        type="button"
        onClick={onClickIncreaseButton}
        disabled={!canIncrease}
      >
        +
      </button>
    </div>
  );
};

export default SpinButton;
