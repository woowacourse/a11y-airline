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

  const changeTravel = (direction: -1 | 1) => {
    const nextIndex = (currentIndex + direction + travelOptions.length) % travelOptions.length;
    const nextTravel = travelOptions[nextIndex];

    setCurrentIndex(nextIndex);
    setAnnouncement(
      `현재 표시된 여행: ${travelOptions.length}개 중 ${nextIndex + 1}번째, 출발 ${nextTravel.departure}, 도착 ${nextTravel.destination}`
    );
  };

  return (
    <section className={styles.travelSection}>
      <h2 className={`${styles.sectionTitle} heading-2-text`}>
        지금 떠나기 좋은 여행
        <span className="visually-hidden">. 총 {travelOptions.length}개</span>
      </h2>
      <div className="visually-hidden" role="status">
        {announcement}
      </div>
      <button
        aria-label="이전 여행 보기"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={() => changeTravel(-1)}
        type="button"
      >
        <img alt="" src={chevronLeft} className={styles.navButtonIcon} />
      </button>
      <div className={styles.carousel}>
        <div className={styles.card}>
          <a href={currentTravel.link} target="_blank" rel="noopener noreferrer">
            <img alt="" src={currentTravel.image} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={`${styles.cardTitle} heading-3-text`}>
                <span className="visually-hidden">
                  {travelOptions.length}개 중 {currentIndex + 1}번째, 출발{' '}
                </span>
                {currentTravel.departure}
                <span aria-hidden="true"> - </span>
                <span className="visually-hidden">도착 </span>
                {currentTravel.destination}
              </h3>
              <p className={`${styles.cardType} body-text`}>{currentTravel.type}</p>
              <p className={`${styles.cardPrice} body-text`}>
                KRW {currentTravel.price.toLocaleString()}
              </p>
            </div>
            <span className="visually-hidden">관련 여행 상품 보기, 새 탭에서 열림</span>
          </a>
        </div>
      </div>
      <button
        aria-label="다음 여행 보기"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={() => changeTravel(1)}
        type="button"
      >
        <img alt="" src={chevronRight} className={styles.navButtonIcon} />
      </button>
    </section>
  );
};

export default TravelSection;
