import { useId, useState } from 'react';

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
  const travelSectionId = useId();

  const makeElementId = (id: string) => `${travelSectionId}__${id}`;

  const ELEMENT_ID = {
    carouselHeading: makeElementId('carousel-heading'),
    carouselDescription: makeElementId('carousel-description')
  };

  const nextTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const getOptionDescription = (option: TravelOption, index: number) => {
    const { departure, destination, type, price } = option;

    return `${travelOptions.length}개 추천 상품 중 ${
      index + 1
    }번째 상품: ${departure}에서 출발해 ${destination}에 도착하는 ${price}원 ${type}좌석`;
  };

  return (
    <section
      className={styles.travelSection}
      aria-labelledby={ELEMENT_ID.carouselHeading}
      aria-describedby={ELEMENT_ID.carouselDescription}
    >
      <h2 id={ELEMENT_ID.carouselHeading} className={`${styles.travelTitle} heading-2-text`}>
        지금 떠나기 좋은 여행
      </h2>
      <div className={styles.carouselContainer}>
        <button
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={prevTravel}
          type="button"
        >
          <span className="screen-only">왼쪽 이동</span>
          <img src={chevronLeft} className={styles.navButtonIcon} alt="" />
        </button>
        <p id={ELEMENT_ID.carouselDescription} aria-live="polite" className="screen-only">
          {getOptionDescription(travelOptions[currentIndex], currentIndex)}
        </p>
        <ol className={styles.carousel}>
          {travelOptions.map((option, index) => (
            <li
              key={index}
              className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
              onClick={() => handleCardClick(option.link)}
            >
              <img src={option.image} className={styles.cardImage} alt="" />
              <div className={styles.cardContent}>
                <h3 className={`${styles.cardTitle} heading-3-text`}>
                  {option.departure} - {option.destination}
                </h3>
                <p className={`${styles.cardType} body-text`}>{option.type}</p>
                <p className={`${styles.cardPrice} body-text`}>
                  KRW {option.price.toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <button
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={nextTravel}
          type="button"
        >
          <span className="screen-only">오른쪽 이동</span>
          <img src={chevronRight} className={styles.navButtonIcon} alt="" />
        </button>
      </div>
    </section>
  );
};

export default TravelSection;
