type SeatType = '일반석' | '이등석' | '일등석';
type BookingType = '편도' | '왕복';

export type TravelProductData = Readonly<{
  id: number;
  departure: string;
  destination: string;
  seatType: SeatType;
  bookingType: BookingType;
  minimumFare: number;
  imageUrl: string;
  href: string;
}>;

export type ItemSize = 'small' | 'middle' | 'large';
