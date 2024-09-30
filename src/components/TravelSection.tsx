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
    <section className={styles.travelSection}>
      <button className={`${styles.navButton} ${styles.navButtonPrev}`} onClick={prevTravel}>
        <img src={chevronLeft} className={styles.navButtonIcon} alt="이전 여행 상품" />
      </button>
      <div className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onClick={() => handleCardClick(option.link)}
            role="link"
          >
            <p aria-live="assertive" className="visually-hidden">
              {`${travelOptions.length}개의 여행상품 중 ${index + 1}번째 상품. ${
                option.departure
              } 출발, ${option.destination} 도착, ${
                option.type
              }, 가격 ${option.price.toLocaleString()}원. 선택하면 예약 페이지로 이동합니다.`}
            </p>
            <img src={option.image} className={styles.cardImage} alt="" />
            <div className={styles.cardContent}>
              <p className={`${styles.cardTitle} heading-3-text`} aria-hidden="true">
                {option.departure} - {option.destination}
              </p>
              <p className={`${styles.cardType} body-text`} aria-hidden="true">
                {option.type}
              </p>
              <p className={`${styles.cardPrice} body-text`} aria-hidden="true">
                KRW {option.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.navButton} ${styles.navButtonNext}`} onClick={nextTravel}>
        <img src={chevronRight} className={styles.navButtonIcon} alt="다음 여행 상품" />
      </button>
    </section>
  );
};

export default TravelSection;
