import { useRef, useState } from 'react';

const useCarousel = () => {
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [scrollStart, setScrollStart] = useState(false);
  const [scrollEnd, setScrollEnd] = useState(false);
  const [announceState, setAnnounceState] = useState('');

  const handleClickLeftScrollButton = () => {
    carouselRef.current?.scrollBy(-263, 0);
    setScrollEnd(false);
    if (carouselRef.current?.scrollLeft === 0) {
      setScrollStart(true);
      setAnnounceState('목록의 처음에 도달했습니다.');
    }
  };

  const handleClickRightScrollButton = () => {
    const before = carouselRef.current?.scrollLeft;
    carouselRef.current?.scrollBy(263, 0);
    setScrollStart(false);
    const after = carouselRef.current?.scrollLeft;
    if (before === after) {
      setScrollEnd(true);
      setAnnounceState('목록의 마지막에 도달했습니다.');
    }
  };

  return {
    carouselRef,
    handleClickLeftScrollButton,
    handleClickRightScrollButton,
    scrollStart,
    scrollEnd,
    announceState,
  };
};

export default useCarousel;
