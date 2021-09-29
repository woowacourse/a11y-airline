import type { NextPage } from "next";
import { useRef, useState } from "react";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    if (value + 1 > 3) return;

    setValue(value + 1);
    contentRef?.current?.focus();
  };

  const handleDecrease = () => {
    if (value - 1 < 1) return;

    setValue(value - 1);
    contentRef?.current?.focus();
  };

  return (
    <Layout>
      <h1 className="text-4xl text-center mb-6">✈️ 항공사 웹 사이트 ✈️</h1>
      <h2 className="text-2xl text-center font-bold mb-4">승객 선택</h2>
      <h3 className="text-xl text-center font-semibold mr-16 mb-2">성인</h3>
      <div className="flex justify-center items-center">
        <button
          className="flex justify-center items-center w-4 h-4 rounded-full ring-1 ring-gray-300 p-3 text-2xl"
          onClick={handleDecrease}
          aria-label="성인 탑승자 한명 줄이기"
        >
          <span className="mb-1">-</span>
        </button>
        <div
          className="w-8 mx-2 text-center text-2xl font-bold border-b-2 border-black"
          aria-label={`성인 승객 추가 ${value}`}
          tabIndex={0}
          ref={contentRef}
        >
          {value}
        </div>
        <button
          className="flex justify-center items-center w-4 h-4 rounded-full ring-1 ring-gray-300 p-3 text-2xl"
          onClick={handleIncrease}
          aria-label="성인 탑승자 한명 늘리기"
        >
          <span className="mb-1">+</span>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
