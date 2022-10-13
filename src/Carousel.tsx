import styled from '@emotion/styled';
import { useState } from 'react';
import Travel1 from './assets/travel_1.jpg';
import Travel2 from './assets/travel_2.jpg';
import Travel3 from './assets/travel_3.jpg';
import Travel4 from './assets/travel_4.jpg';
import Travel5 from './assets/travel_5.jpg';
import Travel6 from './assets/travel_6.jpg';
import Travel7 from './assets/travel_7.jpg';
import Travel8 from './assets/travel_8.jpg';

const TravelList = [
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel1,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel2,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel3,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel3,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel4,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel5,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel6,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel7,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel8,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
];

const TravelCarousel = () => {
  const [current, setCurrent] = useState(0);

  return (
    <StyledRoot>
      <StyledPrev onClick={() => setCurrent(current - 1)} disabled={current <= 0}>
        {'>'}
      </StyledPrev>
      <StyledWrapper current={(250 + 10) * current}>
        {TravelList.map(
          ({ departure, arrivals, seatClass, isRound, bottomPrice, imageUrl, href }) => (
            <StyledLink href={href} target='_blank'>
              <StyledTravelInfo>
                <StyledCityInfo>
                  {departure} - {arrivals}
                </StyledCityInfo>
                <StyledFlyType>
                  {seatClass}석 {isRound ? '왕복' : '편도'}
                </StyledFlyType>
                <StyledPriceInfo>KRW {bottomPrice.toLocaleString('kr')} ~</StyledPriceInfo>
              </StyledTravelInfo>
              <img src={imageUrl} alt={arrivals} />
            </StyledLink>
          )
        )}
      </StyledWrapper>
      <StyledNext onClick={() => setCurrent(current + 1)}>{'<'}</StyledNext>
    </StyledRoot>
  );
};

export default TravelCarousel;

const StyledRoot = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const StyledWrapper = styled.div<{ current: number }>`
  display: flex;
  gap: 10px;
  transform: ${({ current }) => `translateX(-${current}px)`};
  transition: transform 300ms linear;

  & > * {
    flex: none;
    width: fit-content;
  }

  img {
    max-width: 250px;
    width: 100%;
  }
`;

const StyledLink = styled.a`
  position: relative;
`;

const StyledTravelInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
`;

const StyledCityInfo = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`;

const StyledFlyType = styled.p`
  font-size: 12px;
`;

const StyledPriceInfo = styled.p`
  text-shadow: -0.5px 0 #fff, 0 0.5px #fff, 0.5px 0 #fff, 0 -0.5px #fff;
  color: #11277b;
  font-weight: 700;
  margin-top: 4px;
`;

const StyledCarouselButton = styled.button`
  width: 30px;
  height: 60px;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  border: 0;

  font-size: 24px;
`;

const StyledPrev = styled(StyledCarouselButton)`
  left: 0;
  border-radius: 0 60px 60px 0;
`;

const StyledNext = styled(StyledCarouselButton)`
  right: 0;
  border-radius: 60px 0 0 60px;
`;
