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
      <a href={href}>
        <img
          className="card__image"
          src={imageSrc}
          alt={`여행지 ${destination} 사진`}
          aria-hidden={true}
        />
        <div className="card__description">
          <p className="destination">
            <span aria-label={`출발지 ${departure}`}> {departure} </span>
            <span aria-hidden={true}> ~ </span>
            <span aria-label={`도착지 ${destination}`}> {destination} </span>
          </p>
          <p className="trip-information">
            <span aria-label={`좌석 등급 ${seat}`}> {seat} </span>
            <span aria-label={`티켓 종류 ${tripType}`}>{tripType}</span>
          </p>
          <p className="price">
            <span aria-hidden={true}>KWR</span>
            <span className="sr-only">한화 </span>
            {parseToKWRPrice(price)}
            <span className="sr-only">원 부터 </span>
            <span aria-hidden={true}> ~</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default TravelCard;
