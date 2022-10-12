import { TravelInfo } from "./../type";

const TravelItem = ({ image, location, seat, price, href }: TravelInfo) => {
  return (
    <li className="carousel-list-item">
      <a className="travel-item-container" href={href}>
        <img className="travel-item-image" src={image} alt={`${location}`} />
        <div className="travel-item-description">
          <p className="travel-item-location">{location}</p>
          <p className="travel-item-seat">{seat}</p>
          <p className="travel-item-price">{price}</p>
        </div>
      </a>
    </li>
  );
};

export default TravelItem;
