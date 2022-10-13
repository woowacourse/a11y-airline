import styled from "styled-components";
import Carousel from "./components/Carousel";
import { TravelInformation } from "./data";

const App = () => {
  return (
    <S.Wrapper>
      <h2>지금 떠나기 좋은 여행</h2>
      <S.Container>
        <Carousel>
          {TravelInformation.map(({ route, href, id, image, price, seat }) => (
            <li key={id}>
              <a href={href}>
                <S.TravelItem>
                  <S.TravelItemDescription>
                    <S.TravelItemRoute>{route}</S.TravelItemRoute>
                    <S.TravelItemSeat>{seat}</S.TravelItemSeat>
                    <S.TravelItemPrice>
                      KRW {price.toLocaleString("ko-KR")}
                      <span aria-hidden="true">~</span>
                    </S.TravelItemPrice>
                  </S.TravelItemDescription>
                  <S.TravelItemImage src={image} alt={route} />
                </S.TravelItem>
              </a>
            </li>
          ))}
        </Carousel>
      </S.Container>
    </S.Wrapper>
  );
};

export default App;

const S = {
  Wrapper: styled.main`
    padding: 1rem;
  `,
  Container: styled.section`
    width: 50%;
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
