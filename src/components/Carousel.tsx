import React, { useState, PropsWithChildren, useRef } from "react";

const Carousel = ({ children }: PropsWithChildren) => {
  const listRef = useRef(null);
  const [firstViewedElementIndex, setFirstViewedElementIndex] = useState(0);

  const handleLeftButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    const list = listRef.current as unknown as HTMLUListElement;

    const currentPosition =
      (100 / list.childElementCount) *
      firstViewedElementIndex *
      0.01 *
      list.offsetWidth;

    if (currentPosition <= 0) {
      return;
    }

    const newFirstViewedElementIndex = firstViewedElementIndex - 1;
    setFirstViewedElementIndex((prev) => prev - 1);

    const move =
      (100 / list.childElementCount) *
      newFirstViewedElementIndex *
      0.01 *
      list.offsetWidth;

    if (move <= 0) {
      list.style.transform = `translateX(0px)`;
      return;
    }

    list.style.transform = `translateX(${-move}px)`;
  };

  const handleRightButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    const list = listRef.current as unknown as HTMLUListElement;

    const gap = list.offsetWidth - list.parentElement!.offsetWidth!;
    const currentPosition =
      (100 / list.childElementCount) *
      firstViewedElementIndex *
      0.01 *
      list.offsetWidth;

    if (currentPosition >= gap) {
      return;
    }

    const newFirstViewedElementIndex = firstViewedElementIndex + 1;
    setFirstViewedElementIndex((prev) => prev + 1);

    const move =
      (100 / list.childElementCount) *
      newFirstViewedElementIndex *
      0.01 *
      list.offsetWidth;

    if (gap <= Math.abs(move)) {
      list.style.transform = `translateX(${-gap}px)`;
      return;
    }

    list.style.transform = `translateX(${-move}px)`;
  };

  return (
    <div className="carousel-container">
      <ul className="carousel-list" ref={listRef}>
        {children}
      </ul>
      <div className="carousel-control">
        <button
          className="carousel-control-left"
          onClick={handleLeftButtonClick}
        >
          이전 버튼
        </button>
        <button
          className="carousel-control-right"
          onClick={handleRightButtonClick}
        >
          다음 버튼
        </button>
      </div>
    </div>
  );
};

export default Carousel;
