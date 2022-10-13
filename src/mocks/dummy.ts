import { LocationCode, Seat, TripType } from '../constants/flight';

export const recommendations: {
  id: number;
  departure: LocationCode;
  destination: LocationCode;
  seat: Seat;
  tripType: TripType;
  price: number;
}[] = [
  {
    id: 1,
    departure: 'ICN',
    destination: 'LAX',
    seat: 'Y',
    tripType: 'RT',
    price: 1481800,
  },
  {
    id: 2,
    departure: 'ICN',
    destination: 'BCN',
    seat: 'Y',
    tripType: 'RT',
    price: 1515200,
  },
  {
    id: 3,
    departure: 'ICN',
    destination: 'FUK',
    seat: 'C',
    tripType: 'RT',
    price: 340400,
  },
  {
    id: 4,
    departure: 'ICN',
    destination: 'HKT',
    seat: 'Y',
    tripType: 'OW',
    price: 704100,
  },
  {
    id: 5,
    departure: 'ICN',
    destination: 'DXB',
    seat: 'Y',
    tripType: 'RT',
    price: 1121600,
  },
  {
    id: 6,
    departure: 'ICN',
    destination: 'LAX',
    seat: 'C',
    tripType: 'OW',
    price: 1481800,
  },
  {
    id: 7,
    departure: 'ICN',
    destination: 'CEB',
    seat: 'C',
    tripType: 'RT',
    price: 1515200,
  },
  {
    id: 8,
    departure: 'ICN',
    destination: 'CGK',
    seat: 'Y',
    tripType: 'RT',
    price: 340400,
  },
];
