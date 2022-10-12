import useCarousel from './useCarousel';

import styles from './styles.module.scss';

const Carousel = ({ children, moveAmount }: any) => {
  const { ulRef, onClickPrevButton, onClickNextButton } =
    useCarousel(moveAmount);

  return (
    <div className={styles.carousel}>
      <ul className={styles.carouselContent} ref={ulRef}>
        {children}
      </ul>
      <div className={styles.buttonContainer}>
        <button onClick={onClickPrevButton} />
        <button onClick={onClickNextButton} />
      </div>
    </div>
  );
};

export default Carousel;
