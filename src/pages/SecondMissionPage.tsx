import Carousel from '../components/Carousel/Carousel';

import { TravelProductData } from '../components/TravelProduct/TravelProduct';

import Dubai from '../assets/dubai.jpg';
import Fukuoka from '../assets/fukuoka.jpg';
import Phuket from '../assets/phuket.jpg';
import Chiangmai from '../assets/chiangmai.jpg';
import Hanoi from '../assets/hanoi.jpg';
import Barcelona from '../assets/barcelona.jpg';
import Hawai from '../assets/hawai.jpg';
import Roma from '../assets/roma.jpg';

const TRAVEL_PRODUCT_LIST: TravelProductData[] = [
  {
    id: 1,
    departure: '서울/인천',
    destination: '두바이',
    seatType: '일반석',
    bookingType: '왕복',
    minimumFare: 1158000,
    imageUrl: Dubai,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&cabin=Y&tripType=RT&duration=7',
  },
  {
    id: 2,
    departure: '서울/인천',
    destination: '후쿠오카',
    seatType: '일반석',
    bookingType: '왕복',
    minimumFare: 340400,
    imageUrl: Fukuoka,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&cabin=Y&tripType=RT&duration=7',
  },
  {
    id: 3,
    departure: '서울/인천',
    destination: '푸켓',
    seatType: '일반석',
    bookingType: '왕복',
    minimumFare: 704100,
    imageUrl: Phuket,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&cabin=Y&tripType=RT&duration=7',
  },
  {
    id: 4,
    departure: '서울/인천',
    destination: '치앙마이',
    seatType: '일반석',
    bookingType: '왕복',
    minimumFare: 839100,
    imageUrl: Chiangmai,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&cabin=Y&tripType=RT&duration=7',
  },
  {
    id: 5,
    departure: '서울/인천',
    destination: '바르셀로나',
    seatType: '일반석',
    bookingType: '왕복',
    minimumFare: 1546300,
    imageUrl: Barcelona,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&duration=7&cabin=Y',
  },
  {
    id: 6,
    departure: '서울/인천',
    destination: '로마/레오나르도 다빈치',
    seatType: '일반석',
    bookingType: '왕복',
    minimumFare: 527500,
    imageUrl: Hanoi,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&duration=7&cabin=Y',
  },
  {
    id: 7,
    departure: '서울/인천',
    destination: '로마/레오나르도 다빈치',
    seatType: '일반석',
    bookingType: '왕복',
    minimumFare: 1454200,
    imageUrl: Roma,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&cabin=Y&tripType=RT&duration=7',
  },
  {
    id: 8,
    departure: '서울/인천',
    destination: '호놀룰루(하와이)',
    seatType: '일반석',
    bookingType: '왕복',
    minimumFare: 1244900,
    imageUrl: Hawai,
    href: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&cabin=Y&tripType=RT&duration=7',
  },
];

const SecondMissionPage = () => {
  return (
    <div>
      <h1>지금 떠나기 좋은 여행</h1>
      <Carousel items={TRAVEL_PRODUCT_LIST} itemSize="middle" />
    </div>
  );
};

export default SecondMissionPage;
