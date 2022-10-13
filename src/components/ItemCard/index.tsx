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
  id: number;
  departure: LocationCode;
  destination: LocationCode;
  seat: Seat;
  tripType: TripType;
  price: number;
};

const ItemCard = ({
  id,
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
        aria-label={`${LOCATION_CODES[departure]} - ${LOCATION_CODES[destination]} ${SEATS[seat]} ${TRIP_TYPES[tripType]} ${price}원부터`}
        href={`https://www.koreanair.com/booking/best-prices?departureCode=${departure}&destinationCode=${destination}&cabin=${seat}&tripType=${tripType}&duration=7`}
      >
        <span aria-hidden>
          {LOCATION_CODES[departure]} - {LOCATION_CODES[destination]}
        </span>
        <p aria-hidden>
          {SEATS[seat]} {TRIP_TYPES[tripType]}
        </p>
        <p aria-hidden>KRW {price} ~</p>
      </a>
    </li>
  );
};

export default ItemCard;
