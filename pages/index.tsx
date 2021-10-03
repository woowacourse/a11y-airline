import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/layout";
import SpinButton from "./components/SpinButton";
import { PASSENGER_VALUE } from "./constants/common";

const Home: NextPage = () => {
  const [value, setValue] = useState(1);
  const [statusMessage, setStatusMessage] = useState(`성인 승객 추가 ${value}`);

  const handleIncrease = () => {
    if (value + 1 > PASSENGER_VALUE.MAX) {
      setStatusMessage("승객은 3명까지만 추가할 수 있습니다.");
      return;
    }

    setValue(value + 1);
    setStatusMessage(`성인 승객 추가 ${value + 1}`);
  };

  const handleDecrease = () => {
    if (value - 1 < PASSENGER_VALUE.MIN) {
      setStatusMessage("승객은 1명 이상이어야 합니다.");
      return;
    }

    setValue(value - 1);
    setStatusMessage(`성인 승객 추가 ${value - 1}`);
  };

  return (
    <Layout>
      <h1 tabIndex={0} className="text-4xl text-center mb-6">
        ✈️ 항공사 웹 사이트 ✈️
      </h1>
      <h2 tabIndex={0} className="text-2xl text-center font-bold mb-4">
        승객 선택
      </h2>
      <h3 tabIndex={0} className="text-xl text-center font-semibold mr-16 mb-2">
        성인
      </h3>
      <SpinButton
        value={value}
        min={PASSENGER_VALUE.MIN}
        max={PASSENGER_VALUE.MAX}
        statusMessage={statusMessage}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </Layout>
  );
};

export default Home;
