import { useState } from 'react';
import styled from 'styled-components';
import CarouselItem from './../components/CarouselItem';
import { carouselItems } from './../const/carousel';

import LeftButton from '../images/button-left.svg';
import RightButton from '../images/button-right.svg';
const SecondPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <S.Box>
      <S.Title>집 떠나와~ 열차타고~</S.Title>
      <S.Slide>
        <S.LeftButton>
          <img src={LeftButton} />
        </S.LeftButton>
        {carouselItems.map((item) => (
          <CarouselItem item={item} />
        ))}
        <S.RightButton>
          <img src={RightButton} />
        </S.RightButton>
      </S.Slide>
    </S.Box>
  );
};

const S = {
  Box: styled.div``,
  Title: styled.h2``,
  Slide: styled.ul`
    display: flex;
    gap: 1rem;
    width: 90%;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    transition-duration: 700ms;
    transform: translateX(0px);

    &:first-child {
      margin-left: 0;
    }

    @media (min-width: 900px) {
      width: 55%;
    }
    @media (min-width: 640px) {
      width: 70%;
    }
  `,
  LeftButton: styled.button`
    position: absolute;
    width: 3rem;
    height: 6rem;
    transform: translateY(-50%);
    border: 0;
    cursor: pointer;
    left: 0;
    background-color: transparent;
  `,
  RightButton: styled.button`
    position: absolute;
    width: 3rem;
    height: 6rem;
    transform: translateY(-50%);
    border: 0;
    cursor: pointer;
    right: 0;
    background-color: transparent;
  `,
};

export default SecondPage;
