import { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import ListItem from './ListItem';
import tourItems from '../data/tourItemData.json';
import useWindowResize from '../hooks/useWindowResize';

function Carousel() {
  const tourItemRef = useRef<HTMLLIElement>(null);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);
  const minTranslateX = 0;

  const isFirstItem = currentTranslateX >= minTranslateX;
  const isLastItem = currentTranslateX <= maxTranslateX;

  const handleSlideToNextItem = () => {
    if (isLastItem) return;

    setCurrentTranslateX((prev) => {
      if (!tourItemRef.current) return prev;

      return prev - tourItemRef.current.clientWidth;
    });
  };

  const handleSlideToPrevItem = () => {
    if (isFirstItem) return;

    setCurrentTranslateX((prev) => {
      if (!tourItemRef.current) return prev;

      return prev + tourItemRef.current.clientWidth;
    });
  };

  const resetCarouselSetting = () => {
    setCurrentTranslateX(0);
  };
  useWindowResize(resetCarouselSetting);

  useEffect(() => {
    if (tourItemRef.current) {
      setMaxTranslateX(-tourItemRef.current.clientWidth * 6);
    }
  }, [tourItemRef.current?.clientWidth]);

  return (
    <div className="list-container">
      <h1 className="list-title">지금 떠나기 좋은 여행</h1>
      <section className="list-box">
        <div>
          <ul
            className="list"
            style={{
              transform: `translateX(${currentTranslateX}px)`,
            }}
          >
            {tourItems.data.map((item) => (
              <ListItem {...item} ref={tourItemRef} />
            ))}
          </ul>
        </div>
        <div className="list-controller">
          <button
            type="button"
            className="button-prev"
            onClick={handleSlideToPrevItem}
            disabled={isFirstItem}
          >
            <span className="sr-only">이전</span>
          </button>
          <button
            type="button"
            className="button-next"
            onClick={handleSlideToNextItem}
            disabled={isLastItem}
          >
            <span className="sr-only">다음</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
