import {useEffect, useRef, useState} from 'react';

import {items} from '../../data';

import CarouselButton from '../@common/style/CarouselButton/CarouselButton';
import Card from '../Card/Card';

import styles from './Carousel.module.css';

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

export default Carousel;
