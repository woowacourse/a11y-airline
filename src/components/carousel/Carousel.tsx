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
  const [ariaMessage, setAriaMessage] = useState("");

  const handleLeftSlideButtonClick = () => {
    if (!cardListRef.current) return;
    if (scrollPos === "start") {
      setAriaMessage("목록 첫 부분");
      return;
    }

    cardListRef.current.scrollBy(-TRANSLATE_X, 0);
  };

  const handleRightSlideButtonClick = () => {
    if (!cardListRef.current) return;
    if (scrollPos === "end") {
      setAriaMessage("목록 끝 부분");
      return;
    }

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
        setAriaMessage("목록 첫 부분");
        return;
      }

      //참고: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
      const isTotallyScrolled =
        Math.abs(scrollWidth - clientWidth - scrollLeft) <= 1;
      if (isTotallyScrolled) {
        setScrollPos("end");
        setAriaMessage("목록 끝 부분");
        return;
      }

      setAriaMessage("");
      setScrollPos(null);
    }, DEBOUNCE_TIME);
  };

  return (
    <section>
      <h2>지금 떠나기 좋은 여행</h2>
      <section className="carousel-section">
        <HiddenButAriaRead>{`추천 여행 목록 ${travels.length}개 포함`}</HiddenButAriaRead>
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
      <HiddenButAriaRead>{ariaMessage}</HiddenButAriaRead>
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
        <p
          className="location"
          aria-label={`${location.departure}에서 ${location.arrival}`}
        >
          <span
            aria-hidden
          >{`${location.departure} - ${location.arrival}`}</span>
          <HiddenButAriaRead>{`${location.departure}에서 ${location.arrival}`}</HiddenButAriaRead>
        </p>
        <p className="seat">{seat}</p>
        <p
          className="price"
          aria-label={`${price.toLocaleString()} 대한민국 원부터`}
          aria-atomic
        >
          <span aria-hidden>{`KRW ${price.toLocaleString()} ~`}</span>
          <HiddenButAriaRead>{`${price.toLocaleString()} 대한민국 원부터`}</HiddenButAriaRead>
        </p>
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
      aria-disabled={disabled}
      aria-label={direction === "right" ? "다음" : "이전"}
      onClick={handleClick}
    >
      {direction === "right" ? ">" : "<"}
    </button>
  );
};
