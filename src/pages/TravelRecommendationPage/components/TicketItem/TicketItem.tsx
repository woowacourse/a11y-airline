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
