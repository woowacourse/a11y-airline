import useCarousel from './useCarousel';

import styles from './styles.module.scss';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  moveAmount: number;
}

const Carousel = ({ children, moveAmount }: Props) => {
  const {
    ulRef,
    onClickPrevButton,
    onClickNextButton,
    isFirstPage,
    isLastPage,
    onScroll,
  } = useCarousel(moveAmount);

  return (
    <div className={styles.carousel}>
      <ul className={styles.carouselContent} ref={ulRef} onScroll={onScroll}>
        {children}
      </ul>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={onClickPrevButton}
          aria-disabled={isFirstPage}
          style={isFirstPage ? { cursor: 'not-allowed' } : {}}
        >
          <span className="sr-only">다음</span>
        </button>
        <button
          type="button"
          onClick={onClickNextButton}
          aria-disabled={isLastPage}
          style={isLastPage ? { cursor: 'not-allowed' } : {}}
        >
          <span className="sr-only">다음</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
