import React, { useState, PropsWithChildren, useRef } from "react";

const Carousel = ({ children }: PropsWithChildren) => {
  const listRef = useRef(null);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  const handleLeftButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    const list = listRef.current as unknown as HTMLUListElement;

    list.scrollBy({ top: 0, left: -224, behavior: "smooth" });

    console.log(list.scrollWidth, list.scrollLeft, list.clientWidth);

    if (list.scrollLeft - 224 <= 0) {
      setLeftButtonDisabled(true);
    }

    if (list.scrollLeft + 224 < list.scrollWidth) {
      setRightButtonDisabled(false);
    }
  };

  const handleRightButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    const list = listRef.current as unknown as HTMLUListElement;

    list.scrollBy({ top: 0, left: 224, behavior: "smooth" });

    console.log(list.scrollWidth, list.scrollLeft, list.clientWidth);

    if (list.scrollLeft + 224 > 0) {
      setLeftButtonDisabled(false);
    }

    if (list.scrollWidth - list.clientWidth - list.scrollLeft - 224 <= 0) {
      setRightButtonDisabled(true);
    }
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
          aria-label="이전"
          aria-disabled={leftButtonDisabled}
        />
        <button
          className="carousel-control-right"
          onClick={handleRightButtonClick}
          aria-label="다음"
          aria-disabled={rightButtonDisabled}
        />
      </div>
    </div>
  );
};

export default Carousel;
