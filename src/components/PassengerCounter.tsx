import { useState } from "react";

interface Props {
  ageGroup: "성인" | "청소년" | "유아";
}

const DEFAULT_COUNT = 1;

const Counter = ({ ageGroup }: Props) => {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [descriptionText, setDescriptionText] = useState("");

  const handleDecrementCount = () => {
    setCount((prev) => {
      const result = prev - 1;
      setDescriptionText(`${ageGroup} 승객 감소 ${result}`);
      return result;
    });
  };

  const handleIncrementCount = () => {
    setCount((prev) => {
      const result = prev + 1;
      setDescriptionText(`${ageGroup} 승객 증가 ${result}`);
      return result;
    });
  };

  const handleChangeText = () => {
    setDescriptionText(`${ageGroup} 승객 텍스트만 변경 ${count}`);
  };

  return (
    <section>
      <h2>{ageGroup}</h2>
      <button
        onClick={handleDecrementCount}
        disabled={count === 0}
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
        onChange={handleChangeText}
      />

      <button
        onClick={handleIncrementCount}
        disabled={count === 3}
        aria-label={`${ageGroup} 탑승자 한명 늘리기`}
      >
        +
      </button>
    </section>
  );
};

export default Counter;
