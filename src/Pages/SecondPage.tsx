import { useState } from 'react';
import styled from 'styled-components';
import CarouselItem from './../components/CarouselItem';
import { carouselItems } from './../const/carousel';

import Carousel from '../components/Carousel';
import LeftButton from '../images/button-left.svg';
import RightButton from '../images/button-right.svg';

const SecondPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onClickLeftButton = () => {
    setCurrentPage((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const onClickRightButton = () => {
    setCurrentPage((prev) => {
      if (prev < 7) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <>
      <S.Title>훌라훌라훌라 어깨춤을 춘다 탬버린!</S.Title>
      <S.Box>
        <S.LeftButton
          disabled={currentPage === 0 ? true : false}
          onClick={onClickLeftButton}
          aria-label='이전 캐러샐 아이템으로 가기'
        >
          <img src={LeftButton} />
        </S.LeftButton>
        <Carousel currentPage={currentPage} setCurrentPage={setCurrentPage}>
          {carouselItems.map((item) => (
            <CarouselItem item={item} />
          ))}
        </Carousel>
        <S.RightButton
          disabled={currentPage === 7 ? true : false}
          onClick={onClickRightButton}
          aria-label='다음 캐러샐 아이템으로 가기'
        >
          <img src={RightButton} />
        </S.RightButton>
      </S.Box>
    </>
  );
};

const S = {
  Title: styled.h2``,
  Box: styled.div`
    width: 36rem;
    position: relative;
  `,

  LeftButton: styled.button`
    position: absolute;
    width: 3rem;
    height: 6rem;
    transform: translateY(-50%);
    border: 0;
    cursor: pointer;
    left: 0;
    top: 50%;
    z-index: 100;
    background-color: transparent;
    &:disabled {
      cursor: not-allowed;
    }
  `,
  RightButton: styled.button`
    position: absolute;
    width: 3rem;
    height: 6rem;
    transform: translateY(-50%);
    border: 0;
    cursor: pointer;
    right: 0;
    top: 50%;
    z-index: 100;
    background-color: transparent;
    &:disabled {
      cursor: not-allowed;
    }
  `,
};

export default SecondPage;
