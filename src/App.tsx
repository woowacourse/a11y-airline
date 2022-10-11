import { ChangeEvent, useState } from "react";
import "./app.css";
import QuestionMarkTooltip from "./components/Tooltip";

const MAX_PASSENGER_COUNT = 3;
const MIN_PASSENGER_COUNT = 1;

const PASSENGER_CHANGE_MESSAGE = "성인 탑승 인원을 변경합니다. ";
const PASSENGER_INCREASE_MESSAGE = "성인 탑승 인원 추가";
const PASSENGER_DECREASE_MESSAGE = "성인 탑승 인원 감소";
const PASSENGER_COUNT_INPUT_ALERT_MESSAGE = (count: number) =>
  `승객 ${count}명`;

const isValidPassengerCount = (count: number) => {
  if (count < MIN_PASSENGER_COUNT) {
    return false;
  }

  if (count > MAX_PASSENGER_COUNT) {
    return false;
  }

  return true;
};

const App = () => {
  const [passengerCount, setPassengerCount] =
    useState<number>(MIN_PASSENGER_COUNT);
  const [message, setMessage] = useState<string>("");

  const changePassengerCount = (e: ChangeEvent<HTMLInputElement>) => {
    const count = e.target.valueAsNumber;

    if (!isValidPassengerCount(count)) {
      return;
    }

    setPassengerCount(count);
    setMessage(
      `${PASSENGER_CHANGE_MESSAGE} ${PASSENGER_COUNT_INPUT_ALERT_MESSAGE(
        count
      )}`
    );
  };

  const increasePassengerCount = () => {
    const currentPassengerCount = passengerCount;

    if (!isValidPassengerCount(passengerCount + 1)) {
      return;
    }

    setPassengerCount((prev) => prev + 1);
    setMessage(
      `${PASSENGER_INCREASE_MESSAGE}
        ${PASSENGER_COUNT_INPUT_ALERT_MESSAGE(currentPassengerCount + 1)}`
    );
  };

  const decreasePassengerCount = () => {
    const currentPassengerCount = passengerCount;

    if (!isValidPassengerCount(passengerCount - 1)) {
      return;
    }

    setPassengerCount((prev) => prev - 1);
    setMessage(
      `${PASSENGER_DECREASE_MESSAGE}
        ${PASSENGER_COUNT_INPUT_ALERT_MESSAGE(currentPassengerCount - 1)}`
    );
  };

  return (
    <main>
      <h1>웹 접근성 좋은 항공사</h1>
      <h2>승객 선택</h2>
      <section className="passenger-count-control-container">
        <div className="flex g7 align-center">
          <label htmlFor="passenger-count-input">성인</label>
          <QuestionMarkTooltip description="승객은 최소 1명 최대 3명입니다." />
        </div>
        <div className="passenger-count-controller">
          <button
            className="passenger-count-control-button"
            type="button"
            aria-disabled={passengerCount === MIN_PASSENGER_COUNT}
            aria-label="성인 승객 한명 줄이기"
            onClick={decreasePassengerCount}
          >
            -
          </button>
          <input
            className="passenger-count-control-input"
            id="passenger-count-input"
            type="number"
            min={MIN_PASSENGER_COUNT}
            max={MAX_PASSENGER_COUNT}
            value={passengerCount}
            onChange={changePassengerCount}
          />
          <button
            className="passenger-count-control-button"
            type="button"
            aria-disabled={passengerCount === MAX_PASSENGER_COUNT}
            aria-label="성인 승객 한명 늘이기"
            onClick={increasePassengerCount}
          >
            +
          </button>
        </div>
        <div className="user-action-message-box" role="status">
          {message}
        </div>
      </section>
    </main>
  );
};

export default App;
