import styles from './CarouselButton.module.css';

const CarouselButton = ({direction}: {direction: 'left' | 'right'}) => {
  return (
    <div className={styles.iconBox}>
      <div className={styles[`${direction}ArrowIcon`]}></div>
      <div className={styles[`quarterTop${direction}`]}></div>
      <div className={styles[`quarterBottom${direction}`]}></div>
    </div>
  );
};

export default CarouselButton;
