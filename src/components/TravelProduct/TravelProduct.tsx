import classNames from 'classnames';
import { ItemSize } from '../Carousel/Carousel';
import styles from './TravelProduct.module.css';

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
        <p className={styles.fare}>KRW {minimumFare.toLocaleString()} ~</p>
      </div>
    </a>
  );
};

export default TravelProduct;
