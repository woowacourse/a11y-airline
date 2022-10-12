import { Carousel } from 'components';
import { TicketItem } from 'pages/TravelRecommendationPage/components';

const tickets = [
  {
    id: 1,
    travelImage:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&cabin=Y&tripType=RT&duration=7',
    departure: '서울/인천',
    arrival: '두바이',
    ticketType: '일반석 왕복',
    minPrice: 1158000,
  },
  {
    id: 2,
    travelImage:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FUK-list-pc.jpg',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&cabin=Y&tripType=RT&duration=7',
    departure: '서울/인천',
    arrival: '후쿠오카',
    ticketType: '일반석 왕복',
    minPrice: 340400,
  },
  {
    id: 3,
    travelImage:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HKT-list-pc.jpg',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&cabin=Y&tripType=RT&duration=7',
    departure: '서울/인천',
    arrival: '푸껫',
    ticketType: '일반석 왕복',
    minPrice: 704200,
  },
  {
    id: 4,
    travelImage:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/CNX-list-pc.jpg',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&cabin=Y&tripType=RT&duration=7',
    departure: '서울/인천',
    arrival: '치앙마이',
    ticketType: '일반석 왕복',
    minPrice: 839200,
  },
  {
    id: 5,
    travelImage:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/BCN-list-pc.jpg',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&cabin=Y&tripType=RT&duration=7',
    departure: '서울/인천',
    arrival: '바르셀로나',
    ticketType: '일반석 왕복',
    minPrice: 1546300,
  },
  {
    id: 6,
    travelImage:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HAN-list-pc.jpg',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&cabin=Y&tripType=RT&duration=7',
    departure: '서울/인천',
    arrival: '하노이',
    ticketType: '일반석 왕복',
    minPrice: 527400,
  },
  {
    id: 7,
    travelImage:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FCO-list-pc.jpg',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&cabin=Y&tripType=RT&duration=7',
    departure: '서울/인천',
    arrival: '로마/레오나르도 다빈치',
    ticketType: '일반석 왕복',
    minPrice: 1454300,
  },
  {
    id: 8,
    travelImage:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HNL-list-pc.jpg',
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&cabin=Y&tripType=RT&duration=7',
    departure: '서울/인천',
    arrival: '호놀룰루 (하와이)',
    ticketType: '일반석 왕복',
    minPrice: 1244900,
  },
];

const TravelRecommendationPage = () => {
  return (
    <>
      <h1>지금 떠나기 좋은 여행</h1>
      <Carousel itemWidth={230} itemHeight={295} itemLength={8} gap={8} viewingCount={2}>
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} {...ticket} />
        ))}
      </Carousel>
    </>
  );
};

export default TravelRecommendationPage;
