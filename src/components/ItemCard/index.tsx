import {
  LocationCode,
  LOCATION_CODES,
  Seat,
  SEATS,
  TripType,
  TRIP_TYPES,
} from '../../constants/flight';
import styles from './ItemCard.module.css';

const ItemCard = ({
  id,
  departure,
  destination,
  seat,
  tripType,
  price,
}: {
  id: number;
  departure: LocationCode;
  destination: LocationCode;
  seat: Seat;
  tripType: TripType;
  price: number;
}) => {
  return (
    <div className={styles.layout}>
      <span>
        {LOCATION_CODES[departure]} - {LOCATION_CODES[destination]}
      </span>
      <span>
        {SEATS[seat]} {TRIP_TYPES[tripType]}
      </span>
      <span>KRW {price} ~</span>
    </div>
  );
};

export default ItemCard;
