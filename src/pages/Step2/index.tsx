import CardList from './CardList';
import { Place } from '@/types';

import dubaiImg from '@/assets/carousel_images/dubai.jpeg';
import fukuokaImg from '@/assets/carousel_images/fukuoka.jpeg';
import phuketImg from '@/assets/carousel_images/phuket.jpeg';
import chiangmaiImg from '@/assets/carousel_images/chiangmai.jpeg';
import barcelonaImg from '@/assets/carousel_images/barcelona.jpeg';
import hanoiImg from '@/assets/carousel_images/hanoi.jpeg';
import romeImg from '@/assets/carousel_images/rome.jpeg';
import hawaiiImg from '@/assets/carousel_images/hawaii.jpeg';

import styles from './index.module.scss';

const placeList: Place[] = [
  {
    title: '서울/인천 - 두바이',
    seat: '일반석 왕복',
    price: 1158000,
    image: dubaiImg,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    title: '서울/인천 - 후쿠오카',
    seat: '일반석 왕복',
    price: 340400,
    image: fukuokaImg,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&duration=7&cabin=Y',
  },
  {
    title: '서울/인천 - 푸껫',
    seat: '일반석 왕복',
    price: 740100,
    image: phuketImg,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&duration=7&cabin=Y',
  },
  {
    title: '서울/인천 - 치앙마이',
    seat: '일반석 왕복',
    price: 839100,
    image: chiangmaiImg,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&duration=7&cabin=Y',
  },
  {
    title: '서울/인천 - 바르셀로나',
    seat: '일반석 왕복',
    price: 1546300,
    image: barcelonaImg,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&duration=7&cabin=Y',
  },
  {
    title: '서울/인천 - 하노이',
    seat: '일반석 왕복',
    price: 527500,
    image: hanoiImg,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&duration=7&cabin=Y',
  },
  {
    title: '서울/인천 - 로마/레오나르도 다빈치',
    seat: '일반석 왕복',
    price: 1454200,
    image: romeImg,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&duration=7&cabin=Y',
  },
  {
    title: '서울/인천 - 호놀룰루 (하와이)',
    seat: '일반석 왕복',
    price: 1244900,
    image: hawaiiImg,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&duration=7&cabin=Y',
  },
];

function Step2() {
  return (
    <main>
      <h1 className={styles.title}>지금 떠나기 좋은 여행</h1>
      <CardList placeList={placeList} />
    </main>
  );
}

export default Step2;
