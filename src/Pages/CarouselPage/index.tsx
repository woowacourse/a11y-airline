import styled from 'styled-components';

const CarouselPage = () => {
  return (
    <main>
      <h1>마르코 항공사-Carousel</h1>
      <section>
        <h2>지금 떠나기 좋은 여행</h2>
        <SwiperContainer>
          <SwiperWrapper>
            <SwiperSlideItem data-index="0">0</SwiperSlideItem>
            <SwiperSlideItem data-index="1">1</SwiperSlideItem>
            <SwiperSlideItem data-index="2">2</SwiperSlideItem>
            <SwiperSlideItem data-index="3">3</SwiperSlideItem>
            <SwiperSlideItem data-index="4">4</SwiperSlideItem>
            <SwiperSlideItem data-index="5">5</SwiperSlideItem>
            <SwiperSlideItem data-index="6">6</SwiperSlideItem>
            <SwiperSlideItem data-index="7">7</SwiperSlideItem>
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
  background-color: blue;
  overflow: hidden;
`;

const SwiperWrapper = styled.ul`
  /* transform: translateX(-100px); */
  /* list-style-image: initial; */
  list-style: none;
  height: 294px;
  display: flex;
  gap: 30px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #e8e6e3;
  font-size: 1.6rem;
  line-height: 1.5;
`;

const SwiperSlideItem = styled.li`
  min-width: 230px;
  display: list-item;
  background-color: red;
  border: 1px solid white;
`;
