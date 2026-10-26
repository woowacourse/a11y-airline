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

  const currentTravelAnnouncement = [
    `${travelOptions.length}개 중 ${currentIndex + 1}번째`,
    `${currentTravel.departure}에서 ${currentTravel.destination}`,
    currentTravel.type,
    `${currentTravel.price.toLocaleString('ko-KR')}원`
  ].join(', ');

  const nextTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  return (
    <div
      className={styles.travelSection}
      role="region"
      aria-roledescription="캐로셀"
      aria-labelledby="travel-section-title"
      aria-describedby="travel-carousel-count"
    >
      <p id="travel-carousel-count" className="visually-hidden">
        총 {travelOptions.length}개의 프로모션 여행 상품이 있습니다.
      </p>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
        aria-controls="current-travel-option"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} alt="" />
      </button>
      <div className={styles.carousel}>
        <article id="current-travel-option" className={styles.card}>
          <a
            className={styles.cardLink}
            href={currentTravel.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">
              {travelOptions.length}개 중 {currentIndex + 1}번째,
            </span>
            <img src={currentTravel.image} className={styles.cardImage} alt="" />
            <div className={styles.cardContent}>
              <h3 className={`${styles.cardTitle} heading-3-text`}>
                {currentTravel.departure} - {currentTravel.destination}
              </h3>
              <p className={`${styles.cardType} body-text`}>{currentTravel.type}</p>
              <p className={`${styles.cardPrice} body-text`}>
                KRW {currentTravel.price.toLocaleString('ko-KR')}
              </p>
            </div>
            <span className="visually-hidden">새 창에서 열림</span>
          </a>
        </article>
      </div>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품"
        aria-controls="current-travel-option"
      >
        <img src={chevronRight} className={styles.navButtonIcon} alt="" />
      </button>
      <p className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
        {currentTravelAnnouncement}
      </p>
    </div>
  );
};

export default TravelSection;
