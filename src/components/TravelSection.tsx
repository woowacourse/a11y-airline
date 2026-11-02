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

const formatPrice = (price: number) => `${price.toLocaleString()}원`;

const getTravelDescription = (option: TravelOption) =>
  `${option.departure}에서 ${option.destination}, ${option.type}, ${formatPrice(option.price)}`;

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [announcement, setAnnouncement] = useState('');

  const moveTo = (index: number) => {
    setCurrentIndex(index);
    setAnnouncement(
      `총 ${travelOptions.length}개 중 ${index + 1}번째, ${getTravelDescription(travelOptions[index])}`
    );
  };

  const nextTravel = () => {
    moveTo((currentIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    moveTo((currentIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  return (
    <div
      className={styles.travelSection}
      role="region"
      aria-roledescription="캐러셀"
      aria-label={`추천 여행 상품 총 ${travelOptions.length}개`}
    >
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
        aria-controls="travel-carousel"
      >
        <img src={chevronLeft} alt="" className={styles.navButtonIcon} />
      </button>
      <div id="travel-carousel" className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <div
            key={index}
            role="group"
            aria-roledescription="슬라이드"
            aria-label={`총 ${travelOptions.length}개 중 ${index + 1}번째`}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
          >
            <a
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label={`${getTravelDescription(option)}, 새 창에서 열림`}
            >
              <img src={option.image} alt="" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <p className={`${styles.cardTitle} heading-3-text`}>
                  {option.departure} - {option.destination}
                </p>
                <p className={`${styles.cardType} body-text`}>{option.type}</p>
                <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품"
        aria-controls="travel-carousel"
      >
        <img src={chevronRight} alt="" className={styles.navButtonIcon} />
      </button>
      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </div>
  );
};

export default TravelSection;
