import { useRef, useState } from "react";
import { travels } from "./travels";
import HiddenButAriaRead from "../HiddenButAriaRead";
import "./carousel.css";

const TRANSLATE_X = 300;
const DEBOUNCE_TIME = 100;

const Carousel: React.FC = () => {
  const cardListRef = useRef<HTMLUListElement | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const [scrollPos, setScrollPos] = useState<"start" | "end" | null>("start");

  const handleLeftSlideButtonClick = () => {
    if (!cardListRef.current) return;
    if (scrollPos === "start") return;

    cardListRef.current.scrollBy(-TRANSLATE_X, 0);
  };

  const handleRightSlideButtonClick = () => {
    if (!cardListRef.current) return;
    if (scrollPos === "end") return;

    cardListRef.current.scrollBy(TRANSLATE_X, 0);
  };

  const handleCardListScroll = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }

    debounceRef.current = setTimeout(() => {
      if (!cardListRef.current) return;

      const { scrollWidth, clientWidth, scrollLeft } = cardListRef.current;
      const isNotScrolledYet = Math.floor(scrollLeft) <= 1;

      if (isNotScrolledYet) {
        setScrollPos("start");
        return;
      }

      //참고: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
      const isTotallyScrolled =
        Math.abs(scrollWidth - clientWidth - scrollLeft) <= 1;
      if (isTotallyScrolled) {
        setScrollPos("end");
        return;
      }

      setScrollPos(null);
    }, DEBOUNCE_TIME);
  };

  return (
    <section>
      <h2>지금 떠나기 좋은 여행</h2>
      <section className="carousel-section">
        <CarouselButton
          direction="left"
          disabled={scrollPos === "start"}
          onClick={handleLeftSlideButtonClick}
        />
        <CarouselButton
          direction="right"
          disabled={scrollPos === "end"}
          onClick={handleRightSlideButtonClick}
        />
        <ul
          className="card-list"
          ref={cardListRef}
          onScroll={handleCardListScroll}
        >
          <HiddenButAriaRead>{`추천 여행 목록 ${travels.length}개 포함`}</HiddenButAriaRead>
          {travels.map((travel) => (
            <li key={travel.id}>
              <a className="card-link" href={travel.href}>
                <TravelCard
                  src={travel.src}
                  location={travel.location}
                  seat={travel.seat}
                  price={travel.price}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Carousel;

type CardProps = {
  src: string;
  location: {
    departure: string;
    arrival: string;
  };
  seat: string;
  price: number;
};

const TravelCard: React.FC<CardProps> = ({ src, location, seat, price }) => {
  return (
    <div className="card">
      <img className="card-image" alt="" src={src} />
      <div className="card-description">
        <p className="location">
          <span>{location.departure}</span>
          <span aria-hidden> - </span>
          <span>{location.arrival}</span>
        </p>
        <p className="seat">{seat}</p>
        <span className="price">
          <span aria-hidden>KRW {price.toLocaleString()} ~</span>
          <HiddenButAriaRead>
            {`${price.toLocaleString()} 대한민국 원`}
          </HiddenButAriaRead>
        </span>
      </div>
    </div>
  );
};

type CarouselButtonProps = {
  direction: "right" | "left";
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CarouselButton: React.FC<CarouselButtonProps> = ({
  direction,
  disabled,
  onClick: handleClick,
}) => {
  return (
    <button
      className={`carousel-button ${direction}`}
      type="button"
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={direction === "right" ? "다음" : "이전"}
      onClick={handleClick}
    >
      {direction === "right" ? ">" : "<"}
    </button>
  );
};
