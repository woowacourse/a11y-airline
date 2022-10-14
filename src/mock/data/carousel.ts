export interface CarouselItem {
  id: number;
  departure: string;
  arrival: string;
  cabinClass: string;
  tripType: string;
  price: string;
  imgUrl: string;
  linkUrl: string;
}

export const carouselList: CarouselItem[] = [
  {
    id: 1,
    departure: "서울/인천",
    arrival: "두바이",
    cabinClass: "일반석",
    tripType: "왕복",
    price: "1158200",
    imgUrl:
      "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg",
    linkUrl:
      "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y",
  },
  {
    id: 2,
    departure: "서울/인천",
    arrival: "후쿠오카",
    cabinClass: "일반석",
    tripType: "왕복",
    price: "340400",
    imgUrl:
      "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FUK-list-pc.jpg",
    linkUrl:
      "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&duration=7&cabin=Y",
  },
  {
    id: 3,
    departure: "서울/인천",
    arrival: "푸껫",
    cabinClass: "일반석",
    tripType: "왕복",
    price: "713000",
    imgUrl:
      "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HKT-list-pc.jpg",
    linkUrl:
      "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&duration=7&cabin=Y",
  },
  {
    id: 4,
    departure: "서울/인천",
    arrival: "치앙마이",
    cabinClass: "일반석",
    tripType: "왕복",
    price: "839000",
    imgUrl:
      "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/CNX-list-pc.jpg",
    linkUrl:
      "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&duration=7&cabin=Y",
  },
  {
    id: 5,
    departure: "서울/인천",
    arrival: "바르셀로나",
    cabinClass: "일반석",
    tripType: "왕복",
    price: "1546400",
    imgUrl:
      "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/BCN-list-pc.jpg",
    linkUrl:
      "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&duration=7&cabin=Y",
  },
  {
    id: 6,
    departure: "서울/인천",
    arrival: "하노이",
    cabinClass: "일반석",
    tripType: "왕복",
    price: "527600",
    imgUrl:
      "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HAN-list-pc.jpg",
    linkUrl:
      "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&duration=7&cabin=Y",
  },
  {
    id: 7,
    departure: "서울/인천",
    arrival: "로마/레오나르도 다빈치",
    cabinClass: "일반석",
    tripType: "왕복",
    price: "1454400",
    imgUrl:
      "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FCO-list-pc.jpg",
    linkUrl:
      "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&duration=7&cabin=Y",
  },
  {
    id: 8,
    departure: "서울/인천",
    arrival: "호놀룰루 (하와이)",
    cabinClass: "일반석",
    tripType: "왕복",
    price: "1245600",
    imgUrl:
      "https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HNL-list-pc.jpg",
    linkUrl:
      "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&duration=7&cabin=Y",
  },
];
