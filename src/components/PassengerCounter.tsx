import { useState, ChangeEvent } from "react";

interface Props {
  ageGroup: "성인" | "청소년" | "유아";
}

const DEFAULT_COUNT = 1;
const MINIMUM_COUNT = 1;
const MAXIMUM_COUNT = 3;
const COUNT_RANGE_ERROR_MESSAGE = "최소 1명, 최대 3명까지 선택 가능합니다.";

const PassengerCounter = ({ ageGroup }: Props) => {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [descriptionText, setDescriptionText] = useState("");

  const handleDecrementCount = () => {
    if (count === MINIMUM_COUNT) {
      alert(COUNT_RANGE_ERROR_MESSAGE);
      return;
    }
    setCount((prev) => {
      const result = prev - 1;
      setDescriptionText(`${ageGroup} 승객 감소 ${result}`);
      return result;
    });
  };

  const handleIncrementCount = () => {
    if (count === MAXIMUM_COUNT) {
      alert(COUNT_RANGE_ERROR_MESSAGE);
      return;
    }
    setCount((prev) => {
      const result = prev + 1;
      setDescriptionText(`${ageGroup} 승객 증가 ${result}`);
      return result;
    });
  };

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(event.target.valueAsNumber);
    setDescriptionText(`${ageGroup} 승객 텍스트만 변경 ${count}`);
  };

  return (
    <section>
      <h2>{ageGroup}</h2>
      <button
        onClick={handleDecrementCount}
        aria-label={`${ageGroup} 탑승자 한명 줄이기`}
      >
        -
      </button>

      <label htmlFor="passengerCount" aria-live="polite" className="sr-only">
        {descriptionText}
      </label>
      <input
        id="passengerCount"
        type="number"
        value={count}
        min="1"
        max="3"
        onChange={handleChangeText}
      />

      <button
        onClick={handleIncrementCount}
        aria-label={`${ageGroup} 탑승자 한명 늘리기`}
      >
        +
      </button>
    </section>
  );
};

export default PassengerCounter;
