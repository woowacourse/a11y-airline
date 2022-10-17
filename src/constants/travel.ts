import { TravelInfo } from "./../type";

import DXBImage from "../images/travel/DXB-list-pc.jpg";
import BCNImage from "../images/travel/BCN-list-pc.jpg";
import CNXImage from "../images/travel/CNX-list-pc.jpg";
import FCOImage from "../images/travel/FCO-list-pc.jpg";
import FUKImage from "../images/travel/FUK-list-pc.jpg";
import HANImage from "../images/travel/HAN-list-pc.jpg";
import HKTImage from "../images/travel/HKT-list-pc.jpg";
import HNLImage from "../images/travel/HNL-list-pc.jpg";

export const TRAVEL_INFO_LIST: TravelInfo[] = [
  {
    image: DXBImage,
    location: "서울/인천 - 두바이",
    seat: "일반석 왕복",
    price: 1158000,
    href: "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y",
  },
  {
    image: FUKImage,
    location: "서울/인천 - 후쿠오카",
    seat: "일반석 왕복",
    price: 340400,
    href: "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&duration=7&cabin=Y",
  },
  {
    image: HKTImage,
    location: "서울/인천 - 푸껫",
    seat: "일반석 왕복",
    price: 704100,
    href: "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&cabin=Y&tripType=RT&duration=7",
  },
  {
    image: CNXImage,
    location: "서울/인천 - 치앙마이",
    seat: "일반석 왕복",
    price: 839100,
    href: "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&duration=7&cabin=Y",
  },
  {
    image: BCNImage,
    location: "서울/인천 - 바르셀로나",
    seat: "일반석 왕복",
    price: 1546300,
    href: "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&duration=7&cabin=Y",
  },
  {
    image: HANImage,
    location: "서울/인천 - 하노이",
    seat: "일반석 왕복",
    price: 527500,
    href: "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&duration=7&cabin=Y",
  },
  {
    image: FCOImage,
    location: "서울/인천 - 로마/레오나르도 다빈치",
    seat: "일반석 왕복",
    price: 1454200,
    href: "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&duration=7&cabin=Y",
  },
  {
    image: HNLImage,
    location: "서울/인천 - 호놀룰루 (하와이)",
    seat: "일반석 왕복",
    price: 1244900,
    href: "https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&duration=7&cabin=Y",
  },
];
