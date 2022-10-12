import { FlexBox, Hidden } from "components";
import { CarouselItemProps } from "./type";
import styled from "styled-components";

export const CarouselItem = ({
  place,
  seat,
  minCost,
  link,
  placeImg,
}: CarouselItemProps) => {
  const costRange = `KRW ${minCost.toLocaleString()} ~`;
  const screenReaderCost = `${minCost.toLocaleString()} 대한민국 원`;
  const screenReaderPlace = place.replace("-", "");

  return (
    <a href={link}>
      <TravelItem>
        <TravelImgContainer>
          <img src={placeImg} alt="" />
        </TravelImgContainer>
        <TravelDescContainer flexDirection="column" gap="0.3rem">
          <Hidden>{screenReaderPlace}</Hidden>
          <p aria-hidden="true">{place}</p>
          <p>{seat}</p>
          <Hidden>{screenReaderCost}</Hidden>
          <p aria-hidden="true">{costRange}</p>
        </TravelDescContainer>
      </TravelItem>
    </a>
  );
};

const TravelItem = styled.div`
  width: 10rem;
  height: 13rem;
  position: relative;
`;

const TravelImgContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TravelDescContainer = styled(FlexBox)`
  width: 10rem;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.5rem 0.6rem;
  p {
    overflow: hidden;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
  }
`;
