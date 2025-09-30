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
    <section className={styles.travelSection}>
      <h2 className={styles.heading2} tabIndex={0}>
        지금 떠나기 좋은 여행
      </h2>

      <p id="travel-pos" className={styles.visuallyHidden} tabIndex={0}>
        세계 여행 상품 {travelOptions.length}개
      </p>

      <section className={styles.carousel}>
        {travelOptions.map((option, index) => {
          const isActive = index === currentIndex;
          const itemLabel =
            `${option.departure} 출발 ${option.destination} 도착, ${option.type}, ` +
            `가격 ${option.price}원, ` +
            '선택하면 예약 페이지로 이동합니다.';

          return (
            <a
              key={index}
              className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
              aria-label={itemLabel}
              aria-hidden={isActive ? 'false' : 'true'}
              tabIndex={isActive ? 0 : -1}
              href={option.link}
              target="_blank"
            >
              <img src={option.image} className={styles.cardImage} alt="" aria-hidden="true" />
              <div className={styles.cardContent}>
                <p className={`${styles.cardTitle} heading-3-text`}>
                  {option.departure} - {option.destination}
                </p>
                <p className={`${styles.cardType} body-text`}>{option.type}</p>
                <p className={`${styles.cardPrice} body-text`}>
                  KRW {option.price.toLocaleString()}
                </p>
              </div>
            </a>
          );
        })}
      </section>
      <p id="travel-live" className={styles.visuallyHidden} aria-live="polite" aria-atomic="true">
        세계 여행 상품 {travelOptions.length}개 중 {currentIndex + 1}번째 상품,{' '}
        {travelOptions[currentIndex].departure}출발,
        {travelOptions[currentIndex].destination}도착, {travelOptions[currentIndex].type}, 가격
        {travelOptions[currentIndex].price}원
      </p>

      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} alt="" aria-hidden="true" />
      </button>

      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품"
      >
        <img src={chevronRight} className={styles.navButtonIcon} alt="" aria-hidden="true" />
      </button>
    </section>
  );
};

export default TravelSection;
