import { useState } from 'react';

import chevronLeft from '../assets/chevron-left.svg';
import chevronRight from '../assets/chevron-right.svg';
import soosoo1 from '../assets/soosoo1.png';
import soosoo2 from '../assets/soosoo2.png';
import soosoo3 from '../assets/soosoo3.png';

import styles from './TravelSection.module.css';

interface TravelOption {
  departure: string;
  destination: string;
  type: string;
  price: number;
  image: string;
  link: string;
  ariaLabel: string;
  style: React.CSSProperties;
}

const travelOptions: TravelOption[] = [
  {
    departure: '서울/인천',
    destination: '쑤쑤의 사랑의 총알',
    type: '일반석 왕복',
    price: 1121600,
    image: soosoo1,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasList?TOURTYP=KALPAK&PKGBRA=KP&PKGARE=E5&REGNB1=%uC720%uB7FD&REGNB2=%uC911%uB3D9&REGTOP=1',
    ariaLabel: '3개의 여행 상품 중 첫 번째 상품',
    style: {
      objectFit: 'cover',
      objectPosition: 'center 13%'
    }
  },
  {
    departure: '서울/인천',
    destination: '쑤쑤의 기지개',
    type: '일반석 왕복',
    price: 1515200,
    image: soosoo2,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasView?pkgpnh=KP44129',
    ariaLabel: '3개의 여행 상품 중 두 번째 상품',
    style: {
      objectFit: 'contain',
      objectPosition: 'right 50%'
    }
  },
  {
    departure: '서울/인천',
    destination: '쑤쑤의 쌍커풀 수술',
    type: '일반석 왕복',
    price: 1529000,
    image: soosoo3,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasView?pkgpnh=KP41216',
    ariaLabel: '3개의 여행 상품 중 세 번째 상품',
    style: {
      objectFit: 'contain',
      objectPosition: 'right'
    }
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
      <div className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
          >
            <span aria-live="polite" className="visually-hidden">
              {option.ariaLabel}
            </span>
            <button
              onClick={() => handleCardClick(option.link)}
              className={styles.carouselCardButton}
            >
              <img
                src={option.image}
                className={styles.cardImage}
                style={option.style}
                alt={`${option.destination} 이미지`}
              />
              <div className={styles.cardContent}>
                <p className={`${styles.cardTitle} heading-3-text`}>
                  {option.departure} - {option.destination}
                </p>
                <p className={`${styles.cardType} body-text`}>{option.type}</p>
                <p className={`${styles.cardPrice} body-text`}>
                  KRW {option.price.toLocaleString()}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} />
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품"
      >
        <img src={chevronRight} className={styles.navButtonIcon} />
      </button>
    </div>
  );
};

export default TravelSection;
