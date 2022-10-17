import { useState, useRef, FocusEvent, MouseEvent } from 'react';

import Item, { ItemProps } from './components/Item';
import * as S from './index.style';

interface CarouselProps {
  title: string;
  items: ItemProps[];
  itemWidth?: number;
}

const LEFT = '<';
const RIGHT = '>';

const Carousel = ({ title, items, itemWidth = 245 }: CarouselProps) => {
  const [end, setEnd] = useState({
    left: true,
    right: false,
  });
  const ItemContainer = useRef<HTMLUListElement>(null);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ItemContainer.current) return;

    ItemContainer.current.scrollBy({
      left: e.currentTarget.innerText === LEFT ? -itemWidth : itemWidth,
      behavior: 'smooth',
    });
  };

  const handleFocus = (e: FocusEvent<HTMLAnchorElement>) => {
    e.target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnd = () => {
    if (!ItemContainer.current) return;

    const { scrollLeft, scrollWidth, offsetWidth } = ItemContainer.current;

    setEnd({
      left: scrollLeft <= 0,
      right: scrollWidth <= offsetWidth + scrollLeft,
    });
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ItemContainer ref={ItemContainer} onScroll={handleEnd}>
        {items &&
          items.map(item => (
            <Item
              {...item}
              key={item.description.title}
              onFocus={handleFocus}
            />
          ))}
      </S.ItemContainer>

      <S.LeftShiftButton
        onClick={handleButtonClick}
        type="button"
        aria-label="이전 버튼"
        aria-disabled={end.left}
        isDisable={end.left}
      >
        {LEFT}
      </S.LeftShiftButton>
      <S.RightShiftButton
        onClick={handleButtonClick}
        type="button"
        aria-label="다음 버튼"
        aria-disabled={end.right}
        isDisable={end.right}
      >
        {RIGHT}
      </S.RightShiftButton>
    </S.Container>
  );
};

export default Carousel;
