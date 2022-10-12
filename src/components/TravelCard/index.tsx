import "./index.css";

interface Props {
  href: string;
  imageSrc: string;
  departure: string;
  destination: string;
  seat: string;
  tripType: string;
  price: number;
}

const TravelCard = ({
  href,
  imageSrc,
  departure,
  destination,
  seat,
  tripType,
  price,
}: Props) => {
  return (
    <div className="card">
      <a href={href}>
        <img
          className="card__image"
          src={imageSrc}
          alt={`${destination} 사진`}
        />
        <div className="card__description">
          <p className="destination">
            {departure} - {destination}
          </p>
          <p className="seat">
            {seat} {tripType}
          </p>
          <p className="price">KWR {price} ~</p>
        </div>
      </a>
    </div>
  );
};

export default TravelCard;
