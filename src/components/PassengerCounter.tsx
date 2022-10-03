import { useState, ChangeEvent } from "react";
import HelpToolTip from "./HelpToolTip";

interface Props {
  ageGroup: "성인" | "청소년" | "영유아";
}

const DEFAULT_COUNT = 1;
const MINIMUM_COUNT = 1;
const MAXIMUM_COUNT = 3;
const COUNT_RANGE_ERROR_MESSAGE = `최소 ${MINIMUM_COUNT}명, 최대 ${MAXIMUM_COUNT}명까지 선택 가능합니다.`;

const DETAIL_DESCRIPTION = {
  성인: "만 18세 이상 승객",
  청소년: "만 4세 이상, 만 18세 미만 승객",
  영유아: "만 4세 미만 승객",
};

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
    <section className="flex flex-col justify-center items-center gap-1 w-40">
      <div className="flex flex-row justify-center items-center gap-2">
        <h2 className="font-bold text-cyan-800">{ageGroup}</h2>
        <HelpToolTip
          title="연령 기준 안내"
          content={DETAIL_DESCRIPTION[ageGroup]}
        />
      </div>
      <div>
        <button
          className="w-9 p-1 border-2 rounded-full border-cyan-800 text-cyan-800"
          onClick={handleDecrementCount}
          aria-label={`${ageGroup} 탑승자 한명 줄이기`}
        >
          -
        </button>

        <label
          htmlFor={`${ageGroup} passengerCount`}
          aria-live="polite"
          className="sr-only"
        >
          {descriptionText}
        </label>
        <input
          id={`${ageGroup} passengerCount`}
          className="w-20 text-center underline"
          type="number"
          value={count}
          min="1"
          max="3"
          onChange={handleChangeText}
        />

        <button
          className="w-9 p-1 border-2 rounded-full border-cyan-800 text-cyan-800"
          onClick={handleIncrementCount}
          aria-label={`${ageGroup} 탑승자 한명 늘리기`}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default PassengerCounter;
