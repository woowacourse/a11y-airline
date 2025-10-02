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

  return (
    <div className={styles.travelSection}>
      <div className={styles.carousel}>
        {/* 안내 전용 포커스 가능한 요소 */}
        <section tabIndex={0} className={styles.visuallyHidden} aria-label="여행 프로모션 캐러셀">
          여행 프로모션, 총 {travelOptions.length}개
        </section>
        {travelOptions.map((option, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={option.link}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            aria-label={`${option.departure}에서 ${option.destination} 가는 ${
              option.type
            }, 가격 ${option.price.toLocaleString()}원, 새 창에서 열림`}
          >
            <img src={option.image} className={styles.cardImage} aria-hidden="true" />
            <div className={styles.cardContent} aria-hidden="true">
              <p className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </p>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
            </div>
          </a>
        ))}
      </div>
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 슬라이드"
      >
        <img src={chevronLeft} aria-hidden="true" className={styles.navButtonIcon} />
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 슬라이드"
      >
        <img src={chevronRight} aria-hidden="true" className={styles.navButtonIcon} />
      </button>

      <div aria-live="assertive" aria-atomic="true" className={styles.visuallyHidden}>
        세계 여행 상품 {travelOptions.length}개 중 {currentIndex + 1}번째 상품,
        {travelOptions[currentIndex].departure}에서 {travelOptions[currentIndex].destination} 가는
        {travelOptions[currentIndex].type}, 가격
        {travelOptions[currentIndex].price.toLocaleString()}원, 링크로 들어가시려면 Shift+Tab 2번
        하고 클릭하세요
      </div>
    </div>
  );
};

export default TravelSection;
