import { useState, ChangeEvent } from "react";
import HelpToolTip from "./HelpToolTip";

import { handleErrorByAlert } from "@utils";

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

const validatePassengerCount = (count: number): void => {
  if (count < MINIMUM_COUNT || count > MAXIMUM_COUNT)
    throw new Error(COUNT_RANGE_ERROR_MESSAGE);
};

const PassengerCounter = ({ ageGroup }: Props) => {
  const [count, setCount] = useState(DEFAULT_COUNT);
  const [descriptionText, setDescriptionText] = useState("");

  const handleDecrementCount = () => {
    try {
      validatePassengerCount(count - 1);
      setCount((prev) => {
        const result = prev - 1;
        setDescriptionText(`${ageGroup} 승객 감소 ${result}`);
        return result;
      });
    } catch (error) {
      handleErrorByAlert(error);
    }
  };

  const handleIncrementCount = () => {
    try {
      validatePassengerCount(count + 1);
      setCount((prev) => {
        const result = prev + 1;
        setDescriptionText(`${ageGroup} 승객 증가 ${result}`);
        return result;
      });
    } catch (error) {
      handleErrorByAlert(error);
    }
  };

  const handleChangeDescriptionText = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const value = event.target.valueAsNumber;
      validatePassengerCount(value);
      setCount(value);
      setDescriptionText(`${ageGroup} 승객 텍스트만 변경 ${value}`);
    } catch (error) {
      handleErrorByAlert(error);
    }
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
          onChange={handleChangeDescriptionText}
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
