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
  const option = travelOptions[index];
  return `${travelOptions.length}개 중 ${index + 1}번째, ${option.departure}에서 ${option.destination}, ${option.type}, ${option.price.toLocaleString('ko-KR')}원`;
};

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [announcement, setAnnouncement] = useState('');

  const moveTravel = (step: number) => {
    const nextIndex = (currentIndex + step + travelOptions.length) % travelOptions.length;
    setCurrentIndex(nextIndex);
    setAnnouncement(describeTravel(nextIndex));
  };

  return (
    <section aria-labelledby="travel-section-title">
      <h2 id="travel-section-title" className={`${styles.title} heading-2-text`}>
        지금 떠나기 좋은 여행
      </h2>
      <div className={styles.travelSection}>
        <div className={styles.carousel}>
          {travelOptions.map((option, index) => (
            <div
              key={option.link}
              className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            >
              <a
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
                aria-label={describeTravel(index)}
              >
                <img src={option.image} className={styles.cardImage} alt="" />
                <div className={styles.cardContent} aria-hidden="true">
                  <p className={`${styles.cardTitle} heading-3-text`}>
                    {option.departure} - {option.destination}
                  </p>
                  <p className={`${styles.cardType} body-text`}>{option.type}</p>
                  <p className={`${styles.cardPrice} body-text`}>
                    KRW {option.price.toLocaleString()}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
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
        <output className="visually-hidden">{announcement}</output>
      </div>
    </section>
  );
};

export default TravelSection;
