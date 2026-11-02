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
  const [hasNavigated, setHasNavigated] = useState(false);

  const describeTravel = (index: number) => {
    const option = travelOptions[index];
    return `${travelOptions.length}개 중 ${index + 1}번째, ${option.departure}에서 ${option.destination}, ${option.type}, ${option.price.toLocaleString('ko-KR')}원`;
  };

  const moveTravel = (direction: number) => {
    setCurrentIndex((index) => (index + direction + travelOptions.length) % travelOptions.length);
    setHasNavigated(true);
  };

  return (
    <div className={styles.travelSection}>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={() => moveTravel(-1)}
      >
        <img src={chevronLeft} alt="" className={styles.navButtonIcon} />
        <span className="visually-hidden">이전 여행 상품</span>
      </button>
      <div className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <a
            key={index}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
          >
            <img src={option.image} alt="" className={styles.cardImage} />
            <div className={styles.cardContent} aria-hidden="true">
              <p className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </p>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
            </div>
            <span className="visually-hidden">{describeTravel(index)}, 새 창</span>
          </a>
        ))}
      </div>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={() => moveTravel(1)}
      >
        <img src={chevronRight} alt="" className={styles.navButtonIcon} />
        <span className="visually-hidden">다음 여행 상품</span>
      </button>
      <p className="visually-hidden" role="status" aria-atomic="true">
        {hasNavigated ? describeTravel(currentIndex) : ''}
      </p>
    </div>
  );
};

export default TravelSection;
