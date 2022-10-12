export const URL = {
  두바이: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y',
  후쿠오카:
    'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&cabin=Y&tripType=RT&duration=7',
  푸껫: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&cabin=Y&tripType=RT&duration=7',
  치앙마이: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&duration=7&cabin=Y',
  바르셀로나: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&duration=7&cabin=Y',
  하노이: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&duration=7&cabin=Y',
  '로마/레오나르도 다빈치':
    'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&duration=7&cabin=Y',
  '호놀룰루(하와이)':
    'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&duration=7&cabin=Y',
};

export type carouselItemsType = {
  title: string;
  flightType: string;
  price: number;
  link: string;
};

export const carouselItems: carouselItemsType[] = [
  {
    title: '서울/인천 - 두바이',
    flightType: '일반석 왕복',
    price: 1158000,
    link: URL.두바이,
  },
  {
    title: '서울/인천 - 후쿠오카',
    flightType: '일반석 왕복',
    price: 340400,
    link: URL.후쿠오카,
  },
  {
    title: '서울/인천 - 푸껫',
    flightType: '일반석 왕복',
    price: 704100,
    link: URL.푸껫,
  },
  {
    title: '서울/인천 - 치앙마이',
    flightType: '일반석 왕복',
    price: 839101,
    link: URL.치앙마이,
  },
  {
    title: '서울/인천 - 바르셀로나',
    flightType: '일반석 왕복',
    price: 1546300,
    link: URL.바르셀로나,
  },
  {
    title: '서울/인천 - 하노이',
    flightType: '일반석 왕복',
    price: 527500,
    link: URL.하노이,
  },
  {
    title: '서울/인천 - 로마/레오나르도 다빈치',
    flightType: '일반석 왕복',
    price: 1454200,
    link: URL['로마/레오나르도 다빈치'],
  },
  {
    title: '서울/인천 - 호놀룰루(하와이)',
    flightType: '일반석 왕복',
    price: 1244900,
    link: URL['호놀룰루(하와이)'],
  },
];
