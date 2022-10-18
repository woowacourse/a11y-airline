import { Place } from '@/types';
import { forwardRef, LegacyRef } from 'react';

import styles from './index.module.scss';

interface CardProps {
  place: Place;
}

function Card({ place }: CardProps, ref: LegacyRef<HTMLDivElement>) {
  const [origin, destination] = place.title.split('-');

  return (
    <a href={place.link} target="_blank" className={styles.container}>
      <div ref={ref}>
        <div>
          <img
            src={place.image}
            alt={`${place.title} image`}
            className={styles.image}
            aria-hidden={true}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>
            {origin}
            <span aria-hidden={true}>-</span>
            {destination}
          </p>
          <p>{place.seat}</p>
          <p aria-label={`${place.price.toLocaleString('ko-KR')} 대한민국 원`}>
            KRW {place.price.toLocaleString('ko-KR')}
            <span aria-hidden={true}> ~</span>
          </p>
        </div>
      </div>
    </a>
  );
}

export default forwardRef(Card);
