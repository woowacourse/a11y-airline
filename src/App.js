import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleChangeCount = (event) => {
    const input = event.target.valueAsNumber;

    if(input < 1 || input > 3) {
      return;
    }

    setCount(event.target.valueAsNumber);
  };

  const handleMinusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handlePlusCount = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <h1>접근성 높이기 미션</h1>
      <section>
        <h2>승객 수 입력하기</h2>
        <button onClick={handleMinusCount}>-</button>
        <input
          type="number"
          min="1"
          max="3"
          value={count}
          onChange={handleChangeCount}
        />
        <button onClick={handlePlusCount}>+</button>
      </section>
    </>
  );
}

export default App;
