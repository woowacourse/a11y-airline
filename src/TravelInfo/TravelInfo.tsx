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
      <a
        href={href}
        css={linkStyle}
        aria-label={`${location} ${seat} 최저가 ${price.toLocaleString('ko-kr')} 대한민국 원부터`}
      >
        <img src={image} alt={location} css={imageStyle} aria-hidden />
        <div css={textStyle} aria-hidden>
          <p css={locationStyle}>{location}</p>
          <p css={seatStyle}>{seat}</p>
          <p css={priceStyle}>KRW {price.toLocaleString('ko-kr')} ~</p>
        </div>
      </a>
    </li>
  );
}
export default TravelInfo;
