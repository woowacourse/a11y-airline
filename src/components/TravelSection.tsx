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

const TOTAL = travelOptions.length;

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TOTAL);
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TOTAL) % TOTAL);
  };

  return (
    <div
      className={styles.travelSection}
      role="region"
      aria-roledescription="carousel"
      aria-label={`추천 여행지 ${TOTAL}개`}
    >
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행지 보기"
      >
        <img src={chevronLeft} alt="" className={styles.navButtonIcon} />
      </button>
      {/* 이전/다음으로 이동하면 새로 보이는 카드 정보를 스크린 리더가 읽어줍니다 */}
      <div className={styles.carousel} aria-live="polite">
        {travelOptions.map((option, index) => (
          // 비활성 카드는 display: none 이라 접근성 트리에서도 빠집니다
          <div
            key={option.link}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
          >
            <a
              className={styles.cardLink}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={option.image} alt="" className={styles.cardImage} />
              <div className={styles.cardContent}>
                <span className="visually-hidden">{`${TOTAL}개 중 ${index + 1}번째 여행지, `}</span>
                <h3 className={`${styles.cardTitle} heading-3-text`}>
                  <span aria-hidden="true">
                    {option.departure} - {option.destination}
                  </span>
                  <span className="visually-hidden">
                    {`${option.departure} 출발 ${option.destination} 도착, `}
                  </span>
                </h3>
                <p className={`${styles.cardType} body-text`}>
                  {option.type}
                  <span className="visually-hidden">, </span>
                </p>
                <p className={`${styles.cardPrice} body-text`}>
                  <span aria-hidden="true">KRW {option.price.toLocaleString()}</span>
                  <span className="visually-hidden">{`${option.price.toLocaleString()}원`}</span>
                </p>
                <span className="visually-hidden">, 새 창에서 열림</span>
              </div>
            </a>
          </div>
        ))}
      </div>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행지 보기"
      >
        <img src={chevronRight} alt="" className={styles.navButtonIcon} />
      </button>
    </div>
  );
};

export default TravelSection;
