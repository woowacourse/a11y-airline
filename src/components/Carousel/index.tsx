import { useContext, useRef, useState } from 'react';
import S from './Carousel.module.css';
import type { CardInfo } from '../../type';
import Card from '../Card';
import { messageContext } from '../../context/MessageContext';
import { scrollByIndex } from '../../utils';

type CarouselProps = {
  cardInfoList: CardInfo[];
};

const Carousel: React.FC<CarouselProps> = ({ cardInfoList }) => {
  const messageState = useContext(messageContext);
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleLeftClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselRef.current && index > 0) {
      scrollByIndex(carouselRef.current, itemRefs.current, index, 'left');
      setIndex((prevIndex) => prevIndex - 1);

      return;
    }

    messageState?.setMessage('사용 중지');
  };

  const handleRightClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselRef.current && index < cardInfoList.length - 1) {
      scrollByIndex(carouselRef.current, itemRefs.current, index, 'right');
      setIndex((prevIndex) => prevIndex + 1);

      return;
    }

    messageState?.setMessage('사용 중지');
  };

  const bindItemRefs = (index: number) => (element: HTMLAnchorElement) => {
    itemRefs.current[index] = element;

    return element;
  };

  return (
    <div className={S.layout}>
      <ul className={S.box} ref={carouselRef}>
        {cardInfoList.map((info, infoIndex) =>
          index === infoIndex ? (
            <li key={info.id}>
              <Card info={info} ref={bindItemRefs(infoIndex)} />
            </li>
          ) : (
            <li key={info.id} tabIndex={-1}>
              <Card info={info} tabIndex={-1} ref={bindItemRefs(infoIndex)} />
            </li>
          )
        )}
      </ul>
      <button
        aria-label='이전 목록'
        className={`${S['carousel-button']} ${S['left-button']}`}
        onClick={handleLeftClick}
        tabIndex={0}>
        〈
      </button>
      <button
        aria-label='다음 목록'
        className={`${S['carousel-button']} ${S['right-button']}`}
        onClick={handleRightClick}
        tabIndex={0}>
        〉
      </button>
    </div>
  );
};

export default Carousel;
