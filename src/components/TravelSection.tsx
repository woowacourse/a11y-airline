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

  const currentTravelItem = travelOptions[currentIndex];
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === travelOptions.length - 1;

  return (
    <div className={styles.travelSection} tabIndex={-1}>
      <div
        aria-live="polite"
        aria-label={`여행 상품 캐러셀 총 ${travelOptions.length}개의 여행 상품 중 ${
          currentIndex + 1
        }번째 상품을 확인 중`}
        className={styles.srOnly}
      />
      <div
        id="travel-description"
        aria-live="polite"
        className={styles.srOnly}
        aria-label={`현재 ${currentIndex + 1}번째 여행 상품: ${currentTravelItem.departure}출발
          ${currentTravelItem.destination}도착 ${currentTravelItem.type}항공권입니다. 가격은
          ${currentTravelItem.price}원 입니다.`}
      />
      <button
        className={`${styles.navButton} ${styles.navButtonPrev} ${
          isPrevDisabled ? styles.disabled : ''
        }`}
        onClick={prevTravel}
        disabled={isPrevDisabled}
        aria-label="이전 여행 상품"
        aria-disabled={isPrevDisabled}
      >
        <img src={chevronLeft} className={styles.navButtonIcon} />
      </button>

      <div className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <a
            key={index}
            aria-hidden={currentIndex !== index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            aria-describedby="travel-description"
            aria-label={`클릭하시면 항공권 구매 링크로 이동합니다.`}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img aria-hidden src={option.image} className={styles.cardImage} />
            <div aria-hidden className={styles.cardContent}>
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
        className={`${styles.navButton} ${styles.navButtonNext} ${
          isNextDisabled ? styles.disabled : ''
        }`}
        onClick={nextTravel}
        disabled={isNextDisabled}
        aria-label="다음 여행 상품"
        aria-disabled={isNextDisabled}
      >
        <img src={chevronRight} className={styles.navButtonIcon} />
      </button>
    </div>
  );
};

export default TravelSection;
