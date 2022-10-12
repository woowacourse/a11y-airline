import React from "react";
import "./style.css";

interface CarouselControllerProps {
  handleBackButtonClick: () => void;
  handleNextButtonClick: () => void;
}

const CarouselController = ({
  handleBackButtonClick,
  handleNextButtonClick,
}: CarouselControllerProps) => {
  return (
    <div className="controller">
      <button className="left__btn" onClick={handleBackButtonClick}>
        <span className="sr-only">이전</span>
      </button>
      <button className="right__btn" onClick={handleNextButtonClick}>
        <span className="sr-only">다음</span>
      </button>
    </div>
  );
};

export default CarouselController;
