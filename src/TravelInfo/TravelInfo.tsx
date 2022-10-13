/** @jsxImportSource @emotion/react */

import {
  imageStyle,
  layoutStyle,
  linkStyle,
  locationStyle,
  priceStyle,
  seatStyle,
  textStyle,
} from './TravelInfo.styles';

interface TravelInfoProps {
  location: string;
  seat: string;
  price: number;
  image: string;
  href: string;
}

function TravelInfo({ location, seat, price, image, href }: TravelInfoProps) {
  return (
    <li css={layoutStyle}>
      <a href={href} css={linkStyle}>
        <img src={image} alt={location} css={imageStyle} />
        <div css={textStyle}>
          <p css={locationStyle}>{location}</p>
          <p css={seatStyle}>{seat}</p>
          <p css={priceStyle}>
            KRW {price.toLocaleString('ko-kr')} <span aria-hidden>~</span>
          </p>
        </div>
      </a>
    </li>
  );
}
export default TravelInfo;
