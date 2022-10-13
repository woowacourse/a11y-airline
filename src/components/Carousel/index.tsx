import { useContext, useRef, useState } from 'react';
import type { CardInfo } from '../../type';
import Card from '../Card';
import S from './Carousel.module.css';
import { messageContext } from '../../context/MessageContext';

type CarouselProps = {
  cardInfoList: CardInfo[];
};

const Carousel: React.FC<CarouselProps> = ({ cardInfoList }) => {
  const messageState = useContext(messageContext);
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleLeftClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselRef.current && index > 0) {
      carouselRef.current.scrollBy({ left: -256, behavior: 'smooth' });
      setIndex((prevIndex) => {
        return prevIndex - 1;
      });
      return;
    }

    messageState?.setMessage('사용 중지');
  };

  const handleRightClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (carouselRef.current && index < cardInfoList.length - 1) {
      carouselRef.current.scrollBy({ left: 256, behavior: 'smooth' });
      setIndex((prevIndex) => prevIndex + 1);
      return;
    }

    messageState?.setMessage('사용 중지');
  };

  return (
    <div className={S.layout}>
      <ul className={S.box} ref={carouselRef} role='list'>
        {cardInfoList.map((info, infoIndex) =>
          index === infoIndex ? (
            <li key={info.id} role='listitem'>
              <Card info={info} />
            </li>
          ) : (
            <li key={info.id} role='listitem' tabIndex={-1}>
              <Card info={info} tabIndex={-1} />
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
