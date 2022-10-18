import { useRef, useState } from 'react';

import Card from '@/components/Card';
import { Direction, Place } from '@/types';

import leftButtonSvg from '@/assets/svgs/left-button.svg';
import rightButtonSvg from '@/assets/svgs/right-button.svg';

import styles from './index.module.scss';

interface CardListProps {
  placeList: Place[];
}

const unit = Math.floor(document.body.clientWidth / 240);

function CardList({ placeList }: CardListProps) {
  const [placeCard, setPlaceCard] = useState(0);
  const [prevDirection, setPrevDirection] = useState<Direction | ''>('');

  const cardRefList = useRef<Array<HTMLDivElement | null>>([]);

  const isFirst = placeCard <= 0;
  const isLast = placeCard >= placeList.length - 1;

  const getCardRef =
    (placeNumber: number) => (element: HTMLDivElement | null) => {
      cardRefList.current[placeNumber] = element;

      return cardRefList.current[placeNumber];
    };

  const changeScroll = (placeNumber: number) => {
    cardRefList.current[placeNumber]?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const showPlaceCard = (direction: Direction) => () => {
    if ((isFirst && direction === 'prev') || (isLast && direction === 'next'))
      return;

    setPlaceCard(prevState => {
      if (direction === 'next' && prevState <= 0) {
        changeScroll(unit);

        return unit;
      }
      if (direction === 'prev' && prevState >= placeList.length - 1) {
        changeScroll(placeList.length - unit - 1);

        return placeList.length - unit - 1;
      }

      const jumpValue =
        prevDirection !== direction && prevDirection !== '' ? unit : 1;

      const target =
        prevState + (direction === 'next' ? jumpValue : -jumpValue);
      changeScroll(target);

      return target;
    });

    setPrevDirection(direction);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.unlist}>
        {placeList.map((place, idx) => (
          <li
            className={styles.list}
            key={idx}
            aria-label={`${place.title} ${place.seat} ${place.price} 대한민국 원`}
          >
            <Card place={place} ref={getCardRef(idx)} />
          </li>
        ))}
      </ul>
      <button
        className={`${styles.button} ${styles.left}`}
        onClick={showPlaceCard('prev')}
        aria-label="이전"
        aria-disabled={isFirst}
      >
        <img src={leftButtonSvg} alt="이전" aria-hidden={true} />
      </button>
      <button
        className={`${styles.button} ${styles.right}`}
        onClick={showPlaceCard('next')}
        aria-label="다음"
        aria-disabled={isLast}
      >
        <img src={rightButtonSvg} alt="다음" aria-hidden={true} />
      </button>
    </div>
  );
}

export default CardList;
