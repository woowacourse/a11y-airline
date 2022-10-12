import { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import ListItem from './ListItem';
import tourItems from '../data/tourItemData.json';
import useWindowResize from '../hooks/useWindowResize';

function Carousel() {
  const tourItemRef = useRef<HTMLLIElement>(null);
  const [currentTransformX, setCurrentTransformX] = useState(0);
  const [tourItemWidth, setTourItemWidth] = useState(0);
  const minTransformX = 0;
  const maxTransformX = -tourItemWidth * 6;

  const handleSlideToNextSlide = () => {
    if (currentTransformX <= maxTransformX) return;

    setCurrentTransformX((prev) => prev - tourItemWidth);
  };
  const handleSlideToPrevSlide = () => {
    if (currentTransformX >= minTransformX) return;

    setCurrentTransformX((prev) => prev + tourItemWidth);
  };

  console.log(currentTransformX, tourItemWidth);
  const resetCarouselSetting = () => {
    if (tourItemRef.current) {
      setTourItemWidth(tourItemRef.current.clientWidth);
    }
    setCurrentTransformX(0);
  };
  useWindowResize(resetCarouselSetting);

  useEffect(() => {
    if (tourItemRef.current) {
      setTourItemWidth(tourItemRef.current.clientWidth);
    }
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">지금 떠나기 좋은 여행</h2>
      <div className="list-box">
        <div>
          <ul
            className="list"
            style={{
              transform: `translateX(${currentTransformX}px)`,
            }}
          >
            {tourItems.data.map((item) => (
              <ListItem {...item} ref={tourItemRef} />
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="button-prev"
          onClick={handleSlideToPrevSlide}
          disabled={currentTransformX >= minTransformX}
        >
          <span hidden>이전</span>
        </button>
        <button
          type="button"
          className="button-next"
          onClick={handleSlideToNextSlide}
          disabled={currentTransformX <= maxTransformX}
        >
          <span hidden>다음</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
