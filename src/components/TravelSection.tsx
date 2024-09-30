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
    <div className={styles.travelSection}>
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} />
      </button>
      <ol className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <li
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onClick={() => handleCardClick(option.link)}
          >
            <span className="visually-hidden" role="text">
              {/* visually-hidden 클래스를 사용한 이유는 시각 사용자에게는 이 설명을 숨기기 위함임 */}
              {/* role='text'를 사용하면 세계 여행 상품 중 / n / 번째 상품 처럼 분리되어 읽히지 않고 한 번에 읽히게 됨 */}
              세계 여행 상품 중 {index + 1}번째 상품
            </span>
            <img src={option.image} className={styles.cardImage} aria-hidden="true" />
            <button className={styles.cardContent}>
              <p className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </p>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
              <span className="visually-hidden">클릭하면 상세 페이지로 이동합니다.</span>
            </button>
          </li>
        ))}
      </ol>
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
