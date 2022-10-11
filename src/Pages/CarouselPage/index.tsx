import SlideItem from './SlideItem';
import { carouselData } from './data';
import ButtonLeft from 'assets/button-left.svg';
import ButtonRight from 'assets/button-right.svg';
import styled from 'styled-components';

const CarouselPage = () => {
  return (
    <main>
      <h1>마르코 항공사-Carousel</h1>
      <CarouselSection>
        <h2>지금 떠나기 좋은 여행</h2>
        <Wrapper>
          <SliderContainer>
            {carouselData.map((item) => (
              <SlideItem key={item.id} {...item} />
            ))}
          </SliderContainer>
          <SliderControl>
            <LeftButton>
              <Hidden>이전</Hidden>
            </LeftButton>
            <RightButton>
              <Hidden>다음</Hidden>
            </RightButton>
          </SliderControl>
        </Wrapper>
      </CarouselSection>
    </main>
  );
};

export default CarouselPage;

const CarouselSection = styled.section``;

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: block;
  word-break: break-word;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SliderContainer = styled.ul`
  list-style: none;
  height: 294px;
  display: flex;
  gap: 31px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1.5;
`;

const SliderControl = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  box-sizing: border-box;
`;

const LeftButton = styled.button`
  background: url(${ButtonLeft}) no-repeat center top;
  background-size: 30px 60px;
  position: absolute;
  left: 0;
  width: 30px;
  height: 60px;
  transform: translateY(-50%);
  border: 0;
  cursor: pointer;
`;

const RightButton = styled.button`
  background: url(${ButtonRight}) no-repeat center top;
  background-size: 30px 60px;
  position: absolute;
  right: 0;
  width: 30px;
  height: 60px;
  transform: translateY(-50%);
  border: 0;
  cursor: pointer;
`;

const Hidden = styled.span`
  overflow: hidden;
  white-space: nowrap;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
`;
