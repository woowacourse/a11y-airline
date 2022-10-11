import React from "react";
import "./PromotionListItem.css";

function PromotionListItem({ img, departure, arrival, seat, price }) {
  return (
    <li className="card">
      <a className="link" href="#">
        <div>
          <div className="location-image-wrapper">
            <img
              className="location-image"
              src={img}
              alt="임시 {departure} - {arrival}"
            />
          </div>

          <div className="explanation">
            <p className="location">
              <span className="departure-location">{departure}</span>
              <span> - </span>
              <span className="arrival-location">{arrival}</span>
            </p>
            <p className="seat">{seat}</p>
            <p className="price">{price}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default PromotionListItem;
