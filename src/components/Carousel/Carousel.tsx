import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import TravelProduct, { TravelProductData } from '../TravelProduct/TravelProduct';

import styles from './Carousel.module.css';

export type ItemSize = 'small' | 'middle' | 'large';
type CarouselType<T> = {
  items: T[];
  itemSize: ItemSize;
};

const ITEM_SIZE = {
  small: 210,
  middle: 238,
  large: 267,
};
const GAP_SIZE = 24;

const Carousel = <T extends TravelProductData>({ items, itemSize }: CarouselType<T>) => {
  const carouselListRef = useRef<HTMLUListElement | null>(null);
  const [slideCount, setSlideCount] = useState(0);

  const isStartPoint = slideCount <= 0;
  const isEndPoint =
    carouselListRef.current === null
      ? false
      : (ITEM_SIZE[itemSize] + GAP_SIZE) * slideCount + carouselListRef.current.offsetWidth >
        carouselListRef.current.scrollWidth;

  const handleClickPrevSlideButton = () => {
    if (isStartPoint) return;

    setSlideCount((prev) => prev - 1);
  };

  const handleClickNextSlideButton = () => {
    if (isEndPoint) return;

    setSlideCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (!carouselListRef.current) return;

    carouselListRef.current.scrollTo({
      left: (ITEM_SIZE[itemSize] + GAP_SIZE) * slideCount,
      behavior: 'smooth',
    });
  }, [slideCount]);

  return (
    <div className={styles.box}>
      <ul className={styles['carousel-list']} ref={carouselListRef}>
        {items.map((item) => (
          <li key={item.id}>
            <TravelProduct itemSize={itemSize} {...item} />
          </li>
        ))}
      </ul>
      <button
        className={classNames(styles['slide-button'], styles['left-button'])}
        disabled={isStartPoint}
        aria-label="이전 버튼"
        onClick={handleClickPrevSlideButton}
      >
        {'<'}
      </button>
      <button
        className={classNames(styles['slide-button'], styles['right-button'])}
        disabled={isEndPoint}
        aria-label="다음 버튼"
        onClick={handleClickNextSlideButton}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
