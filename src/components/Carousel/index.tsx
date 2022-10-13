import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../images/arrow_left.svg";
import { ReactComponent as ArrowRight } from "../../images/arrow_right.svg";
import { ReactNode } from "react";

const Carousel = ({ children }: { children: ReactNode[] }) => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [movable, setMovable] = useState({
    prev: false,
    next: true,
  });

  function scrollToNextPage() {
    carouselRef.current?.scrollBy({ left: 1, top: 0, behavior: "smooth" });
  }
  function scrollToPrevPage() {
    carouselRef.current?.scrollBy({ left: -1, top: 0, behavior: "smooth" });
  }

  const handleXScrollMove = () => {
    const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current!;

    setMovable({
      prev: scrollLeft !== 0,
      next: scrollWidth !== scrollLeft + offsetWidth,
    });
  };

  useEffect(() => {
    carouselRef.current?.addEventListener("scroll", handleXScrollMove);

    return () => {
      carouselRef.current?.removeEventListener("scroll", handleXScrollMove);
    };
  }, [carouselRef.current]);

  return (
    <S.Slider>
      <S.Carousel ref={carouselRef} aria-label="항공권들">
        {children}
      </S.Carousel>
      <S.PrevButton
        type="button"
        onClick={scrollToPrevPage}
        aria-label="이전"
        aria-disabled={!movable.prev}
      >
        <ArrowLeft />
      </S.PrevButton>
      <S.NextButton
        type="button"
        onClick={scrollToNextPage}
        aria-label="다음"
        aria-disabled={!movable.next}
      >
        <ArrowRight />
      </S.NextButton>
    </S.Slider>
  );
};

export default Carousel;

const S = {
  Slider: styled.section`
    position: relative;
  `,

  Carousel: styled.ul`
    display: grid;
    grid-auto-flow: column;
    scroll-behavior: auto;
    gap: 1rem;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  TravelItem: styled.section`
    position: relative;
  `,
  TravelItemDescription: styled.section`
    display: flex;
    flex-flow: column;
    position: absolute;
    top: 10%;
    left: 10%;
    color: black;
  `,
  TravelItemImage: styled.img`
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    max-height: 300px;
    justify-content: center;
  `,
  TravelItemRoute: styled.span`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 7px;
  `,
  TravelItemSeat: styled.span`
    color: #242424;
    font-size: 0.8rem;
  `,
  TravelItemPrice: styled.span`
    color: #11277b;
    font-size: 1rem;
    font-weight: bold;
  `,
  NextButton: styled.button`
    z-index: 100000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  `,
  PrevButton: styled.button`
    z-index: 100000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  `,
};
