import React from "react";
import "./PromotionListItem.css";

function PromotionListItem({
  img,
  departure,
  arrival,
  seat,
  price,
  link,
  isHidden = "true",
}) {
  const itemExplanation = `출발지 ${departure}, 도착지 ${arrival}, 좌석 ${seat}, 가격 ${price}원부터`;

  return (
    <>
      <li className="card" aria-hidden={isHidden}>
        <a className="link" href={link} aria-label={itemExplanation}>
          <div>
            <div className="location-image-wrapper">
              <img
                className="location-image"
                src={img}
                alt={arrival}
                aria-hidden="true"
              />
            </div>

            <div className="explanation" aria-hidden="true">
              <p className="location">
                <span className="departure-location">{departure}</span>
                <span> - </span>
                <span className="arrival-location">{arrival}</span>
              </p>
              <p className="seat">{seat}</p>
              <p className="price">KRW {price}~</p>
            </div>
          </div>
        </a>
      </li>
    </>
  );
}

export default PromotionListItem;
