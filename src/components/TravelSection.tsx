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
  const [announcement, setAnnouncement] = useState('');
  const currentTravel = travelOptions[currentIndex];

  const describeTravel = (index: number) => {
    const travel = travelOptions[index];
    return `${travelOptions.length}개 중 ${index + 1}번째, ${travel.departure}에서 ${travel.destination}, ${travel.type}, ${travel.price.toLocaleString('ko-KR')}원`;
  };

  const moveTravel = (step: number) => {
    const nextIndex = (currentIndex + step + travelOptions.length) % travelOptions.length;
    setCurrentIndex(nextIndex);
    setAnnouncement(describeTravel(nextIndex));
  };

  return (
    <div className={styles.travelSection}>
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={() => moveTravel(-1)}
        aria-label="이전 여행 상품"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} alt="" />
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={() => moveTravel(1)}
        aria-label="다음 여행 상품"
      >
        <img src={chevronRight} className={styles.navButtonIcon} alt="" />
      </button>
      <p className="visually-hidden" role="status">
        {announcement}
      </p>
      <div className={styles.carousel}>
        <a
          className={styles.card}
          href={currentTravel.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="visually-hidden">{`${describeTravel(currentIndex)}, 새 창`}</span>
          <img src={currentTravel.image} className={styles.cardImage} alt="" />
          <div className={styles.cardContent} aria-hidden="true">
            <p className={`${styles.cardTitle} heading-3-text`}>
              {currentTravel.departure} - {currentTravel.destination}
            </p>
            <p className={`${styles.cardType} body-text`}>{currentTravel.type}</p>
            <p className={`${styles.cardPrice} body-text`}>
              KRW {currentTravel.price.toLocaleString('ko-KR')}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TravelSection;
