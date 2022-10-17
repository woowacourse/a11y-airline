import classNames from 'classnames';

import styles from './TravelProduct.module.css';

import { ItemSize, TravelProductData } from '../../types';

type TravelProductType = TravelProductData & {
  itemSize: ItemSize;
};

const TravelProduct = ({
  itemSize,
  departure,
  destination,
  seatType,
  bookingType,
  minimumFare,
  imageUrl,
  href,
}: TravelProductType) => {
  return (
    <a
      className={classNames(styles.box, itemSize ? styles[`box-${itemSize}`] : '')}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img src={imageUrl} alt={`${destination} 대표`} />
      <div className={styles.content}>
        <p className={styles.title}>
          {departure} - {destination}
        </p>
        <p>
          {seatType} {bookingType}
        </p>
        <p className={styles.fare}>
          <span aria-label="대한민국 원">KRW </span>
          {minimumFare.toLocaleString()} <span aria-hidden>~</span>
        </p>
      </div>
    </a>
  );
};

export default TravelProduct;
