import { useRef, useState } from "react";
import "./carousel.css";

const travels = [
  {
    id: 1,
    alt: "서울 인천 치앙마이",
    src: "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg",
    location: "서울/인천 치앙마이",
    seat: "일반석 왕복",
    price: 839200,
  },
  {
    id: 2,
    alt: "서울 인천 바르셀로나",
    src: "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HAN-list-pc.jpg",
    location: "서울/인천 바르셀로나",
    seat: "일반석 왕복",
    price: 1546300,
  },
  {
    id: 3,
    alt: "서울 인천 하노이",
    src: "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FUK-list-pc.jpg",
    location: "서울/인천 하노이",
    seat: "일반석 왕복",
    price: 1546300,
  },
  {
    id: 4,
    alt: "서울 인천 푸껫",
    src: "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HKT-list-pc.jpg",
    location: "서울/인천 푸껫",
    seat: "일반석 왕복",
    price: 704200,
  },
  {
    id: 5,
    alt: "서울 인천 호놀룰루",
    src: "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/CNX-list-pc.jpg",
    location: "서울/인천 호놀룰루",
    seat: "일반석 왕복",
    price: 1824600,
  },
  {
    id: 6,
    alt: "서울 인천 후쿠오카",
    src: "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/BCN-list-pc.jpg",
    location: "서울/인천 후쿠오카",
    seat: "일반석 왕복",
    price: 1481800,
  },
];

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
    <div>
      <h2>지금 떠나기 좋은 여행</h2>
      <section className="carousel-section">
        <CarouselButton
          direction="left"
          disabled={scrollPos === "start"}
          onClick={handleLeftSlideButtonClick}
        />
        <ul
          className="card-list"
          ref={cardListRef}
          onScroll={handleCardListScroll}
        >
          {travels.map((travel) => (
            <li key={travel.id}>
              <a className="card-link" href=".">
                <TravelCard
                  alt={travel.alt}
                  src={travel.src}
                  location={travel.location}
                  seat={travel.seat}
                  price={travel.price}
                />
              </a>
            </li>
          ))}
        </ul>
        <CarouselButton
          direction="right"
          disabled={scrollPos === "end"}
          onClick={handleRightSlideButtonClick}
        />
      </section>
    </div>
  );
};

export default Carousel;

type CardProps = {
  alt: string;
  src: string;
  location: string;
  seat: string;
  price: number;
};

const TravelCard: React.FC<CardProps> = ({
  alt,
  src,
  location,
  seat,
  price,
}) => {
  return (
    <div className="card">
      <img className="card-image" alt={alt} src={src} />
      <div className="card-description">
        <p className="location">{location}</p>
        <p className="seat">{seat}</p>
        <span className="price">KRW {price.toLocaleString()} ~</span>
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
      aria-label={direction === "right" ? "다음" : "이전"}
      onClick={handleClick}
    >
      {direction === "right" ? ">" : "<"}
    </button>
  );
};
