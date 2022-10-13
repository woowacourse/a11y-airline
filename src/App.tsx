import { useRef } from "react";
import { ReactComponent as ArrowLeft } from "./images/arrow_left.svg";
import { ReactComponent as ArrowRight } from "./images/arrow_right.svg";
import styled from "styled-components";
import { TravelInformation } from "./data";

const App = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

  function scrollToNextPage() {
    carouselRef.current?.scrollBy({ left: 312, top: 0, behavior: "smooth" });
  }
  function scrollToPrevPage() {
    carouselRef.current?.scrollBy({ left: -312, top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <h2>지금 떠나기 좋은 여행</h2>
      <S.Container>
        <S.Slider>
          <S.Carousel ref={carouselRef}>
            {TravelInformation.map(
              ({ route, href, id, image, price, seat }) => (
                <li key={id}>
                  <a href={href}>
                    <S.TravelItem>
                      <S.TravelItemDescription>
                        <S.TravelItemRoute>{route}</S.TravelItemRoute>
                        <S.TravelItemSeat>{seat}</S.TravelItemSeat>
                        <S.TravelItemPrice>
                          KRW {price.toLocaleString("ko-KR")} ~
                        </S.TravelItemPrice>
                      </S.TravelItemDescription>
                      <S.TravelItemImage src={image} alt={route} />
                    </S.TravelItem>
                  </a>
                </li>
              )
            )}
          </S.Carousel>
          <S.PrevButton
            type="button"
            onClick={scrollToPrevPage}
            aria-label="이전"
            aria-disabled={false}
          >
            <ArrowLeft />
          </S.PrevButton>
          <S.NextButton
            type="button"
            onClick={scrollToNextPage}
            aria-label="다음"
            aria-disabled={false}
          >
            <ArrowRight />
          </S.NextButton>
        </S.Slider>
      </S.Container>
    </main>
  );
};

export default App;

const S = {
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
  Container: styled.section`
    position: relative;
  `,
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
};
