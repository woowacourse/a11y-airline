import Carousel from './Carousel';
import { mockingSlideItems } from './data';
import styled from 'styled-components';

const CarouselPage = () => {
  return (
    <Wrapper>
      <Carousel
        slideItems={mockingSlideItems}
        displayedSlideCount={6}
        itemWidth={190}
        itemGap={10}
      />
    </Wrapper>
  );
};

export default CarouselPage;

const Wrapper = styled.div`
  padding: 0 2rem;
`;
