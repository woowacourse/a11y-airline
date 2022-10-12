import styled, { css } from 'styled-components';
import {
  TicketItemProps,
  WrapperProps,
} from 'pages/TravelRecommendationPage/components/TicketItem/TicketItem.type';

const TicketItem = ({
  travelImage,
  departure,
  arrival,
  ticketType,
  minPrice,
}: TicketItemProps) => {
  return (
    <Wrapper travelImage={travelImage}>
      <a href="">
        <LocationWrapper>
          <span>{departure}</span>&nbsp;-&nbsp;<span>{arrival}</span>
        </LocationWrapper>
        <TicketTypeText>{ticketType}</TicketTypeText>
        <PriceText
          aria-label={`${minPrice.toLocaleString()} 대한민국 원`}
        >{`KRW ${minPrice.toLocaleString()} ~`}</PriceText>
      </a>
    </Wrapper>
  );
};

export default TicketItem;

const Wrapper = styled.div`
  ${({ travelImage }: WrapperProps) => css`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 295px;
    padding: 20px 22px;
    background-image: url(${travelImage});
    background-size: 100%;
    object-fit: cover;
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
