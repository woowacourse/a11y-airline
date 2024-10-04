import { useState, useEffect, useRef } from 'react';

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
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      cardRefs.current[currentIndex]?.focus();
    } else {
      isMounted.current = true;
    }
  }, [currentIndex]);

  const nextTravel: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
  };

  const prevTravel: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  const handleCardClick =
    (link: string): React.MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.preventDefault();
      window.open(link, '_blank', 'noopener,noreferrer');
    };

  return (
    <section className={styles.travelSection} aria-live="polite">
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행"
        aria-controls="carousel"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} role="presentation" alt="" />
      </button>
      <div className={styles.carousel} id="carousel">
        {travelOptions.map((option, index) => (
          <button
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onClick={() => handleCardClick(option.link)}
            aria-roledescription="carousel item"
            aria-label={`${travelOptions.length}개의 여행 중 ${index + 1}번째, ${
              option.departure
            }에서 ${option.destination}로 가는 여행 ${
              option.type
            } ${option.price.toLocaleString()}원, 선택 시 예약 페이지로 이동합니다.`}
            tabIndex={index === currentIndex ? 0 : -1}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img
              src={option.image}
              className={styles.cardImage}
              aria-label={`${option.departure} - ${option.destination}`}
              aria-hidden="true"
            />
            <div className={styles.cardContent} aria-hidden="true">
              <p className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </p>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
            </div>
          </button>
        ))}
      </div>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행"
        aria-controls="carousel"
      >
        <img src={chevronRight} className={styles.navButtonIcon} role="presentation" alt="" />
      </button>
    </section>
  );
};

export default TravelSection;
