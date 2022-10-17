import React, { useState } from "react";
import CounterPage from "./pages/CounterPage";

import { ValueOf } from "./types";

import "./App.css";
import CarouselPage from "./pages/CarouselPage";

const PAGES = {
  COUNTER: "COUNTER",
  CAROUSEL: "CAROUSEL",
} as const;

type Pages = ValueOf<typeof PAGES>;

const App = () => {
  const [page, setPage] = useState<Pages>(PAGES.COUNTER);

  const handleSpinButtonClick = () => {
    setPage(PAGES.COUNTER);
  };

  const handleCarouselButtonClick = () => {
    setPage(PAGES.CAROUSEL);
  };

  return (
    <>
      <button className="tab-btn" onClick={handleSpinButtonClick}>
        Spin Button
      </button>
      <button className="tab-btn" onClick={handleCarouselButtonClick}>
        Carousel
      </button>
      {page === PAGES.COUNTER && <CounterPage />}
      {page === PAGES.CAROUSEL && <CarouselPage />}
    </>
  );
};

export default App;
