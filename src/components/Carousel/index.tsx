import { useRef, useState } from 'react';
import type { CardInfo } from '../../type';
import Card from '../Card';
import S from './Carousel.module.css';

type CarouselProps = {
  cardInfoList: CardInfo[];
};

const Carousel: React.FC<CarouselProps> = ({ cardInfoList }) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleLeftClick = () => {
    if (carouselRef.current && index > 0) {
      carouselRef.current.scrollBy({ left: -256, behavior: 'smooth' });
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (carouselRef.current && index < cardInfoList.length - 1) {
      carouselRef.current.scrollBy({ left: 256, behavior: 'smooth' });
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className={S.layout}>
      <ul className={S.box} ref={carouselRef}>
        {cardInfoList.map((info) => (
          <li key={info.id}>
            <Card info={info} />
          </li>
        ))}
      </ul>
      <button className={`${S['carousel-button']} ${S['left-button']}`} onClick={handleLeftClick}>
        〈
      </button>
      <button className={`${S['carousel-button']} ${S['right-button']}`} onClick={handleRightClick}>
        〉
      </button>
    </div>
  );
};

export default Carousel;
