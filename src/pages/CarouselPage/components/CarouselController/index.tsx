import React from "react";
import "./style.css";

interface CarouselControllerProps {
  handleBackButtonClick: () => void;
  handleNextButtonClick: () => void;
  end: { left: boolean; right: boolean };
}

const CarouselController = ({
  handleBackButtonClick,
  handleNextButtonClick,
  end,
}: CarouselControllerProps) => {
  return (
    <div className="controller">
      <button
        className="left__btn"
        onClick={handleBackButtonClick}
        aria-disable={end.left}
        disabled={end.left}
      >
        <span className="sr-only">이전</span>
      </button>
      <button
        className="right__btn"
        onClick={handleNextButtonClick}
        aria-disable={end.right}
        disabled={end.right}
      >
        <span className="sr-only">다음</span>
      </button>
    </div>
  );
};

export default CarouselController;
