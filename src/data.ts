export interface Item {
  id: number;
  from: '서울/인천';
  to: '바르셀로나' | '취리히' | '델리' | '도쿄' | '런던';
  sit: '일반석 왕복' | '비즈니스 왕복' | '일반석 편도' | '비즈니스 편도';
  image: string;
  currency: 'USD' | 'EUR' | 'GBP' | 'KRW';
  price: number;
  link: string;
}

export const items: Item[] = [
  {
    id: 1,
    from: '서울/인천',
    to: '바르셀로나',
    sit: '일반석 왕복',
    image: 'Barcelona-background',
    currency: 'KRW',
    price: 1121600,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=BCN&duration=5&cabin=Y',
  },
  {
    id: 2,
    from: '서울/인천',
    to: '취리히',
    sit: '일반석 왕복',
    image: 'Suisse-background',
    currency: 'KRW',
    price: 950100,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=ZRH&duration=8&cabin=Y',
  },
  {
    id: 3,
    from: '서울/인천',
    to: '델리',
    sit: '비즈니스 편도',
    image: 'India-background',
    currency: 'KRW',
    price: 2010200,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=DEL&duration=11&cabin=Y',
  },
  {
    id: 4,
    from: '서울/인천',
    to: '도쿄',
    sit: '일반석 편도',
    image: 'Tokyo-background',
    currency: 'KRW',
    price: 90200,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=HND&duration=11&cabin=Y',
  },
  {
    id: 5,
    from: '서울/인천',
    to: '런던',
    sit: '비즈니스 편도',
    image: 'London-background',
    currency: 'KRW',
    price: 10100,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=LHR&duration=1&cabin=Y&yearMonth=202211&openC=Y',
  },
];
