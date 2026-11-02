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
  const [hasMoved, setHasMoved] = useState(false);

  const nextTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
    setHasMoved(true);
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
    setHasMoved(true);
  };

  const currentOption = travelOptions[currentIndex];
  const currentAnnouncement = `${travelOptions.length}개 중 ${currentIndex + 1}번째, ${currentOption.departure}에서 ${currentOption.destination}, ${currentOption.type}, ${currentOption.price.toLocaleString()}원`;

  return (
    <div className={styles.travelSection}>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
      >
        <img src={chevronLeft} alt="" className={styles.navButtonIcon} />
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
            <span className={styles.cardContent}>
              <span className="visually-hidden">
                {travelOptions.length}개 중 {index + 1}번째,
              </span>
              <span className={`${styles.cardTitle} heading-3-text`}>
                {option.departure}
                <span aria-hidden="true"> - </span>
                <span className="visually-hidden">에서 </span>
                {option.destination}
                <span className="visually-hidden">,</span>
              </span>
              <span className={`${styles.cardType} body-text`}>
                {option.type}
                <span className="visually-hidden">,</span>
              </span>
              <span className={`${styles.cardPrice} body-text`}>
                <span aria-hidden="true">KRW {option.price.toLocaleString()}</span>
                <span className="visually-hidden">{option.price.toLocaleString()}원</span>
              </span>
            </span>
          </a>
        ))}
      </div>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품"
      >
        <img src={chevronRight} alt="" className={styles.navButtonIcon} />
      </button>
      {/* 버튼을 누른 뒤에만 안내해, 처음 페이지를 읽을 때 같은 내용이 두 번 읽히지 않게 한다 */}
      <p className="visually-hidden" aria-live="polite">
        {hasMoved ? currentAnnouncement : ''}
      </p>
    </div>
  );
};

export default TravelSection;
