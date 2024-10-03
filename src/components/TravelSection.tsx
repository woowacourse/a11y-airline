import { useRef, useState } from 'react';

import travelItem01 from '../assets/travel-item-01.png';
import travelItem02 from '../assets/travel-item-02.png';
import travelItem03 from '../assets/travel-item-03.png';
import chevronLeft from '../assets/chevron-left.svg';
import chevronRight from '../assets/chevron-right.svg';

import styles from './TravelSection.module.css';
import { removeAriaLive, setAriaLive } from '../utils/ariaLive';

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

  const travelInfoRef = useRef<HTMLDivElement>(null);

  const nextTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleFocus = () => {
    if (travelInfoRef.current) {
      travelInfoRef.current.removeAttribute('aria-hidden');
      setAriaLive(travelInfoRef, 'assertive');
    }
  };

  const handleBlur = () => {
    if (travelInfoRef.current) {
      removeAriaLive(travelInfoRef);
      travelInfoRef.current.setAttribute('aria-hidden', 'true');
    }
  };

  const generateTravelInfoLabel = (option: TravelOption) => {
    return `총 ${travelOptions.length}개의 여행 상품 중 ${currentIndex + 1}번째 상품입니다. 
            ${option.departure} 출발, ${option.destination} 도착.
            ${option.type}, 가격 ${option.price.toLocaleString()}원.`;
  };

  return (
    <div className={styles.travelSection} onFocus={handleFocus} onBlur={handleBlur}>
      <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
      <div className="visually-hidden" ref={travelInfoRef} tabIndex={-1}>
        {generateTravelInfoLabel(travelOptions[currentIndex])}
      </div>
      <ul className={styles.carousel} role="region">
        {travelOptions.map((option, index) => (
          <li
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onClick={() => handleCardClick(option.link)}
          >
            <img
              src={option.image}
              className={styles.cardImage}
              aria-label={`${index + 1}번째 여행 상품 이미지. 선택하면 예약 페이지로 이동합니다.`}
            />
            <div className={styles.cardContent} aria-hidden={true}>
              <h3 className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </h3>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품 보기"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} alt="" />
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품 보기"
      >
        <img src={chevronRight} className={styles.navButtonIcon} alt="" />
      </button>
    </div>
  );
};

export default TravelSection;
