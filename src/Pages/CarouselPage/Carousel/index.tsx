import SlideControl from './SlideControl';
import SlideItem from './SlideItem';
import { CarouselProps } from './type';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Carousel = ({
  slideItems,
  totalSlides = 2,
  itemWidth = 249,
  itemGap = 31,
}: CarouselProps) => {
  const totalWidth = totalSlides * (itemWidth + itemGap) - 40;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);

  const slidePrevious = () => {
    if (currentSlide === 0) {
      return;
    }

    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const slideNext = () => {
    if (currentSlide >= totalSlides) {
      return;
    }

    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  useEffect(() => {
    if (!slideRef.current) {
      return;
    }

    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${
      currentSlide * (itemWidth + itemGap)
    }px)`;
  }, [currentSlide]);

  return (
    <main>
      <h1>마르코 항공사-Carousel</h1>
      <CarouselSection>
        <h2>지금 떠나기 좋은 여행</h2>
        <Wrapper width={totalWidth}>
          <SliderContainer ref={slideRef} gap={itemGap}>
            {slideItems.map((item) => (
              <SlideItem key={item.id} {...item} width={itemWidth} />
            ))}
          </SliderContainer>
          <SlideControl slidePrevious={slidePrevious} slideNext={slideNext} />
        </Wrapper>
      </CarouselSection>
    </main>
  );
};

export default Carousel;

const CarouselSection = styled.section``;

const Wrapper = styled.div<{ width: number }>`
  ${({ width }) => css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: block;
    word-break: break-word;
    width: ${width}px;
    overflow: hidden;
    position: relative;
  `}
`;

const SliderContainer = styled.u<{ gap: number }>`
  ${({ gap }) => css`
    list-style: none;
    height: 294px;
    display: flex;
    gap: ${gap}px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  `}
`;
