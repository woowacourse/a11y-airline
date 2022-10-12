import DXBImage from "../images/DXB-list-pc.jpg";

const TravelItem = () => {
  return (
    <li className="carousel-list-item">
      <a
        className="travel-item-container"
        href="https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&duration=7&cabin=Y"
      >
        <img className="travel-item-image" src={DXBImage} />
        <div className="travel-item-description">
          <p className="travel-item-location">서울/인천 - 두바이</p>
          <p className="travel-item-seat">일반석 왕복</p>
          <p className="travel-item-price">KRW 1,158,000~</p>
        </div>
      </a>
    </li>
  );
};

export default TravelItem;
