import { ChangeEvent, useState } from "react";

const LIMIT_COUNT = {
  MIN: 1,
  MAX: 3
} as const;

const SpinButton = () => {
  const [count, setCount] = useState<number>(LIMIT_COUNT.MIN);

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
    const canChange = LIMIT_COUNT.MIN <= _count && _count <= LIMIT_COUNT.MAX;

    if (canChange) setCount(_count);
  };

  return (
    <div>
      <h2 aria-current="page">승객 선택</h2>
      <h3>성인</h3>
      <button
        type="button"
        onClick={onClickDecreaseButton}
        aria-label="성인 탑승자 한명 줄이기 버튼"
        aria-invalid={!canDecrease}
        aria-errormessage={`최소 탑승 인원은 ${LIMIT_COUNT.MIN}명까지 입니다.`}
      >
        -
      </button>

      <input
        id="count"
        value={count}
        type="number"
        onChange={onChangeCount}
        min={LIMIT_COUNT.MIN}
        max={LIMIT_COUNT.MAX}
        aria-label={`성인 ${count} 텍스트 숫자만 수정`}
        readOnly
      />

      <button
        type="button"
        onClick={onClickIncreaseButton}
        aria-label="성인 탑승자 한명 늘리기 버튼"
        aria-invalid={!canIncrease}
        aria-errormessage={`최대 탑승 인원은 ${LIMIT_COUNT.MAX}명까지 입니다.`}
      >
        +
      </button>

      <span
        role="status"
        aria-live="assertive"
        aria-label={`성인 승객 추가 ${count}명`}
      ></span>
    </div>
  );
};

export default SpinButton;
