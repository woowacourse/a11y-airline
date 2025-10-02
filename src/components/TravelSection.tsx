import { useEffect, useRef, useState } from 'react';

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

  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    activeLinkRef.current?.focus();
  }, [currentIndex]);

  return (
    <section
      className={styles.travelSection}
      role="region"
      aria-roledescription="carousel"
      aria-label="여행 추천 캐러셀"
    >
      <p id="travel-carousel-status" className="visually-hidden" aria-live="polite">
        총 {travelOptions.length}개의 여행 상품 중 {currentIndex + 1}번째를 보고 있습니다.
      </p>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
        aria-controls="travel-carousel-list"
      >
        <img src={chevronLeft} alt="" className={styles.navButtonIcon} />
      </button>
      <div
        className={styles.carousel}
        role="list"
        id="travel-carousel-list"
        aria-describedby="travel-carousel-status"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextTravel();
          }
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevTravel();
          }
        }}
        tabIndex={0}
      >
        {travelOptions.map((option, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} / ${travelOptions.length}: ${option.departure}에서 ${
                option.destination
              } — ${option.type}, KRW ${option.price.toLocaleString()}원`}
              aria-current={isActive ? 'true' : undefined}
              className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
            >
              <a
                href={option.link}
                className={styles.cardLink}
                tabIndex={isActive ? 0 : -1}
                ref={isActive ? activeLinkRef : null}
              >
                <img src={option.image} alt="" aria-hidden="true" className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={`${styles.cardTitle} heading-3-text`}>
                    {option.departure} → {option.destination}
                  </h3>
                  <p className={`${styles.cardType} body-text`}>{option.type}</p>
                  <p className={`${styles.cardPrice} body-text`}>
                    {option.price.toLocaleString()}원
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품"
        aria-controls="travel-carousel-list"
      >
        <img src={chevronRight} alt="" className={styles.navButtonIcon} />
      </button>
    </section>
  );
};

export default TravelSection;
