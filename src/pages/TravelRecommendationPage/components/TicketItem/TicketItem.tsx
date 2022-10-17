import styled, { css } from 'styled-components';
import {
  TicketItemProps,
  WrapperProps,
} from 'pages/TravelRecommendationPage/components/TicketItem/TicketItem.type';

const TicketItem = ({
  travelImage,
  link,
  departure,
  arrival,
  ticketType,
  minPrice,
}: TicketItemProps) => {
  return (
    <Wrapper href={link} travelImage={travelImage}>
      <LocationText aria-label={`${departure}에서 ${arrival}`}>
        {`${departure} - ${arrival}`}
      </LocationText>
      <TicketTypeText>{ticketType}</TicketTypeText>
      <PriceText
        aria-label={`${minPrice.toLocaleString()} 대한민국 원부터`}
      >{`KRW ${minPrice.toLocaleString()} ~`}</PriceText>
    </Wrapper>
  );
};

export default TicketItem;

const Wrapper = styled.a`
  ${({ travelImage }: WrapperProps) => css`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 295px;
    padding: 15px 18px;
    background-image: url(${travelImage});
    background-size: 100%;
    background-position: 'center';
    background-repeat: 'no-repeat';
    color: #000;
    cursor: pointer;
  `}
`;

const LocationText = styled.p`
  /* display: flex;
  align-items: center; */
  margin-bottom: 8px;
  font-size: 1rem;
  font-weight: 700;
`;

const TicketTypeText = styled.p`
  font-size: 0.8rem;
`;

const PriceText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #11277b;
`;
