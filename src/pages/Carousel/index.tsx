import CarouselCard from "../../components/CarouselCard";
import { carouselList } from "../../mock/data/carousel";
import styles from "./styles.module.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import useCarouselEventHandler from "../../hooks/useCarouselEventHandler";

function Carousel() {
  const {
    isDisabledScrollToLeftButton,
    isDisabledScrollToRightButton,
    carouselListRef,
    handleSetScrollToButtons,
    handleCarouselContainerScrollToLeft,
    handleCarouselContainerScrollToRight,
  } = useCarouselEventHandler();

  return (
    <article className={styles.article}>
      <h1 className={styles.title} tabIndex={1}>
        지금 떠나기 좋은 여행
      </h1>

      <div className={styles.carouselContainer}>
        <button
          className={styles.leftCircleButton}
          type="button"
          onClick={handleCarouselContainerScrollToLeft}
          disabled={isDisabledScrollToLeftButton}
          tabIndex={-1}
        >
          <BsFillArrowLeftCircleFill size="36" />
        </button>

        <section
          className={styles.carouselListSection}
          ref={carouselListRef}
          onScroll={handleSetScrollToButtons}
        >
          {carouselList.map(
            ({
              id,
              departure,
              arrival,
              cabinClass,
              tripType,
              price,
              imgUrl,
              linkUrl,
            }) => (
              <CarouselCard
                key={id}
                departure={departure}
                arrival={arrival}
                cabinClass={cabinClass}
                tripType={tripType}
                price={price}
                imgUrl={imgUrl}
                linkUrl={linkUrl}
              />
            )
          )}
        </section>

        <button
          className={styles.rightCircleButton}
          type="button"
          onClick={handleCarouselContainerScrollToRight}
          disabled={isDisabledScrollToRightButton}
          tabIndex={-1}
        >
          <BsFillArrowRightCircleFill size="36" />
        </button>
      </div>
    </article>
  );
}

export default Carousel;
