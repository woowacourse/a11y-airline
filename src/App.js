import { useState } from "react";

const App = () => {
  const PASSENGER_MAX_COUNT = 3;
  const PASSENGER_MIN_COUNT = 1;

  const [adultPassengerCount, setAdultPassengerCount] = useState(
    PASSENGER_MIN_COUNT,
  );

  const onDecreaseCount = () => {
    if (adultPassengerCount < PASSENGER_MIN_COUNT) return;

    setAdultPassengerCount((count) => count - 1);
  };

  const onIncreaseCount = () => {
    if (adultPassengerCount >= PASSENGER_MAX_COUNT) return;

    setAdultPassengerCount((count) => count + 1);
  };

  return (
    <section>
      <h1>승객 선택</h1>

      <h2>성인</h2>
      <label>
        <input
          type="button"
          aria-label="성인 탑승자 한명 줄이기"
          value="-"
          disabled={adultPassengerCount < PASSENGER_MIN_COUNT}
          onClick={onDecreaseCount}
          style={{
            fontSize: "2rem",
            padding: "0 1rem",
            margin: "0.5rem 0",
            boxSizing: "border-box",
          }}
        />

        <span aria-atomic="true" aria-live="assertive">
          <span
            style={{
              display: "inline-block",
              width: "1px",
              height: "1px",
              margin: "-1px 0 0",
              overflow: "hidden",
            }}
          >
            성인 승객 {adultPassengerCount} 명
          </span>
          <input
            style={{
              fontSize: "2rem",
              padding: "0 1rem",
              margin: "0.5rem 0",
              boxSizing: "border-box",
            }}
            value={adultPassengerCount}
            onChange={({ target: { value } }) => setAdultPassengerCount(value)}
            type="number"
            min={PASSENGER_MIN_COUNT}
            max={PASSENGER_MAX_COUNT}
            readOnly
          />
        </span>

        <input
          type="button"
          aria-label="성인 탑승자 한명 늘리기"
          value="+"
          disabled={adultPassengerCount >= PASSENGER_MAX_COUNT}
          onClick={onIncreaseCount}
          style={{
            fontSize: "2rem",
            padding: "0 1rem",
            margin: "0.5rem 0",
            boxSizing: "border-box",
          }}
        />
      </label>
    </section>
  );
};

export default App;
