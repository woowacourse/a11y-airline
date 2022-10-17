import { useRef, useState } from 'react';
import styled from 'styled-components';
import useCarousel from '../hooks/useCarousel';

import CarouselContent from './CarouselContent';
import { TripInfo } from './CarouselContent';

const Carousel = ({ CarouselContents }: CarouselProps) => {
  const {
    carouselRef,
    scrollStart,
    scrollEnd,
    handleClickLeftScrollButton,
    handleClickRightScrollButton,
    announceState,
  } = useCarousel();

  return (
    <S.Container>
      <S.LeftScrollButton
        aria-label={'이전'}
        aria-disabled={scrollStart}
        onClick={handleClickLeftScrollButton}
      >
        {'<'}
      </S.LeftScrollButton>
      <S.UlContainer ref={carouselRef}>
        {CarouselContents.map((content) => {
          return (
            <CarouselContent
              key={content.imageUrl}
              imageUrl={content.imageUrl}
              imageAlt={content.imageAlt}
              arrivals={content.arrivals}
              price={content.price}
              link={content.link}
            />
          );
        })}
      </S.UlContainer>
      <S.RightScrollButton
        aria-label={'다음'}
        aria-disabled={scrollEnd}
        onClick={handleClickRightScrollButton}
      >
        {'>'}
      </S.RightScrollButton>
      <S.Announce role={'status'} aria-live={'polite'} tabIndex={-1}>
        {announceState}
      </S.Announce>
    </S.Container>
  );
};

interface CarouselProps {
  CarouselContents: TripInfo[];
}

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: auto;
    position: relative;
    width: 490px;
    height: 297px;
    padding: 0;
    list-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 490px) {
      width: inherit;
    }
  `,

  UlContainer: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: auto;
    position: relative;
    width: 490px;
    height: 297px;
    gap: 32px;
    margin: 0;
    padding: 0;
    list-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  `,

  LeftScrollButton: styled.button`
    position: absolute;
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
    position: absolute;
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

  Announce: styled.p`
    transform: scale(0);
  `,
};

export default Carousel;
