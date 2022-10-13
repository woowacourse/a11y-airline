import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';
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
    id: 1,
    departure: '서울/인천',
    arrivals: '두바이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1158200,
    imageUrl: Travel1,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    id: 2,
    departure: '서울/인천',
    arrivals: '후쿠오카',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 340400,
    imageUrl: Travel2,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&duration=7&cabin=Y',
  },
  {
    id: 3,
    departure: '서울/인천',
    arrivals: '푸켓',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 713000,
    imageUrl: Travel3,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&duration=7&cabin=Y',
  },
  {
    id: 4,
    departure: '서울/인천',
    arrivals: '치앙마이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 839000,
    imageUrl: Travel4,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&duration=7&cabin=Y',
  },
  {
    id: 5,
    departure: '서울/인천',
    arrivals: '바르셀로나',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1546400,
    imageUrl: Travel5,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&duration=7&cabin=Y',
  },
  {
    id: 6,
    departure: '서울/인천',
    arrivals: '하노이',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 527600,
    imageUrl: Travel6,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&duration=7&cabin=Y',
  },
  {
    id: 7,
    departure: '서울/인천',
    arrivals: '로마',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1454400,
    imageUrl: Travel7,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&duration=7&cabin=Y',
  },
  {
    id: 8,
    departure: '서울/인천',
    arrivals: '호놀룰루 (하와이)',
    seatClass: '일반',
    isRound: '왕복',
    bottomPrice: 1245600,
    imageUrl: Travel8,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&duration=7&cabin=Y',
  },
];

const itemSize = 250 + 10;
const totalSize = itemSize * TravelList.length;

const TravelCarousel = () => {
  const [xTranslated, changeXTranslated] = useState(0);
  const [maxXTranslated, setMaxXTranslated] = useState(0);

  const carouselWidth = useRef(0);
  const wrapperRef = useRef<HTMLUListElement>(null);

  const handleClickPrevButton = () => {
    const next = xTranslated - itemSize;

    if (next <= 0) {
      changeXTranslated(0);

      return;
    }

    changeXTranslated(next);
  };

  const handleClickNextButton = () => {
    const next = xTranslated + itemSize;

    if (next >= maxXTranslated) {
      changeXTranslated(maxXTranslated);

      return;
    }

    changeXTranslated(next);
  };

  useEffect(() => {
    const onResize = () => {
      if (!wrapperRef.current) return;

      const wrapperWidth = Number(getComputedStyle(wrapperRef.current).width.slice(0, -2));

      carouselWidth.current = wrapperWidth;

      setMaxXTranslated(totalSize - carouselWidth.current - 10);
    };

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <StyledRoot>
      <StyledWrapper>
        <StyledTravelList xTranslated={xTranslated} ref={wrapperRef}>
          {TravelList.map(
            ({ id, departure, arrivals, seatClass, isRound, bottomPrice, imageUrl, href }) => (
              <li key={id}>
                <StyledLink href={href} target='_blank'>
                  <StyledTravelInfo>
                    <StyledCityInfo>
                      {departure} - {arrivals}
                    </StyledCityInfo>
                    <StyledFlyType>
                      {seatClass}석 {isRound ? '왕복' : '편도'}
                    </StyledFlyType>
                    <StyledPriceInfo>KRW {bottomPrice.toLocaleString('kr')}</StyledPriceInfo>
                    <span aria-hidden={true}>&nbsp;~</span>
                  </StyledTravelInfo>
                  <img src={imageUrl} alt={arrivals} width={250} height={320.36} />
                </StyledLink>
              </li>
            )
          )}
        </StyledTravelList>
      </StyledWrapper>
      <StyledPrev aria-label='이전' onClick={handleClickPrevButton} disabled={xTranslated <= 0}>
        {'>'}
      </StyledPrev>
      <StyledNext
        aria-label='다음'
        onClick={handleClickNextButton}
        disabled={xTranslated >= maxXTranslated}
      >
        {'<'}
      </StyledNext>
    </StyledRoot>
  );
};

export default TravelCarousel;

const StyledRoot = styled.div`
  width: 510px;
  position: relative;
`;

const StyledWrapper = styled.div`
  overflow-x: scroll;
`;

const StyledTravelList = styled.ul<{ xTranslated: number }>`
  display: flex;
  gap: 10px;
  transform: ${({ xTranslated }) => `translateX(-${xTranslated}px)`};
  transition: transform 300ms linear;

  & > li {
    flex: none;
    width: fit-content;
    position: relative;
  }

  img {
    max-width: 250px;
    width: 100%;
  }
`;

const StyledLink = styled.a`
  width: 100%;
  height: 100%;
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

const StyledPriceInfo = styled.span`
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
