import useCarousel from './useCarousel';

import styles from './styles.module.scss';
import { useState } from 'react';

const Carousel = ({ children, moveAmount }: any) => {
  const {
    ulRef,
    onClickPrevButton,
    onClickNextButton,
    isFirstPage,
    isLastPage,
  } = useCarousel(moveAmount);

  return (
    <div className={styles.carousel}>
      <ul className={styles.carouselContent} ref={ulRef}>
        {children}
      </ul>
      <div className={styles.buttonContainer}>
        <button
          onClick={onClickPrevButton}
          aria-disabled={isFirstPage}
          style={isFirstPage ? { cursor: 'not-allowed' } : {}}
        />
        <button
          onClick={onClickNextButton}
          aria-disabled={isLastPage}
          style={isLastPage ? { cursor: 'not-allowed' } : {}}
        />
      </div>
    </div>
  );
};

export default Carousel;
