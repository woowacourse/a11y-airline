import SlideControl from './SlideControl';
import SlideItem from './SlideItem';
import { CarouselProps } from './type';
import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const enableButton = (button: HTMLButtonElement, label: string) => {
  button.setAttribute('aria-disabled', 'false');
  button.setAttribute('aria-label', label);
};

const disableButton = (button: HTMLButtonElement, label: string) => {
  button.setAttribute('aria-disabled', 'true');
  button.setAttribute('aria-label', `${label} (사용 중지)`);
};

const Carousel = ({
  slideItems,
  displayedSlideCount = 3,
  itemWidth = 249,
  itemGap = 31,
  title,
}: CarouselProps) => {
  const totalWidth = displayedSlideCount * (itemWidth + itemGap) - itemGap;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);

  const slidePrevious = () => {
    if (!leftButtonRef.current) {
      return;
    }

    if (currentSlide === 0) {
      disableButton(leftButtonRef.current, '이전');
      return;
    }

    enableButton(leftButtonRef.current, '이전');
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const slideNext = () => {
    if (!rightButtonRef.current) {
      return;
    }

    if (currentSlide > slideItems.length - 3) {
      disableButton(rightButtonRef.current, '다음');
      console.log('hi');
      return;
    }

    enableButton(rightButtonRef.current, '다음');
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
    <CarouselSection>
      <h2>{title}</h2>
      <Wrapper width={totalWidth}>
        <SliderContainer
          ref={slideRef}
          gap={itemGap}
          aria-label="Slider"
          aria-live="polite"
        >
          {slideItems.map((item) => (
            <SlideItem key={item.id} {...item} width={itemWidth} />
          ))}
        </SliderContainer>
      </Wrapper>
      <SlideControl
        slidePrevious={slidePrevious}
        slideNext={slideNext}
        leftButtonRef={leftButtonRef}
        rightButtonRef={rightButtonRef}
      />
    </CarouselSection>
  );
};

export default Carousel;

const CarouselSection = styled.section`
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div<{ width: number }>`
  ${({ width }) => css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: block;
    word-break: break-word;
    width: ${width}px;
  `}
`;

const SliderContainer = styled.ul<{ gap: number }>`
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
