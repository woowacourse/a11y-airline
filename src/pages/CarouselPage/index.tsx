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

const CarouselPage = () => {
  const [page, setPage] = useState<number>(0);
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
    if (page > PAGE.MAX_COUNT) {
      return;
    }

    setPage((prev) => {
      const target = prev + 1;
      changePage(target);
      return target;
    });
  };

  return (
    <div>
      <h2>지금 떠나기 좋은 여행</h2>
      <div className="carousel">
        <ul className="item__list" ref={start}>
          {data.map(({ href, image, location, seat, price }) => (
            <li className="item">
              <CarouselItem
                href={href}
                image={image}
                location={location}
                seat={seat}
                price={price}
              />
            </li>
          ))}
        </ul>
        <CarouselController
          handleBackButtonClick={handleBackButtonClick}
          handleNextButtonClick={handleNextButtonClick}
          max={PAGE.MAX_COUNT - 1}
          current={page}
        />
      </div>
    </div>
  );
};

export default CarouselPage;
