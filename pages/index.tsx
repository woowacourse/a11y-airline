import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    if (value + 1 > 3) return;

    setValue(value + 1);
  };

  const handleDecrease = () => {
    if (value - 1 < 1) return;

    setValue(value - 1);
  };

  return (
    <Layout>
      <h1 className="text-2xl mb-6">항공사 웹 사이트</h1>
      <div className="flex justify-center items-center">
        <button
          className="flex justify-center items-center w-4 h-4 rounded-full ring-1 ring-gray-300 p-3 text-2xl"
          onClick={handleDecrease}
        >
          <span className="mb-1">-</span>
        </button>
        <input
          className="w-8 mx-2 text-center text-2xl font-bold border-b-2 border-black"
          value={value}
        />
        <button
          className="flex justify-center items-center w-4 h-4 rounded-full ring-1 ring-gray-300 p-3 text-2xl"
          onClick={handleIncrease}
        >
          <span className="mb-1">+</span>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
