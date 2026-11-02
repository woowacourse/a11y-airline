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

// 스크린 리더가 한 번에 읽을 카드 설명 문장
const describeTravel = (option: TravelOption, index: number) =>
  `${TOTAL}개 중 ${index + 1}번째 여행지, ${option.departure} 출발 ${option.destination} 도착, ${option.type}, ${option.price.toLocaleString()}원`;

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [announcement, setAnnouncement] = useState('');

  const moveTo = (nextIndex: number) => {
    setCurrentIndex(nextIndex);
    setAnnouncement(describeTravel(travelOptions[nextIndex], nextIndex));
  };

  const nextTravel = () => {
    moveTo((currentIndex + 1) % TOTAL);
  };

  const prevTravel = () => {
    moveTo((currentIndex - 1 + TOTAL) % TOTAL);
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
      <div className={styles.carousel}>
        {travelOptions.map((option, index) => (
          // 비활성 카드는 display: none 이라 접근성 트리에서도 빠집니다
          <div
            key={option.link}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
          >
            {/* 링크 하나에 완성된 문장을 이름으로 주고, 화면용 내용은 숨겨 한 번에 읽히게 합니다 */}
            <a
              className={styles.cardLink}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${describeTravel(option, index)}, 새 창에서 열림`}
            >
              <img src={option.image} alt="" className={styles.cardImage} />
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
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행지 보기"
      >
        <img src={chevronRight} alt="" className={styles.navButtonIcon} />
      </button>
      {/* 이전/다음으로 이동했을 때만 새 카드 정보를 읽어줍니다 */}
      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </div>
  );
};

export default TravelSection;
