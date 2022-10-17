import { TravelInfo } from "./../type";

const TravelItem = ({ image, location, seat, price, href }: TravelInfo) => {
  return (
    <li className="carousel-list-item">
      <a className="travel-item-container" href={href}>
        <img
          className="travel-item-image"
          src={image}
          alt={location}
          aria-hidden={true}
        />
        <div
          className="travel-item-description"
          aria-hidden={true}
          aria-describedby="travel-desc"
        >
          <p className="travel-item-location">{location}</p>
          <p className="travel-item-seat">{seat}</p>
          <p className="travel-item-price">{`KRW ${price.toLocaleString()}~`}</p>
        </div>
        <div id="travel-desc" className="sr-only">
          {location}
          {seat}
          {`${price} 대한민국 원`}
        </div>
      </a>
    </li>
  );
};

export default TravelItem;
