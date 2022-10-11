import Carousel from './Carousel';
import { mockingSlideItems } from './data';

const CarouselPage = () => {
  return (
    <>
      <Carousel
        slideItems={mockingSlideItems}
        totalSlides={3}
        itemWidth={249}
        itemGap={30}
      />
    </>
  );
};

export default CarouselPage;
