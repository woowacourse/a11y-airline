import styled from 'styled-components';

const CarouselContent = ({ imageUrl, imageAlt, arrivals, price }: TripInfo) => {
  return (
    <S.Container>
      <S.Thumbnail>
        <S.Image src={imageUrl} alt={imageAlt} />
      </S.Thumbnail>
      <S.Description>
        <S.Location>서울/인천 - {arrivals}</S.Location>
        <S.Seat>일반석 왕복</S.Seat>
        <S.Price>KRW {price} ~</S.Price>
      </S.Description>
    </S.Container>
  );
};

export interface TripInfo {
  imageUrl: string;
  imageAlt: string;
  arrivals: string;
  price: string;
}

const S = {
  Container: styled.li`
    position: relative;
    width: 230px;
    height: 295px;
  `,

  Thumbnail: styled.button`
    position: absolute;
    border: none;
    background-color: white;
    cursor: pointer;
  `,

  Image: styled.img`
    width: 230px;
    height: 295px;
    vertical-align: top;
  `,

  Description: styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 230px;
    height: 295px;
    padding: 16px;
  `,

  Location: styled.h2`
    width: 100%;
    font-size: 20px;
  `,

  Seat: styled.p`
    width: 100%;
    font-weight: 600;
    font-size: 16px;
  `,

  Price: styled.p`
    width: 100%;
    color: #11277b;
    font-weight: 600;
    font-size: 20px;
  `,
};

export default CarouselContent;
