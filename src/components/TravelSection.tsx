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

const getTravelLabel = (option: TravelOption, index: number) =>
  `${travelOptions.length}개 중 ${index + 1}번째, ${option.departure}에서 ${option.destination}, ${option.type}, ${option.price.toLocaleString()}원`;

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 버튼으로 이동했을 때만 채워서, 처음 읽을 때 링크와 중복으로 읽히지 않게 함
  const [announcement, setAnnouncement] = useState('');

  const moveTo = (index: number) => {
    setCurrentIndex(index);
    setAnnouncement(getTravelLabel(travelOptions[index], index));
  };

  const nextTravel = () => {
    moveTo((currentIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    moveTo((currentIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  return (
    <div className={styles.travelSection}>
      <button className={`${styles.navButton} ${styles.navButtonPrev}`} onClick={prevTravel}>
        <img src={chevronLeft} alt="이전 여행 상품" className={styles.navButtonIcon} />
      </button>
      <div className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <a
            key={index}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${getTravelLabel(option, index)}, 새 창`}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
          >
            <img src={option.image} alt="" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <p className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </p>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        {announcement}
      </p>
      <button className={`${styles.navButton} ${styles.navButtonNext}`} onClick={nextTravel}>
        <img src={chevronRight} alt="다음 여행 상품" className={styles.navButtonIcon} />
      </button>
    </div>
  );
};

export default TravelSection;
