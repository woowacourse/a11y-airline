import classNames from 'classnames';

import TravelProduct, { TravelProductData } from '../TravelProduct/TravelProduct';

import styles from './Carousel.module.css';
import useCarousel from './useCarousel';

export type ItemSize = 'small' | 'middle' | 'large';
type CarouselType<T> = {
  items: T[];
  itemSize: ItemSize;
};

// const ITEM_SIZE = {
//   small: 210,
//   middle: 238,
//   large: 267,
// };
// const GAP_SIZE = 24;

const Carousel = <T extends TravelProductData>({ items, itemSize }: CarouselType<T>) => {
  const {
    isStartPoint,
    isEndPoint,
    carouselListRef,
    handleClickPrevSlideButton,
    handleClickNextSlideButton,
  } = useCarousel(itemSize);

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
        aria-label="이전"
        onClick={handleClickPrevSlideButton}
      >
        {'<'}
      </button>
      <button
        className={classNames(styles['slide-button'], styles['right-button'])}
        disabled={isEndPoint}
        aria-label="다음"
        onClick={handleClickNextSlideButton}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
