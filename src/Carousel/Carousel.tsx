/** @jsxImportSource @emotion/react */

import { useRef, useState } from 'react';
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
  const [page, setPage] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const isStart = page < 1;
  const isEnd =
    listRef.current && page * 264 >= listRef.current.scrollWidth - listRef.current.offsetWidth;

  const handleClickPrevButton = () => {
    if (isStart) {
      return;
    }

    setPage((prev) => {
      const cur = prev - 1;
      listRef.current?.scrollTo({ top: 0, left: 264 * cur, behavior: 'smooth' });

      return cur;
    });
  };
  const handleClickNextButton = () => {
    if (isEnd) return;

    setPage((prev) => {
      const cur = prev + 1;
      listRef.current?.scrollTo({ top: 0, left: 264 * cur, behavior: 'smooth' });

      return cur;
    });
  };

  return (
    <div css={layoutStyle(data.length)}>
      <button
        css={prevButtonStyle}
        onClick={handleClickPrevButton}
        aria-hidden={true}
        tabIndex={-1}
      ></button>
      <ul css={listStyle} ref={listRef}>
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
      </ul>
      <button
        css={nextButtonStyle}
        onClick={handleClickNextButton}
        aria-hidden={true}
        tabIndex={-1}
      ></button>
    </div>
  );
}
export default Carousel;
