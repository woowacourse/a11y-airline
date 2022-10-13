import { useRef, useState } from 'react';
import styled from 'styled-components';

import CarouselContent from './CarouselContent';
import { TripInfo } from './CarouselContent';

const Carousel = ({ CarouselContents }: CarouselProps) => {
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const [scrollEnd, setScrollEnd] = useState(false);

  const handleClickLeftScrollButton = () => {
    carouselRef.current?.scrollBy(-263, 0);
  };

  const handleClickRightScrollButton = () => {
    const before = carouselRef.current?.scrollLeft;
    carouselRef.current?.scrollBy(263, 0);
    const after = carouselRef.current?.scrollLeft;
    if (before === after) setScrollEnd(true);
  };

  return (
    <S.Container ref={carouselRef}>
      <S.LeftScrollButton
        aria-label={'이전'}
        disabled={carouselRef.current?.scrollLeft === 0}
        onClick={handleClickLeftScrollButton}
      >
        {'<'}
      </S.LeftScrollButton>
      {CarouselContents.map((content) => {
        return (
          <CarouselContent
            key={content.imageUrl}
            imageUrl={content.imageUrl}
            imageAlt={content.imageAlt}
            arrivals={content.arrivals}
            price={content.price}
          />
        );
      })}
      <S.RightScrollButton
        aria-label={'다음'}
        disabled={scrollEnd}
        onClick={handleClickRightScrollButton}
      >
        {'>'}
      </S.RightScrollButton>
    </S.Container>
  );
};

interface CarouselProps {
  CarouselContents: TripInfo[];
}

const S = {
  Container: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: auto;
    position: relative;
    width: 100%;
    height: 297px;
    gap: 32px;
    padding: 0;
    list-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  `,

  LeftScrollButton: styled.button`
    position: fixed;
    z-index: 10;
    left: 0;
    width: 35px;
    height: 70px;
    background-color: black;
    opacity: 70%;
    border: none;
    border-radius: 0 35px 35px 0;
    color: white;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  `,

  RightScrollButton: styled.button`
    position: fixed;
    z-index: 10;
    right: 0;
    width: 35px;
    height: 70px;
    background-color: black;
    opacity: 70%;
    border: none;
    border-radius: 35px 0 0 35px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  `,
};

export default Carousel;
