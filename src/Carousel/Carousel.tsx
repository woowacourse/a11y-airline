/** @jsxImportSource @emotion/react */

import { data } from '../data';
import TravelInfo from '../TravelInfo/TravelInfo';
import {
  hiddenStyle,
  layoutStyle,
  listStyle,
  nextButtonStyle,
  prevButtonStyle,
} from './Carousel.styles';

function Carousel() {
  return (
    <div css={layoutStyle}>
      <button css={prevButtonStyle}>
        <span css={hiddenStyle}>이전</span>
      </button>
      <li css={listStyle}>
        {data.map((el) => (
          <TravelInfo
            key={el.id}
            location={el.location}
            seat={el.seat}
            price={el.price}
            image={el.image}
            href={el.href}
          />
        ))}
      </li>
      <button css={nextButtonStyle}>
        <span css={hiddenStyle}>다음</span>
      </button>
    </div>
  );
}
export default Carousel;
