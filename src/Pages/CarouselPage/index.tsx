import Carousel from './Carousel';
import { mockingSlideItems } from './data';

const CarouselPage = () => {
  return (
    <>
      <Carousel
        slideItems={mockingSlideItems}
        displayedSlideCount={2}
        itemWidth={190}
        itemGap={10}
      />
    </>
  );
};

export default CarouselPage;
