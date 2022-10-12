import { useState, useRef, useEffect } from 'react';

import { ItemSize } from '../../types';

const ITEM_SIZE = {
  small: 210,
  middle: 238,
  large: 267,
} as const;
const GAP_SIZE = 24;

const useCarousel = (itemSize: ItemSize) => {
  const carouselListRef = useRef<HTMLUListElement | null>(null);
  const [slideCount, setSlideCount] = useState(0);

  const isStartPoint = slideCount <= 0;
  const isEndPoint =
    carouselListRef.current === null
      ? false
      : (ITEM_SIZE[itemSize] + GAP_SIZE) * slideCount + carouselListRef.current.offsetWidth >
        carouselListRef.current.scrollWidth;

  const handleClickPrevSlideButton = () => {
    if (isStartPoint) return;

    setSlideCount((prev) => prev - 1);
  };

  const handleClickNextSlideButton = () => {
    if (isEndPoint) return;

    setSlideCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (!carouselListRef.current) return;

    carouselListRef.current.scrollTo({
      left: (ITEM_SIZE[itemSize] + GAP_SIZE) * slideCount,
      behavior: 'smooth',
    });
  }, [slideCount]);

  return {
    isStartPoint,
    isEndPoint,
    carouselListRef,
    handleClickPrevSlideButton,
    handleClickNextSlideButton,
  };
};

export default useCarousel;
