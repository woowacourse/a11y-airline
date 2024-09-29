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
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 버튼"
      >
        <img
          src={chevronLeft}
          className={styles.navButtonIcon}
          alt="이전 버튼 아이콘"
          aria-live="off"
        />
      </button>
      <div
        className={styles.carousel}
        aria-label={`이미지 캐러셀의 총 개수는 ${travelOptions.length}개`}
      >
        {travelOptions.map((option, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onClick={() => handleCardClick(option.link)}
          >
            <img
              src={option.image}
              className={styles.cardImage}
              alt="여행 이미지 클릭 시 관련 페이지로 이동합니다."
            />
            <div className={styles.cardContent} aria-live="off">
              <p className={`${styles.cardTitle} heading-3-text`} aria-live="off">
                {option.departure} - {option.destination}
              </p>
              <p className={`${styles.cardType} body-text`} aria-live="off">
                {option.type}
              </p>
              <p className={`${styles.cardPrice} body-text`} aria-live="off">
                KRW {option.price.toLocaleString()}
              </p>
            </div>

            <div role="status" aria-live="polite" className={styles.visuallyHidden}>
              {option.departure}에서 {option.destination}까지 {option.type},{' '}
              {option.price.toLocaleString()}원
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.navButton} ${styles.navButtonNext}`} onClick={nextTravel}>
        <img
          src={chevronRight}
          className={styles.navButtonIcon}
          aria-label="다음 버튼 아이콘"
          aria-live="off"
        />
      </button>
    </div>
  );
};

export default TravelSection;
