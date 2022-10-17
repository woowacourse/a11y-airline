import { parseToKWRPrice } from "@utils";
import "./style.css";

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
      <a href={href} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          loading="lazy"
          src={imageSrc}
          alt={`여행지 ${destination} 사진`}
          aria-hidden={true}
        />
        <div className="card__description">
          <p className="destination">
            <p aria-label={`출발지 ${departure}`}> {departure} </p>
            <p aria-hidden={true}> ~ </p>
            <p aria-label={`도착지 ${destination}`}> {destination} </p>
          </p>
          <p className="trip-information">
            <p aria-label={`좌석 등급 ${seat}`}> {seat} </p>
            <p aria-label={`티켓 종류 ${tripType}`}>{tripType}</p>
          </p>
          <p className="price">
            <p aria-hidden={true}>KWR</p>
            <p className="sr-only">한화 </p>
            {parseToKWRPrice(price)}
            <p className="sr-only">원 부터 </p>
            <p aria-hidden={true}> ~</p>
          </p>
        </div>
      </a>
    </div>
  );
};

export default TravelCard;
