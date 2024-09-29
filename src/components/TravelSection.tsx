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

  const getParsedCityName = (fullString: string) => {
    return `${fullString.includes('/') ? fullString.replace('/', '슬래시') : fullString}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLLIElement>, link: string) => {
    if (e.key === 'Enter') handleCardClick(link);
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.travelSection} role="region" aria-label="여행 옵션 캐러셀">
      <button className={`${styles.navButton} ${styles.navButtonPrev}`} onClick={prevTravel}>
        <img src={chevronLeft} className={styles.navButtonIcon} aria-label="이전 여행 옵션 보기" />
      </button>
      <ol
        className={styles.carousel}
        aria-live="polite"
        aria-label={`총 ${travelOptions.length}개의 여행 옵션 중 ${currentIndex + 1}번째 옵션`}
      >
        {travelOptions.map((option, index) => (
          <li
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            tabIndex={0}
            onClick={() => handleCardClick(option.link)}
            onKeyDown={(e) => handleKeyPress(e, option.link)}
          >
            <img src={option.image} className={styles.cardImage} alt="" />
            <div className={styles.cardContent}>
              <p
                className={`${styles.cardTitle} heading-3-text`}
                aria-label={`출발 ${getParsedCityName(option.departure)} 도착 ${getParsedCityName(
                  option.destination
                )}`}
              >
                {option.departure} - {option.destination}
              </p>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p
                className={`${styles.cardPrice} body-text`}
                aria-label={`가격: ${option.price.toLocaleString()}원`}
              >
                KRW {option.price.toLocaleString()}
              </p>
              <p className="visually-hidden">클릭하면 예약 페이지로 넘어갑니다.</p>
            </div>
          </li>
        ))}
      </ol>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 옵션 보기"
      >
        <img src={chevronRight} className={styles.navButtonIcon} />
      </button>
    </div>
  );
};

export default TravelSection;
