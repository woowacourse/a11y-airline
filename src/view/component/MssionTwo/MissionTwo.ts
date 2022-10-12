import Component from 'src/abstract/Component';
import CarouselItem from '../CarouselItem/CarouselItem';

export default class MissionTwo extends Component {
  #item;

  constructor() {
    super();
    this.#item = new CarouselItem({
      imageSrc:
        'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg',
      departure: '두바이',
      price: 15600000,
      startingPoint: '서울/인천',
    });

    this.element.append(this.#item.target);
  }
}
