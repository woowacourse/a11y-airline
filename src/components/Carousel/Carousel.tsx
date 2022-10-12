import {useRef} from 'react';
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
    image: 'Dubai-background',
    currency: 'KRW',
    price: 2010200,
  },
];

const Carousel = () => {
  const carouselScroll = useRef<HTMLElement>(null);

  const Card = ({itemInfo}: {itemInfo: Item}) => {
    const {from, to, sit, image, currency, price} = itemInfo;

    return (
      <div className={`${styles.card} ${styles[image]}`}>
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
      </div>
    );
  };

  return (
    <div className={styles.carouselBox}>
      <section className={styles.cardBox} ref={carouselScroll}>
        {items.map((item) => (
          <Card key={item.id} itemInfo={item} />
        ))}
      </section>
      <button className={styles.CarouselLeftButton}>
        <CarouselButton direction={'right'} />
      </button>
      <button className={styles.CarouselRightButton}>
        <CarouselButton direction={'left'} />
      </button>
    </div>
  );
};

interface Item {
  id: number;
  from: '서울/인천';
  to: '바르셀로나' | '스위스' | '두바이';
  sit: '일반석 왕복' | '비즈니스 왕복' | '일반석 편도' | '비즈니스 편도';
  image: string;
  currency: 'USD' | 'EUR' | 'GBP' | 'KRW';
  price: number;
}

export default Carousel;
