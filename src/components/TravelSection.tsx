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

const describeTravel = (index: number) => {
  const { departure, destination, type, price } = travelOptions[index];
  return `${travelOptions.length}개 중 ${index + 1}번째, ${departure}에서 ${destination}, ${type}, ${price.toLocaleString('ko-KR')}원`;
};

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [announcement, setAnnouncement] = useState('');

  const moveTo = (index: number) => {
    setCurrentIndex(index);
    setAnnouncement(describeTravel(index));
  };

  const nextTravel = () => {
    moveTo((currentIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    moveTo((currentIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  const currentOption = travelOptions[currentIndex];

  return (
    <div className={styles.travelSection}>
      <button className={`${styles.navButton} ${styles.navButtonPrev}`} onClick={prevTravel}>
        <img src={chevronLeft} alt="이전 여행 상품" className={styles.navButtonIcon} />
      </button>
      <div className={styles.carousel}>
        <a
          href={currentOption.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <img src={currentOption.image} alt="" className={styles.cardImage} />
          <span className="visually-hidden">{describeTravel(currentIndex)}</span>
          <div className={styles.cardContent} aria-hidden="true">
            <p className={`${styles.cardTitle} heading-3-text`}>
              {currentOption.departure} - {currentOption.destination}
            </p>
            <p className={`${styles.cardType} body-text`}>{currentOption.type}</p>
            <p className={`${styles.cardPrice} body-text`}>
              KRW {currentOption.price.toLocaleString()}
            </p>
          </div>
        </a>
      </div>
      <button className={`${styles.navButton} ${styles.navButtonNext}`} onClick={nextTravel}>
        <img src={chevronRight} alt="다음 여행 상품" className={styles.navButtonIcon} />
      </button>
      <p className="visually-hidden" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
};

export default TravelSection;
