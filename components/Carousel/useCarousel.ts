import { useEffect, useRef, useState } from 'react';

const useCarousel = (moveAmount: number) => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const ulRef = useRef<HTMLUListElement | null>(null);
  const slidePosition = useRef<number>(0);

  const onClickPrevButton = () => {
    if (!ulRef.current) return;

    if (slidePosition.current === 0) return;

    if (slidePosition.current - moveAmount > 0) {
      slidePosition.current = slidePosition.current - moveAmount;
    } else {
      slidePosition.current = 0;
    }

    ulRef.current.scrollLeft = slidePosition.current;
  };

  const onClickNextButton = () => {
    if (!ulRef.current) return;

    const sliderWidth = ulRef.current.scrollWidth - ulRef.current.clientWidth;

    if (slidePosition.current === sliderWidth) return;

    if (slidePosition.current + moveAmount < sliderWidth) {
      slidePosition.current = slidePosition.current + moveAmount;
    } else {
      slidePosition.current = sliderWidth;
    }

    ulRef.current.scrollLeft = slidePosition.current;
  };

  const onScroll = () => {
    if (!ulRef.current) return;

    const sliderWidth = ulRef.current.scrollWidth - ulRef.current.clientWidth;

    slidePosition.current = ulRef.current.scrollLeft;

    setIsFirstPage(false);
    setIsLastPage(false);

    if (slidePosition.current === 0) {
      setIsFirstPage(true);
    }

    if (slidePosition.current === sliderWidth) {
      setIsLastPage(true);
    }
  };

  useEffect(() => {
    if (!ulRef.current) return;

    ulRef.current.childNodes.forEach((item) => {
      const { tagName, localName } = item as HTMLElement;
      if (tagName !== 'LI') {
        throw new Error(
          `The tag of the child element in the Carousel must be "li". (current tag is "${localName}")`
        );
      }
    });
  });

  return {
    ulRef,
    onClickPrevButton,
    onClickNextButton,
    isFirstPage,
    isLastPage,
    onScroll,
  };
};

export default useCarousel;
