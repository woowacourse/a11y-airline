import React, { useRef, useState } from "react";
import "./style.css";

import CarouselItem from "./components/CarouselItem";
import CarouselController from "./components/CarouselController";

import { data } from "./data";

const CarouselPage = () => {
  const [page, setPage] = useState<number>(0);
  const start = useRef<HTMLUListElement>(null);

  const changePage = (page: number) => {
    if (!start.current) return;
    start.current.scrollTo({
      top: 0,
      left: 300 * page + 8 * page,
      behavior: "smooth",
    });
  };

  const handleBackButtonClick = () => {
    if (page < 1) {
      return;
    }

    console.log("back");
    setPage((prev) => {
      const target = prev - 1;
      changePage(target);
      return target;
    });
  };

  const handleNextButtonClick = () => {
    if (page > 7) {
      return;
    }

    console.log("next");
    setPage((prev) => {
      const target = prev + 1;
      changePage(target);
      return target;
    });
  };

  return (
    <div className="carousel">
      <ul className="item__list" ref={start}>
        {data.map(({ href, image, location, seat, price }, index) => (
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
      />
    </div>
  );
};

export default CarouselPage;
