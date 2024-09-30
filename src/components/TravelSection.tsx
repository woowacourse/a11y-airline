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

const TRAVEL_OPTION_COUNT = travelOptions.length;

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

  const createMessage = (index: number) => {
    return `
${travelOptions[index].departure} 출발, ${travelOptions[index].destination} 도착, ${
      travelOptions[index].type
    }, 가격: ${travelOptions[index].price.toLocaleString()}원
`;
  };

  return (
    <div className={styles.travelSection}>
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        type="button"
        aria-label="이전 여행상품"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} alt="이전 버튼 이미지" />
      </button>

      <div
        role="status"
        aria-live="polite"
        className="visually-hidden"
        tabIndex={-1}
        aria-description=""
      >
        {TRAVEL_OPTION_COUNT}개의 여행 상품중 {currentIndex + 1}번째 상품,
        {createMessage(currentIndex)}
      </div>

      {/*캐루셀 카드 리스트*/}
      <div className={styles.carousel} aria-live="polite">
        {travelOptions.map((option, index) => (
          <div
            key={index}
            role="button"
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onClick={() => handleCardClick(option.link)}
            aria-label={`${createMessage(index)}, 선택하면 예약 페이지로 이동합니다.`}
            tabIndex={0}
            aria-live="assertive"
            id="travel-info"
          >
            <img src={option.image} className={styles.cardImage} alt={''} />
            <div className={styles.cardContent} aria-hidden="true">
              <h3 className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </h3>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        type="button"
        aria-label="다음 여행상품"
        aria-describedby="travel-info"
      >
        <img src={chevronRight} className={styles.navButtonIcon} alt="" />
      </button>
    </div>
  );
};

export default TravelSection;
