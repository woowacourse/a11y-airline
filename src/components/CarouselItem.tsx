import { ForwardedRef, forwardRef, memo } from 'react';
import styled from 'styled-components';
import { CarouselItemType } from '../const/carousel';
import Barcel from '../images/barcel.jpg';
import Chiang from '../images/chiang.jpg';
import Dubai from '../images/dubai.jpg';
import Hanoi from '../images/hanoi.jpg';
import Hornol from '../images/hornol.jpg';
import Hukuoka from '../images/hukuoka.jpg';
import Pucket from '../images/pucket.jpg';
import Rome from '../images/rome.jpg';

const imgMap = (img: string) => {
  switch (img) {
    case 'Barcel':
      return Barcel;
    case 'Chiang':
      return Chiang;
    case 'Dubai':
      return Dubai;
    case 'Hanoi':
      return Hanoi;
    case 'Hukuoka':
      return Hukuoka;
    case 'Pucket':
      return Pucket;
    case 'Rome':
      return Rome;
    case 'Hornol':
      return Hornol;
    default:
      break;
  }
};

const CarouselItem = ({ item }: { item: CarouselItemType }, ref: ForwardedRef<HTMLLIElement>) => {
  return (
    <S.BOX ref={ref}>
      <a href={item.link} aria-hidden='true'>
        <S.IMG alt={`행복한 ${item.title} 이미지`} src={imgMap(item.imgsrc)}></S.IMG>
      </a>
      <S.Content>
        <S.Title>{item.title}</S.Title>
        <S.FlightType>{item.flightType}</S.FlightType>
        <S.Price>
          <S.CurrencyType>KRW </S.CurrencyType>
          <S.PriceValue>{item.price.toLocaleString()}</S.PriceValue>
        </S.Price>
      </S.Content>
    </S.BOX>
  );
};

const S = {
  BOX: styled.li`
    position: relative;
    width: calc((100% - 14rem) / 2);
    min-width: 245px;
    flex-shrink: 0;
    display: list-item;
    list-style: none;
    text-align: -webkit-match-parent;
  `,
  IMG: styled.img`
    width: 100%;
    height: auto;
    vertical-align: top;
  `,
  Content: styled.div`
    position: absolute;
    left: 10%;
    top: 6%;
    width: 100%;
    max-height: 15rem;
    overflow: hidden;
    padding: 1.6rem 0;
  `,
  Title: styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 0.8rem;
    line-height: 1.58;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 6.6rem;
  `,
  FlightType: styled.div`
    font-size: 0.8rem;
    color: #000;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  Price: styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: #11277b;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 1059px) {
      text-shadow: -0.5px 0 #fff, 0 0.5px #fff, 0.5px 0 #fff, 0 -0.5px #fff;
    }
  `,
  CurrencyType: styled.span``,
  PriceValue: styled.span``,
};

export default memo(forwardRef(CarouselItem));
