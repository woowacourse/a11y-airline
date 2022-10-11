import SlideItem from './SlideItem';
import { carouselData } from './data';
import styled from 'styled-components';

const CarouselPage = () => {
  return (
    <main>
      <h1>마르코 항공사-Carousel</h1>
      <section>
        <h2>지금 떠나기 좋은 여행</h2>
        <SwiperContainer>
          <SwiperWrapper>
            {carouselData.map((item) => (
              <SlideItem key={item.id} {...item} />
            ))}
          </SwiperWrapper>
        </SwiperContainer>
      </section>
    </main>
  );
};

export default CarouselPage;

const SwiperContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: block;
  word-break: break-word;
  width: 100%;
  overflow: hidden;
`;

const SwiperWrapper = styled.ul`
  list-style: none;
  height: 294px;
  display: flex;
  gap: 31px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1.5;
`;
