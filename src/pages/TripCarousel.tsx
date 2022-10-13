import styled from 'styled-components';
import Carousel from '../components/Carousel';
import { CAROUSEL_CONTENTS } from '../constants';

const TripCarousel = () => {
  return (
    <S.Main>
      <S.Title>지금 떠나기 좋은 여행</S.Title>
      <Carousel CarouselContents={CAROUSEL_CONTENTS} />
    </S.Main>
  );
};

const S = {
  Main: styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 16px;
  `,

  Title: styled.h1`
    margin-bottom: 1.5rem;
  `,
};

export default TripCarousel;
