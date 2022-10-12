import { useState, KeyboardEvent } from 'react';
import { Trip } from '../../dummy';
import Item from './components/Item';
import * as S from './index.style';

interface CarouselProps {
  title: string;
  items?: Trip[];
}

const ITEM_WIDTH = 245;

const Carousel = ({ title, items }: CarouselProps) => {
  const [shift, setShift] = useState(0);

  const LeftShift = () => {
    setShift(shift => (shift < 0 ? shift + 245 : shift));
  };

  const RightShift = () => {
    setShift(shift => (shift > -ITEM_WIDTH * 8 ? shift - 245 : shift));
  };

  const onPressTab = (
    e: KeyboardEvent<HTMLUListElement> & { target: HTMLUListElement }
  ) => {
    const { x } = e.target.getBoundingClientRect();

    if (e.shiftKey) {
      setShift(shift => (shift < 0 ? shift + 245 : shift));
    }

    if (e.code === 'Tab' && !e.shiftKey) {
      setShift(shift =>
        x > window.innerWidth * 0.4 && shift > -ITEM_WIDTH * 8
          ? shift - 245
          : shift
      );
    }
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ItemContainer shift={shift + 'px'} onKeyUp={onPressTab}>
        {items &&
          items.map(item => <Item {...item} key={item.description.title} />)}
      </S.ItemContainer>

      <S.LeftShiftButton
        onClick={LeftShift}
        type="button"
      >{`<`}</S.LeftShiftButton>
      <S.RightShiftButton
        onClick={RightShift}
        type="button"
      >{`>`}</S.RightShiftButton>
    </S.Container>
  );
};

export default Carousel;
