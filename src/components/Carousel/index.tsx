import { useRef, useState } from "react";
import "./index.css";

import TravelCard from "@components/TravelCard";
import Controller from "./Controller";

import { data } from "../../__mocks__/data";

const DATA_SIZE = data.length;

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);

  const moveSlide = (page: number) => {
    if (!slideRef.current) return;

    slideRef.current.scrollTo({
      top: 0,
      left: 300 * page + (DATA_SIZE + 1) * page,
      behavior: "smooth",
    });
  };

  const handleSlideToPrev = () => {
    if (slide < 1) {
      return;
    }

    setSlide((prev) => {
      const result = prev - 1;
      moveSlide(result);
      return result;
    });
  };

  const handleSlideToNext = () => {
    if (slide > DATA_SIZE) {
      return;
    }

    setSlide((prev) => {
      const result = prev + 1;
      moveSlide(result);
      return result;
    });
  };

  return (
    <div>
      <h2>지금 떠나기 좋은 여행</h2>

      <div className="carousel">
        <ul className="carousel__list" ref={slideRef}>
          {data.map(
            ({
              id,
              href,
              imageSrc,
              departure,
              destination,
              seat,
              tripType,
              price,
            }) => (
              <li className="carousel__item" key={id}>
                <TravelCard
                  href={href}
                  imageSrc={imageSrc}
                  departure={departure}
                  destination={destination}
                  seat={seat}
                  tripType={tripType}
                  price={price}
                />
              </li>
            )
          )}
        </ul>
        <Controller
          handleClickPrevButton={handleSlideToPrev}
          handleClickNextButton={handleSlideToNext}
          max={DATA_SIZE}
          slide={slide}
        />
      </div>
    </div>
  );
};

export default Carousel;
