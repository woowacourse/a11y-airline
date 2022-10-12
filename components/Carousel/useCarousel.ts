import { useRef, useState } from 'react';

const useCarousel = (moveAmount: number) => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const ulRef = useRef<HTMLUListElement | null>(null);
  const slidePosition = useRef<number>(0);

  const onClickPrevButton = () => {
    if (!ulRef.current || !ulRef.current.firstChild) return;

    if (slidePosition.current === 0) return;

    slidePosition.current = ulRef.current.scrollLeft;

    setIsLastPage(false);

    if (slidePosition.current - moveAmount > 0) {
      slidePosition.current = slidePosition.current - moveAmount;
      setIsFirstPage(false);
    } else {
      slidePosition.current = 0;
      setIsFirstPage(true);
    }

    ulRef.current.scrollLeft = slidePosition.current;
  };

  const onClickNextButton = () => {
    if (!ulRef.current || !ulRef.current.firstChild) return;

    const sliderWidth = ulRef.current.scrollWidth - ulRef.current.clientWidth;

    if (slidePosition.current === sliderWidth) return;

    slidePosition.current = ulRef.current.scrollLeft;

    setIsFirstPage(false);

    if (slidePosition.current + moveAmount < sliderWidth) {
      slidePosition.current = slidePosition.current + moveAmount;
      setIsLastPage(false);
    } else {
      slidePosition.current = sliderWidth;
      setIsLastPage(true);
    }

    ulRef.current.scrollLeft = slidePosition.current;
  };

  return {
    ulRef,
    onClickPrevButton,
    onClickNextButton,
    isFirstPage,
    isLastPage,
  };
};

export default useCarousel;
