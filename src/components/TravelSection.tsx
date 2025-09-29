import { useState } from 'react';

import travelItem01 from '../assets/travel-item-01.png';
import travelItem02 from '../assets/travel-item-02.png';
import travelItem03 from '../assets/travel-item-03.png';
import chevronLeft from '../assets/chevron-left.svg';
import chevronRight from '../assets/chevron-right.svg';

import styles from './TravelSection.module.css';
import '../Accessibility.css';

interface TravelOption {
  departure: string;
  destination: string;
  type: string;
  price: number;
  image: string;
  link: string;
}

const travelOptions: TravelOption[] = [
  {
    departure: '서울/인천',
    destination: '두바이',
    type: '일반석 왕복',
    price: 1121600,
    image: travelItem01,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasList?TOURTYP=KALPAK&PKGBRA=KP&PKGARE=E5&REGNB1=%uC720%uB7FD&REGNB2=%uC911%uB3D9&REGTOP=1'
  },
  {
    departure: '서울/인천',
    destination: '바르셀로나',
    type: '일반석 왕복',
    price: 1515200,
    image: travelItem02,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasView?pkgpnh=KP44129'
  },
  {
    departure: '서울/인천',
    destination: '로마',
    type: '일반석 왕복',
    price: 1415800,
    image: travelItem03,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasView?pkgpnh=KP41216'
  }
];

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.travelSection}>
      <p className="visually-hidden">{`${travelOptions.length}개의 여행 상품 중 ${currentIndex + 1}번째 상품`}</p>

      <ul className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <li
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            aria-hidden={index !== currentIndex}
          >
            <button
              onClick={() => handleCardClick(option.link)}
              aria-label={`${option.departure} 출발 ${option.destination} 도착, ${
                option.type
              }, 가격 ${option.price.toLocaleString()} 원. 선택하면 예약 페이지로 이동합니다.`}
            >
              <img src={option.image} className={styles.cardImage} alt="" />
              <div className={styles.cardContent} aria-hidden="true">
                <h3 className={`${styles.cardTitle} heading-3-text`}>
                  {option.departure} - {option.destination}
                </h3>
                <p className={`${styles.cardType} body-text`}>{option.type}</p>
                <p className={`${styles.cardPrice} body-text`}>
                  KRW {option.price.toLocaleString()}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        aria-label="이전 여행 상품"
        onClick={prevTravel}
      >
        <img src={chevronLeft} className={styles.navButtonIcon} alt="" />
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        aria-label="다음 여행 상품"
        onClick={nextTravel}
      >
        <img src={chevronRight} className={styles.navButtonIcon} alt="" />
      </button>
    </div>
  );
};

export default TravelSection;
