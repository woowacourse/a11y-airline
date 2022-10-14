import { TripInfo } from './../components/CarouselContent';

import 바르셀로나 from '../images/carousel/BCN-list-pc.jpeg';
import 치앙마이 from '../images/carousel/CNX-list-pc.jpeg';
import 두바이 from '../images/carousel/DXB-list-pc.jpeg';
import 콜로세움 from '../images/carousel/FCO-list-pc.jpeg';
import 후쿠오카 from '../images/carousel/FUK-list-pc.jpeg';
import 하노이 from '../images/carousel/HAN-list-pc.jpeg';
import 푸껫 from '../images/carousel/HKT-list-pc.jpeg';
import 호놀룰루 from '../images/carousel/HNL-list-pc.jpeg';

export const PASSENGER = {
  DEFAULT: 1,
  MIN: 0,
  MAX: 3,
};

export const CAROUSEL_CONTENTS: TripInfo[] = [
  {
    imageUrl: 바르셀로나,
    imageAlt: '바르셀로나 이미지',
    arrivals: '바르셀로나',
    price: '1,546,400',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&cabin=Y&tripType=RT&duration=7',
  },
  {
    imageUrl: 치앙마이,
    imageAlt: '치앙마이 이미지',
    arrivals: '치망마이',
    price: '839,000',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&cabin=Y&tripType=RT&duration=7',
  },
  {
    imageUrl: 두바이,
    imageAlt: '두바이 이미지',
    arrivals: '두바이',
    price: '1,158,200',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  },
  {
    imageUrl: 콜로세움,
    imageAlt: '콜로세움 이미지',
    arrivals: '로마/레오나르도 다빈치',
    price: '1,454,400',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&cabin=Y&tripType=RT&duration=7',
  },
  {
    imageUrl: 후쿠오카,
    imageAlt: '후쿠오카 이미지',
    arrivals: '후쿠오카',
    price: '346,400',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&cabin=Y&tripType=RT&duration=7',
  },
  {
    imageUrl: 하노이,
    imageAlt: '하노이 이미지',
    arrivals: '하노이',
    price: '527,600',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&cabin=Y&tripType=RT&duration=7',
  },
  {
    imageUrl: 푸껫,
    imageAlt: '푸켓 이미지',
    arrivals: '푸켓',
    price: '713,000',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&cabin=Y&tripType=RT&duration=7',
  },
  {
    imageUrl: 호놀룰루,
    imageAlt: '호놀룰루 이미지',
    arrivals: '호놀룰루',
    price: '1,245,600',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&cabin=Y&tripType=RT&duration=7',
  },
];
