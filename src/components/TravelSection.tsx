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

const getItemDetailMessage = (index: number) => {
  const targetItem = travelOptions[index];
  const { departure, destination, type, price } = targetItem;

  const itemDetailMessageForATUser = `${departure}출발, ${destination}도착, ${type} 가격${price.toLocaleString(
    'ko-KR'
  )}원, 선택하면 예약 페이지로 이동합니다.`;
  return itemDetailMessageForATUser;
};

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

  const itemSequenceMessageForATUser = `${travelOptions.length}개의 여행 상품 중 ${
    currentIndex + 1
  }번 째 상품`;

  return (
    <div className={styles.travelSection}>
      {/* ScreenReaderOnly 컴포넌트 만들어서 활용하기, toss참고, 리뷰 반영하면서 구현 예정(@해리) */}
      <div className={styles.carousel} aria-live="polite">
        <div className={styles.visuallyHidden}>{itemSequenceMessageForATUser}</div>
        {travelOptions.map((option, index) => (
          <button
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            // onClick과 같은 사용자와 상호작용을 하기 위한 태그는 div보다는 button이 적합.
            onClick={() => handleCardClick(option.link)}
            aria-label={getItemDetailMessage(index)}
          >
            <img src={option.image} className={styles.cardImage} />
            {/* 스크린리더가 아래 정보는 읽지 않을 수 있도록 aria-hidden 속성 사용. */}
            <div className={styles.cardContent} aria-hidden>
              <h3 className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </h3>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
            </div>
          </button>
        ))}
      </div>
      {/* 스크린 리더는 문서의 흐름대로 aria-label을 읽기 때문에 여행 상세 정보를 먼저 읽을 수 있도록 HTML 마크업 순서 수정 */}
      <button
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={prevTravel}
        aria-label="이전 여행 상품"
      >
        <img src={chevronLeft} className={styles.navButtonIcon} />
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 여행 상품"
      >
        <img src={chevronRight} className={styles.navButtonIcon} />
      </button>
    </div>
  );
};

export default TravelSection;
