import TravelCard from "component/TravelCard";
import { CAROUSEL_BUTTON_OPTION } from "constant";
import { useRef, useState } from "react";
import { ValueOf } from "types/util";
import "./index.css";

const HomePage = () => {
  const scrollContainer = useRef<HTMLUListElement>(null);
  const [buttonDisabled, setButtonDisabled] = useState({
    previous: true,
    next: false,
  });

  const handleCauroselButtonClick = (
    option: ValueOf<typeof CAROUSEL_BUTTON_OPTION>
  ) => {
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
      scrollContainer.current.scrollLeft >= (itemWidth + itemMargin) * 2;

    if (option === CAROUSEL_BUTTON_OPTION.PREVIOUS) {
      scrollContainer.current.scrollLeft -= itemWidth + itemMargin;
    }
    if (option === CAROUSEL_BUTTON_OPTION.NEXT) {
      scrollContainer.current.scrollLeft += itemWidth + itemMargin;
    }

    setButtonDisabled({
      previous: isPreviousButtonDisabled,
      next: isNextButtonDisabled,
    });
  };

  return (
    <div className="home-page-container">
      <h1 className="header-title">지금 떠나기 좋은 여행</h1>
      <ul className="travel-card-container" ref={scrollContainer}>
        <TravelCard
          src="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg"
          alt="두바이 이미지"
          href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&cabin=Y&tripType=RT&duration=7"
          title="서울/인천 - 두바이"
          lowestPrice="1,158,000"
        />
        <TravelCard
          src="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FUK-list-pc.jpg"
          alt="후쿠오카 이미지"
          href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&cabin=Y&tripType=RT&duration=7"
          title="서울/인천 - 후쿠오카"
          lowestPrice="340,400"
        />
        <TravelCard
          src="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HKT-list-pc.jpg"
          alt="푸껫 이미지"
          href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&cabin=Y&tripType=RT&duration=7"
          title="서울/인천 - 푸껫"
          lowestPrice="704,200"
        />
        <TravelCard
          src="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/CNX-list-pc.jpg"
          alt="치앙마이 이미지"
          href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&cabin=Y&tripType=RT&duration=7"
          title="서울/인천 - 치양마이"
          lowestPrice="839,200"
        />
        <TravelCard
          src="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/BCN-list-pc.jpg"
          alt="바르셀로나 이미지"
          href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&cabin=Y&tripType=RT&duration=7"
          title="서울/인천 - 바르셀로나"
          lowestPrice="1,546,300"
        />
        <TravelCard
          src="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HAN-list-pc.jpg"
          alt="하노이 이미지"
          href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&cabin=Y&tripType=RT&duration=7"
          title="서울/인천 - 하노이"
          lowestPrice="527,400"
        />
        <TravelCard
          src="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FCO-list-pc.jpg"
          alt="로마 레오나르도 다빈치 이미지"
          href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&cabin=Y&tripType=RT&duration=7"
          title="서울/인천 - 로마/레오나르도 다빈치"
          lowestPrice="1,454,300"
        />
        <TravelCard
          src="https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HNL-list-pc.jpg"
          alt="호놀룰루 하와이 이미지"
          href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&cabin=Y&tripType=RT&duration=7"
          title="서울/인천 - 호놀룰루(하와이)"
          lowestPrice="1,244,900"
        />
      </ul>
      <div className="button-container">
        <button
          aria-disabled={buttonDisabled.previous}
          onClick={() =>
            handleCauroselButtonClick(CAROUSEL_BUTTON_OPTION.PREVIOUS)
          }
          className="carousel-button previous-button"
        >
          <span className="hidden">이전</span>
        </button>
        <button
          aria-disabled={buttonDisabled.next}
          onClick={() => handleCauroselButtonClick(CAROUSEL_BUTTON_OPTION.NEXT)}
          className="carousel-button next-button"
        >
          <span className="hidden">다음</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
