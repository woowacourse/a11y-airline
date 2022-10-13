import React from 'react';
import {
  LocationCode,
  LOCATION_CODES,
  Seat,
  SEATS,
  TripType,
  TRIP_TYPES,
} from '../../constants/flight';
import styles from './ItemCard.module.css';

type ItemCardProps = React.LiHTMLAttributes<HTMLLIElement> & {
  departure: LocationCode;
  destination: LocationCode;
  seat: Seat;
  tripType: TripType;
  price: number;
};

const ItemCard = ({
  departure,
  destination,
  seat,
  tripType,
  price,
  ...props
}: ItemCardProps) => {
  return (
    <li className={styles.layout} {...props}>
      <a
        className={styles.link}
        aria-label={`${LOCATION_CODES[departure]} - ${LOCATION_CODES[destination]} ${SEATS[seat]} ${TRIP_TYPES[tripType]} ${price}원부터`}
        href={`https://www.koreanair.com/booking/best-prices?departureCode=${departure}&destinationCode=${destination}&cabin=${seat}&tripType=${tripType}&duration=7`}
      >
        <img
          src={`https://www.koreanair.com/content/dam/koreanair/ko/airport-img/${destination}-list-pc.jpg`}
          alt=""
          className={styles.image}
          loading="lazy"
          aria-hidden
        />
        <div className={styles.description}>
          <span className={styles.route} aria-hidden>
            {LOCATION_CODES[departure]} - {LOCATION_CODES[destination]}
          </span>
          <span className={styles.seat} aria-hidden>
            {SEATS[seat]} {TRIP_TYPES[tripType]}
          </span>
          <span className={styles['trip-type']} aria-hidden>
            KRW {price} ~
          </span>
        </div>
      </a>
    </li>
  );
};

export default ItemCard;
