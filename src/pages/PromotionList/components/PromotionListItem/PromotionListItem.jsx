import React from "react";
import "./PromotionListItem.css";

function PromotionListItem({ img, departure, arrival, seat, price }) {
  return (
    <li class="card">
      <a class="link" href="#">
        <div>
          <div class="location-image-wrapper">
            <img
              class="location-image"
              src={img}
              alt="임시 {departure} - {arrival}"
            />
          </div>

          <div class="explanation">
            <p class="location">
              <span class="departure-location">{departure}</span>
              <span> - </span>
              <span class="arrival-location">{arrival}</span>
            </p>
            <p class="seat">{seat}</p>
            <p class="price">{price}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default PromotionListItem;
