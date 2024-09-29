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

  const getTravelDescription = () => {
    const { departure, destination, price, type } = travelOptions[currentIndex];
    return `
      ${travelOptions.length}개의 여행 상품 중 ${currentIndex + 1}번째입니다.
      ${departure}에서 ${destination}로 향하는 ${type} 상품으로, 가격은 ${price}원입니다.
      선택하시면 예약 페이지로 이동합니다.
    `;
  };

  return (
    <section className={styles.travelSection}>
      <h2 className={`${styles.travelSectionTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
      <section className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <article
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onClick={() => handleCardClick(option.link)}
            role="button"
            aria-label={getTravelDescription()}
            aria-live="polite"
          >
            <div aria-hidden="true">
              <img
                alt={`${option.departure}-${option.destination} 여행 상품 이미지`}
                src={option.image}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={`${styles.cardTitle} heading-3-text`}>
                  {option.departure} - {option.destination}
                </h3>
                <p className={`${styles.cardType} body-text`}>{option.type}</p>
                <p className={`${styles.cardPrice} body-text`}>
                  KRW {option.price.toLocaleString()}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
      >
        <img src={chevronLeft} alt="이전 상품으로 이동" className={styles.navButtonIcon} />
      </button>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
      >
        <img src={chevronRight} alt="다음 상품으로 이동" className={styles.navButtonIcon} />
      </button>
    </section>
  );
};

export default TravelSection;
