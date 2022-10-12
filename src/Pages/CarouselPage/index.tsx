import Carousel from './Carousel';
import { mockingSlideItems } from './data';
import styled from 'styled-components';

const CarouselPage = () => {
  return (
    <MainWrapper>
      <h1>마르코 항공사-Carousel</h1>
      <Carousel
        slideItems={mockingSlideItems}
        displayedSlideCount={6}
        itemWidth={190}
        itemGap={10}
        title="지금 떠나기 좋은 여행"
      />
    </MainWrapper>
  );
};

export default CarouselPage;

const MainWrapper = styled.main`
  padding: 0 2rem;
`;
