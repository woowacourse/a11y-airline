import React, { useRef, useState } from "react";
import "./style.css";

import CarouselItem from "./components/CarouselItem";
import CarouselController from "./components/CarouselController";

import { data } from "./data";

const PAGE = {
  WIDTH: 300,
  GAP: 8,
  MAX_COUNT: 8,
};

const initEnd = {
  left: true,
  right: false,
};

const CarouselPage = () => {
  const [page, setPage] = useState<number>(0);
  const [end, setEnd] = useState(initEnd);
  const start = useRef<HTMLUListElement>(null);

  const changePage = (page: number) => {
    if (!start.current) return;
    start.current.scrollTo({
      top: 0,
      left: (PAGE.WIDTH + PAGE.GAP) * page,
      behavior: "smooth",
    });
  };

  const handleBackButtonClick = () => {
    if (page < 1) {
      return;
    }

    setPage((prev) => {
      const target = prev - 1;
      changePage(target);
      return target;
    });
  };

  const handleNextButtonClick = () => {
    if (!start.current) return;

    if (page > PAGE.MAX_COUNT - 1) {
      return;
    }

    setPage((prev) => {
      const target = prev + 1;
      changePage(target);
      return target;
    });
  };

  const handleEnd = () => {
    if (!start.current) return;

    const { scrollLeft, scrollWidth, offsetWidth } = start.current;

    setEnd({
      left: scrollLeft <= 0,
      right: scrollWidth <= offsetWidth + scrollLeft,
    });
  };

  const handlePageFocus: React.FocusEventHandler<HTMLDivElement> = () => {
    handleNextButtonClick();
  };

  return (
    <div>
      <h2>지금 떠나기 좋은 여행</h2>
      <div className="carousel">
        <ul className="item__list" ref={start} onScroll={handleEnd}>
          {data.map(({ href, image, location, seat, price }) => (
            <li className="item">
              <CarouselItem
                href={href}
                image={image}
                location={location}
                seat={seat}
                price={price}
                onFocus={handlePageFocus}
              />
            </li>
          ))}
        </ul>
        <CarouselController
          handleBackButtonClick={handleBackButtonClick}
          handleNextButtonClick={handleNextButtonClick}
          end={end}
        />
      </div>
    </div>
  );
};

export default CarouselPage;
