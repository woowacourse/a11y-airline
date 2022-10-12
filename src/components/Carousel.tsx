import React, { useState, PropsWithChildren, useRef, useMemo } from "react";

const Carousel = ({ children }: PropsWithChildren) => {
  const listRef = useRef(null);
  const [firstViewedElementIndex, setFirstViewedElementIndex] = useState(0);

  const calculatePosition: (index: number) => number = (index) => {
    const list = listRef.current as unknown as HTMLUListElement;

    return (
      list && (100 / list.childElementCount) * index * 0.01 * list.offsetWidth
    );
  };

  const calculateGapBetweenContainerAndList = () => {
    const list = listRef.current as unknown as HTMLUListElement;

    const gap = list && list.offsetWidth - list.parentElement!.offsetWidth!;
    return list && gap;
  };

  const currentPosition = useMemo(
    () => calculatePosition(firstViewedElementIndex),
    [firstViewedElementIndex]
  );

  const handleLeftButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    const list = listRef.current as unknown as HTMLUListElement;

    if (currentPosition <= 0) {
      return;
    }

    setFirstViewedElementIndex((prev) => prev - 1);

    const move = calculatePosition(firstViewedElementIndex - 1);

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
    const gap = calculateGapBetweenContainerAndList();

    if (currentPosition >= gap) {
      return;
    }

    setFirstViewedElementIndex((prev) => prev + 1);

    const move = calculatePosition(firstViewedElementIndex + 1);

    if (gap <= move) {
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
          aria-disabled={currentPosition <= 0}
        >
          이전 버튼
        </button>
        <button
          className="carousel-control-right"
          onClick={handleRightButtonClick}
          aria-disabled={
            currentPosition >= calculateGapBetweenContainerAndList()
          }
        >
          다음 버튼
        </button>
      </div>
    </div>
  );
};

export default Carousel;
