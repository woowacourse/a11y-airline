import { useState } from 'react';

import travelItem01 from '../assets/travel-item-01.png';
import travelItem02 from '../assets/travel-item-02.png';
import travelItem03 from '../assets/travel-item-03.png';
import chevronLeft from '../assets/chevron-left.svg';
import chevronRight from '../assets/chevron-right.svg';

import styles from './TravelSection.module.css';

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

  const currentTravel = travelOptions[currentIndex];
  const currentPosition = `${travelOptions.length}개 중 ${currentIndex + 1}번째`;
  const currentTravelDescription = `${currentPosition}, ${currentTravel.departure}에서 ${currentTravel.destination}, ${currentTravel.type}, ${currentTravel.price.toLocaleString('ko-KR')}원`;

  const nextTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  return (
    <div className={styles.travelSection}>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
      >
        <img src={chevronLeft} alt="" className={styles.navButtonIcon} />
      </button>
      <div className={styles.carousel}>
        <a href={currentTravel.link} className={styles.card}>
          <img src={currentTravel.image} alt="" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <span className="visually-hidden">{currentPosition}, </span>
            <h3 className={`${styles.cardTitle} heading-3-text`}>
              {currentTravel.departure}에서 {currentTravel.destination}
            </h3>
            <p className={`${styles.cardType} body-text`}>{currentTravel.type}</p>
            <p className={`${styles.cardPrice} body-text`}>
              {currentTravel.price.toLocaleString('ko-KR')}원
            </p>
          </div>
        </a>
      </div>
      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {currentTravelDescription}
      </p>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품"
      >
        <img src={chevronRight} alt="" className={styles.navButtonIcon} />
      </button>
    </div>
  );
};

export default TravelSection;
