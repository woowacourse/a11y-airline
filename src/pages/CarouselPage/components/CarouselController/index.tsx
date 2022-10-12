import React from "react";
import "./style.css";

interface CarouselControllerProps {
  handleBackButtonClick: () => void;
  handleNextButtonClick: () => void;
  max: number;
  current: number;
}

const CarouselController = ({
  handleBackButtonClick,
  handleNextButtonClick,
  max,
  current,
}: CarouselControllerProps) => {
  return (
    <div className="controller">
      <button
        className="left__btn"
        onClick={handleBackButtonClick}
        aria-disable={current <= 0}
        disabled={current <= 0}
      >
        <span className="sr-only">이전</span>
      </button>
      <button
        className="right__btn"
        onClick={handleNextButtonClick}
        aria-disable={current >= max - 1}
        disabled={current >= max - 1}
      >
        <span className="sr-only">다음</span>
      </button>
    </div>
  );
};

export default CarouselController;
