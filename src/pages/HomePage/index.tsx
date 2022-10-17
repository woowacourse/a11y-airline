import TravelCard from "component/TravelCard";
import { CAROUSEL_BUTTON_OPTION } from "constant";
import { dummyTravelCardData } from "dummy";
import { useRef, useState } from "react";
import { ValueOf } from "types/util";
import { debounce } from "utils";
import "./index.css";

const HomePage = () => {
  const scrollContainer = useRef<HTMLUListElement>(null);
  const [buttonDisabled, setButtonDisabled] = useState({
    previous: true,
    next: false,
  });

  const setDiableCarouselButton = () => {
    if (!scrollContainer.current) return;

    const listItem = scrollContainer.current.childNodes[0] as HTMLUListElement;
    const containerStyle = getComputedStyle(scrollContainer.current);
    const itemWidth = listItem.clientWidth;
    const itemMargin = Number(
      containerStyle.getPropertyValue("gap").substring(2, 0)
    );

    const isPreviousButtonDisabled =
      scrollContainer.current.scrollLeft <= itemWidth + itemMargin;
    const isNextButtonDisabled =
      scrollContainer.current.scrollLeft >= (itemWidth + itemMargin) * 5;

    setButtonDisabled({
      previous: isPreviousButtonDisabled,
      next: isNextButtonDisabled,
    });
  };

  const handleCarouselButtonClick = (
    option: ValueOf<typeof CAROUSEL_BUTTON_OPTION>,
    disabled: boolean
  ) => {
    if (!scrollContainer.current || disabled) return;

    const listItem = scrollContainer.current.childNodes[0] as HTMLUListElement;
    const containerStyle = getComputedStyle(scrollContainer.current);
    const itemWidth = listItem.clientWidth;
    const itemMargin = Number(
      containerStyle.getPropertyValue("gap").substring(2, 0)
    );

    if (option === CAROUSEL_BUTTON_OPTION.PREVIOUS) {
      scrollContainer.current.scrollLeft -= itemWidth + itemMargin;
    }
    if (option === CAROUSEL_BUTTON_OPTION.NEXT) {
      scrollContainer.current.scrollLeft += itemWidth + itemMargin;
    }
  };

  return (
    <div className="home-page-container">
      <h1 className="header-title">지금 떠나기 좋은 여행</h1>
      <ul
        className="travel-card-container"
        ref={scrollContainer}
        onScroll={debounce(setDiableCarouselButton, 500)}
      >
        {dummyTravelCardData.map(({ src, alt, href, title, lowestPrice }) => (
          <TravelCard
            src={src}
            alt={alt}
            href={href}
            title={title}
            lowestPrice={lowestPrice}
          />
        ))}
      </ul>
      <div className="button-container">
        <button
          aria-disabled={buttonDisabled.previous}
          onClick={() =>
            handleCarouselButtonClick(
              CAROUSEL_BUTTON_OPTION.PREVIOUS,
              buttonDisabled.previous
            )
          }
          className="carousel-button previous-button"
        >
          <span className="hidden">이전</span>
        </button>
        <button
          aria-disabled={buttonDisabled.next}
          onClick={() =>
            handleCarouselButtonClick(
              CAROUSEL_BUTTON_OPTION.NEXT,
              buttonDisabled.next
            )
          }
          className="carousel-button next-button"
        >
          <span className="hidden">다음</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
