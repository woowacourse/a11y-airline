import React from "react";
import "./style.css";

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string;
  image: string;
  location: string;
  seat: string;
  price: number;
}
const CarouselItem = ({
  href,
  image,
  location,
  seat,
  price,
  onFocus,
}: CarouselItemProps) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

  return (
    <div className="carousel__item" onFocus={onFocus}>
      <a href={href}>
        <img className="link__img" src={image} alt={""} aria-hidden={true} />
        <div className="description">
          <p className="location">
            서울/인천 <span aria-hidden={true}>-</span> {location}
          </p>
          <p className="seat">{seat} 왕복</p>
          <p className="price">
            KRW {formattedPrice} <span aria-hidden={true}>~</span>
          </p>
        </div>
      </a>
    </div>
  );
};
export default CarouselItem;
