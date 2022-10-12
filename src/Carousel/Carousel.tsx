import './Carousel.css';
import ListItem from './ListItem';
import items from '../data/itemData.json';
import { useEffect, useRef, useState } from 'react';
import useWindowResize from '../hooks/useWindowResize';

function Carousel() {
  const listItemRef = useRef<HTMLLIElement>(null);
  const [currentTransformX, setCurrentTransformX] = useState(0);
  const [listItemWidth, setListItemWidth] = useState(0);
  const minTransformX = 0;
  const maxTransformX = -listItemWidth * 6;

  const listBoxStyle = {
    transform: `translateX(${currentTransformX}px)`,
  };

  const handleSlideToNextSlide = () => {
    if (currentTransformX <= maxTransformX) return;

    setCurrentTransformX((prev) => prev - listItemWidth);
  };

  const handleSlideToPrevSlide = () => {
    if (currentTransformX >= minTransformX) return;

    setCurrentTransformX((prev) => prev + listItemWidth);
  };

  const handleSetListItemWidth = () => {
    if (listItemRef.current) {
      setListItemWidth(listItemRef.current.clientWidth);
    }
  };

  useWindowResize(handleSetListItemWidth);
  useEffect(() => {
    if (listItemRef.current) {
      setListItemWidth(listItemRef.current.clientWidth);
    }
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">지금 떠나기 좋은 여행</h2>
      <div className="list-box">
        <div>
          <ul className="list" style={listBoxStyle}>
            {items.data.map((item) => (
              <ListItem {...item} ref={listItemRef} />
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
