import { useRef } from 'react';

const useCarousel = (moveAmount: number) => {
  const ulRef = useRef<HTMLUListElement | null>(null);

  const slidePosition = useRef<number>(0);

  const onClickPrevButton = () => {
    if (!ulRef.current || !ulRef.current.firstChild) return;

    slidePosition.current = ulRef.current.scrollLeft;

    slidePosition.current =
      slidePosition.current - moveAmount > 0
        ? slidePosition.current - moveAmount
        : 0;

    ulRef.current.scrollLeft = slidePosition.current;
  };

  const onClickNextButton = () => {
    if (!ulRef.current || !ulRef.current.firstChild) return;

    slidePosition.current = ulRef.current.scrollLeft;

    const sliderWidth = ulRef.current.scrollWidth - ulRef.current.clientWidth;

    slidePosition.current =
      slidePosition.current + moveAmount < sliderWidth
        ? slidePosition.current + moveAmount
        : sliderWidth;

    ulRef.current.scrollLeft = slidePosition.current;
  };

  return {
    ulRef,
    onClickPrevButton,
    onClickNextButton,
  };
};

export default useCarousel;
