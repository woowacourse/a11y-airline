import SlideControl from './SlideControl';
import SlideItem from './SlideItem';
import { carouselData } from './data';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const TOTAL_SLIDES = 4;

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);

  const slidePrevious = () => {
    if (currentSlide === 0) {
      return;
    }

    setCurrentSlide(currentSlide - 1);
  };

  const slideNext = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      return;
    }

    setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    if (!slideRef.current) {
      return;
    }

    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 280}px)`;
  }, [currentSlide]);

  return (
    <main>
      <h1>마르코 항공사-Carousel</h1>
      <CarouselSection>
        <h2>지금 떠나기 좋은 여행</h2>
        <Wrapper>
          <SliderContainer ref={slideRef}>
            {carouselData.map((item) => (
              <SlideItem key={item.id} {...item} />
            ))}
          </SliderContainer>
          <SlideControl slidePrevious={slidePrevious} slideNext={slideNext} />
        </Wrapper>
      </CarouselSection>
    </main>
  );
};

export default CarouselPage;

const CarouselSection = styled.section``;

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: block;
  word-break: break-word;
  width: 1080px;
  overflow: hidden;
  position: relative;
`;

const SliderContainer = styled.ul`
  list-style: none;
  height: 294px;
  display: flex;
  gap: 31px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1.5;
`;
