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
          aria-label="이전"
          aria-disabled={isFirstPage}
          style={isFirstPage ? { cursor: 'not-allowed' } : {}}
        />
        <button
          type="button"
          onClick={onClickNextButton}
          aria-label="다음"
          aria-disabled={isLastPage}
          style={isLastPage ? { cursor: 'not-allowed' } : {}}
        />
      </div>
    </div>
  );
};

export default Carousel;
