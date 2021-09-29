import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const handleChangeCount = (event) => {
    const input = event.target.valueAsNumber;

    if (input < 1 || input > 3) {
      return;
    }

    setCount(event.target.valueAsNumber);
  };

  const handleMinusCount = () => {
    if (count <= 1) {
      alert(`승객 수는 ${1}명 이상이어야 합니다.`);
      return;
    }

    setCount(count - 1);
  };

  const handlePlusCount = () => {
    if (count >= 3) {
      alert(`승객 수는 ${3}명 이하여야 합니다.`);
      return;
    }

    setCount(count + 1);
  };

  return (
    <>
      <h1>접근성 높이기 미션</h1>
      <section>
        <h2>승객 수 입력하기</h2>
        <button
          type="button"
          onClick={handleMinusCount}
          aria-label="성인 탑승자 한명 줄이기"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          max="3"
          value={count}
          onChange={handleChangeCount}
          aria-describedby="passenger-count"
        />
        <button
          type="button"
          onClick={handlePlusCount}
          aria-label="성인 탑승자 한명 늘리기"
        >
          +
        </button>
        <span id="passenger-count" role="status" className="hidden">
          성인 {count}명
        </span>
      </section>
    </>
  );
}

export default App;
