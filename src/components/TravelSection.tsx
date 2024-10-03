import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

import chevronLeft from '../assets/chevron-left.svg';
import chevronRight from '../assets/chevron-right.svg';
import styles from './TravelSection.module.css';
import travelItem01 from '../assets/travel-item-01.png';
import travelItem02 from '../assets/travel-item-02.png';
import travelItem03 from '../assets/travel-item-03.png';

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

  // 접근성을 위한 ref
  const ariaRef1 = useRef<HTMLLIElement>(null);
  const ariaRef2 = useRef<HTMLLIElement>(null);
  const ariaRef3 = useRef<HTMLLIElement>(null);
  const ariaRefs = useMemo(() => [ariaRef1, ariaRef2, ariaRef3], []);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const nextTravel = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
    e.currentTarget.tabIndex = -1;
    e.currentTarget.blur();
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  // 접근성을 위한 useEffect
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    ariaRefs[currentIndex].current?.focus();
  }, [currentIndex, ariaRefs]);

  return (
    <div className={styles.travelSection}>
      <button className={`${styles.navButton} ${styles.navButtonPrev}`} onClick={prevTravel}>
        <img
          src={chevronLeft}
          className={styles.navButtonIcon}
          aria-label="이전 옵션"
          alt="이전 옵션"
        />
      </button>
      <ul className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <li
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onMouseUp={() => handleCardClick(option.link)}
            aria-label={
              `여행 포커스 됨 옵션 ${travelOptions.length}개 중 ${index + 1}번째 옵션 ${
                option.departure
              }에서 ${option.destination} ${option.type} ${option.price}원` +
              ' 클릭 시 해당 페이지로 이동합니다'
            }
            ref={ariaRefs[index]}
            // 접근성을 위한 tabIndex
            tabIndex={0}
          >
            <img
              src={option.image}
              alt={option.destination + ' 소개 이미지'}
              className={styles.cardImage}
              aria-hidden
            />
            <div className={styles.cardContent} aria-hidden>
              <h3 className={`${styles.cardTitle} heading-3-text`} aria-hidden>
                {option.departure} - {option.destination}
              </h3>
              <p className={`${styles.cardType} body-text`} aria-hidden>
                {option.type}
              </p>
              <p className={`${styles.cardPrice} body-text`} aria-hidden>
                KRW {option.price.toLocaleString()}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={nextTravel}
        aria-label="다음 옵션"
      >
        <img src={chevronRight} alt="다음 옵션" className={styles.navButtonIcon} />
      </button>
    </div>
  );
};

export default TravelSection;
