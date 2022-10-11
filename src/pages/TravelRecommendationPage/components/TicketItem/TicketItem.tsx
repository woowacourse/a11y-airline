import styled, { css } from 'styled-components';
import { WrapperProps } from 'pages/TravelRecommendationPage/components/TicketItem/TicketItem.type';

const travelImage =
  'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg';
const departure = '서울/인천';
const arrival = '두바이';
const ticketType = '일반석 왕복';
const minPrice = 1158000;

const TicketItem = () => {
  return (
    <Wrapper travelImage={travelImage}>
      <a>
        <LocationWrapper>
          <span>{departure}</span>&nbsp;-&nbsp;<span>{arrival}</span>
        </LocationWrapper>
        <TicketTypeText>{ticketType}</TicketTypeText>
        <PriceText>{`KRW ${minPrice.toLocaleString()} ~`}</PriceText>
      </a>
    </Wrapper>
  );
};

export default TicketItem;

const Wrapper = styled.li`
  ${({ travelImage }: WrapperProps) => css`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 295px;
    padding: 20px 22px;
    background-image: url(${travelImage});
    background-size: 100%;
    object-fit: fill;
    color: #000;
    cursor: pointer;
  `}
`;

const LocationWrapper = styled.p`
  display: flex;
  margin-bottom: 8px;
  font-size: 1.4rem;
  font-weight: 700;
`;

const TicketTypeText = styled.p`
  font-size: 1.2rem;
`;

const PriceText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #11277b;
`;
