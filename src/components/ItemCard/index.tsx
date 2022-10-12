import {
  LocationCode,
  LOCATION_CODES,
  Seat,
  SEATS,
  TripType,
  TRIP_TYPES,
} from '../../constants/flight';

const ItemCard = ({
  departure,
  destination,
  seat,
  tripType,
  price,
}: {
  departure: LocationCode;
  destination: LocationCode;
  seat: Seat;
  tripType: TripType;
  price: number;
}) => {
  return (
    <div>
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
