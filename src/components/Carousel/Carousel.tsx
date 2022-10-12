import {useRef, useState} from 'react';

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
  },
  {
    id: 2,
    from: '서울/인천',
    to: '스위스',
    sit: '일반석 왕복',
    image: 'Suisse-background',
    currency: 'KRW',
    price: 950100,
  },
  {
    id: 3,
    from: '서울/인천',
    to: '두바이',
    sit: '비즈니스 편도',
    image: 'Barcelona-background',
    currency: 'KRW',
    price: 2010200,
  },
  {
    id: 4,
    from: '서울/인천',
    to: '도쿄',
    sit: '일반석 편도',
    image: 'Tokyo-background',
    currency: 'KRW',
    price: 90200,
  },
  {
    id: 5,
    from: '서울/인천',
    to: '런던',
    sit: '비즈니스 편도',
    image: 'London-background',
    currency: 'KRW',
    price: 10100,
  },
];

const Carousel = () => {
  const [count, setCount] = useState(0);
  const carouselScroll = useRef<HTMLElement>(null);

  const handleRightClick = () => {
    if (count === 3) return;

    if (carouselScroll.current) {
      setCount((prev) => prev + 1);
      carouselScroll.current.style.transform = `translate(-${(count + 1) * 264}px)`;
    }
  };

  const handleLeftClick = () => {
    if (count === 0) return;

    if (carouselScroll.current) {
      setCount((prev) => prev - 1);
      carouselScroll.current.style.transform = `translate(-${(count - 1) * 264}px)`;
    }
  };

  const Card = ({itemInfo}: {itemInfo: Item}) => {
    const {from, to, sit, image, currency, price} = itemInfo;

    return (
      <div className={`${styles.card} `}>
        <section className={styles.title}>
          <p>
            {from} - {to}
          </p>
        </section>
        <section className={styles.content}>
          <p className={styles.contentSit}>{sit}</p>
          <p className={styles.contentPrice}>
            {currency}
            {price}~
          </p>
        </section>
        <div className={`${styles.card} ${styles[image]}`}></div>
      </div>
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselBox}>
        <section className={styles.cardBox} ref={carouselScroll}>
          {items.map((item) => (
            <Card key={item.id} itemInfo={item} />
          ))}
        </section>
      </div>
      <button className={styles.CarouselLeftButton} onClick={handleRightClick}>
        <CarouselButton direction={'right'} />
      </button>
      <button className={styles.CarouselRightButton} onClick={handleLeftClick}>
        <CarouselButton direction={'left'} />
      </button>
    </div>
  );
};

interface Item {
  id: number;
  from: '서울/인천';
  to: '바르셀로나' | '스위스' | '두바이' | '도쿄' | '런던';
  sit: '일반석 왕복' | '비즈니스 왕복' | '일반석 편도' | '비즈니스 편도';
  image: string;
  currency: 'USD' | 'EUR' | 'GBP' | 'KRW';
  price: number;
}

export default Carousel;
