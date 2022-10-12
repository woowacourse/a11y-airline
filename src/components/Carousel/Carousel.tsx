import {useEffect, useRef, useState} from 'react';

import CarouselButton from '../@common/style/CarouselButton/CarouselButton';

import styles from './Carousel.module.css';

const items: Item[] = [
  {
    id: 1,
    from: '서울/인천',
    to: '바르셀로나',
    sit: '일반석 왕복',
    image: 'Barcelona-background',
    currency: 'KRW',
    price: 1121600,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=BCN&duration=5&cabin=Y',
  },
  {
    id: 2,
    from: '서울/인천',
    to: '취리히',
    sit: '일반석 왕복',
    image: 'Suisse-background',
    currency: 'KRW',
    price: 950100,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=ZRH&duration=8&cabin=Y',
  },
  {
    id: 3,
    from: '서울/인천',
    to: '델리',
    sit: '비즈니스 편도',
    image: 'India-background',
    currency: 'KRW',
    price: 2010200,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=DEL&duration=11&cabin=Y',
  },
  {
    id: 4,
    from: '서울/인천',
    to: '도쿄',
    sit: '일반석 편도',
    image: 'Tokyo-background',
    currency: 'KRW',
    price: 90200,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=HND&duration=11&cabin=Y',
  },
  {
    id: 5,
    from: '서울/인천',
    to: '런던',
    sit: '비즈니스 편도',
    image: 'London-background',
    currency: 'KRW',
    price: 10100,
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=sel&destinationCode=LHR&duration=1&cabin=Y&yearMonth=202211&openC=Y',
  },
];

const enableButton = (button: HTMLButtonElement, label: string) => {
  button.setAttribute('aria-label', label);
};

const disableButton = (button: HTMLButtonElement, label: string) => {
  button.setAttribute('aria-label', `${label} (사용 중지)`);
};

const Carousel = () => {
  const [count, setCount] = useState(0);
  const carouselScroll = useRef<HTMLUListElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);

  const handleLeftClick = () => {
    console.log('count', count);
    if (count === items.length - 2) {
      return;
    }

    if (carouselScroll.current) {
      setCount((prev) => prev + 1);
    }
  };

  const handleRightClick = () => {
    console.log('count', count);
    if (count === 0) {
      return;
    }

    if (carouselScroll.current) {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (count === items.length - 2) {
      disableButton(leftButtonRef.current!, '왼쪽 버튼');
    } else if (count === 0) {
      disableButton(rightButtonRef.current!, '오른쪽 버튼');
    } else {
      enableButton(leftButtonRef.current!, '왼쪽 버튼');
      enableButton(rightButtonRef.current!, '오른쪽 버튼');
    }

    if (carouselScroll.current) {
      carouselScroll.current.style.transform = `translate(-${count * 264}px)`;
    }
  }, [count]);

  const Card = ({itemInfo}: {itemInfo: Item}) => {
    const {from, to, sit, image, currency, price, link} = itemInfo;
    const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

    return (
      <li className={`${styles.card} `}>
        <a href={link}>
          <section className={styles.title}>
            <p>
              {from} - {to}
            </p>
          </section>
          <section className={styles.content}>
            <p className={styles.contentSit}>{sit}</p>
            <p className={styles.contentPrice}>
              <span aria-hidden='true'>{currency}</span>
              {formattedPrice}
              <span className={styles.textHidden}>대한민국 원</span>
              <span aria-hidden='true'>~</span>
            </p>
          </section>
          <div className={`${styles.card} ${styles[image]}`}></div>
        </a>
      </li>
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselBox}>
        <ul className={styles.cardBox} ref={carouselScroll}>
          {items.map((item) => (
            <Card key={item.id} itemInfo={item} />
          ))}
        </ul>
      </div>
      <button aria-label='다음으로 가기' className={styles.CarouselLeftButton} ref={leftButtonRef} onClick={handleLeftClick}>
        <CarouselButton direction={'right'} />
      </button>
      <button aria-label='이전으로 가기' className={styles.CarouselRightButton} ref={rightButtonRef} onClick={handleRightClick}>
        <CarouselButton direction={'left'} />
      </button>
    </div>
  );
};

interface Item {
  id: number;
  from: '서울/인천';
  to: '바르셀로나' | '취리히' | '델리' | '도쿄' | '런던';
  sit: '일반석 왕복' | '비즈니스 왕복' | '일반석 편도' | '비즈니스 편도';
  image: string;
  currency: 'USD' | 'EUR' | 'GBP' | 'KRW';
  price: number;
  link: string;
}

export default Carousel;
