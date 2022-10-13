import Component from 'src/abstract/Component';
import { createElement } from 'src/util/dom';
import CarouselButton from '../CarouselItem/CarouselButton';
import CarouselItem from '../CarouselItem/CarouselItem';

const ITEM_LIST: CarouselItemImpl[] = [
  {
    imageSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg',
    departure: '두바이',
    price: 1158000,
    startingPoint: '서울/인천',
  },
  {
    imageSrc:
      '	https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FUK-list-pc.jpg',
    departure: '후쿠오카',
    price: 340400,
    startingPoint: '서울/인천',
  },
  {
    imageSrc:
      '	https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HKT-list-pc.jpg',
    departure: '푸껫',
    price: 704100,
    startingPoint: '서울/인천',
  },
  {
    imageSrc:
      '	https://www.koreanair.com/content/dam/koreanair/ko/airport-img/CNX-list-pc.jpg',
    departure: '치앙마이',
    price: 839100,
    startingPoint: '서울/인천',
  },
  {
    imageSrc:
      '	https://www.koreanair.com/content/dam/koreanair/ko/airport-img/BCN-list-pc.jpg',
    departure: '바르셀로나',
    price: 1546300,
    startingPoint: '서울/인천',
  },
  {
    imageSrc:
      '	https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HAN-list-pc.jpg',
    departure: '하노이',
    price: 527500,
    startingPoint: '서울/인천',
  },
  {
    imageSrc:
      '	https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FCO-list-pc.jpg',
    departure: '로마/레오나르도 다빈치',
    price: 1454200,
    startingPoint: '서울/인천',
  },
  {
    imageSrc:
      '	https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HNL-list-pc.jpg',
    departure: '호놀룰루 (하와이)',
    price: 1244900,
    startingPoint: '서울/인천',
  },
];

export default class CarouselList extends Component {
  #listContainer;
  #buttonContainer;
  #plusButton;
  #minusButton;
  #itemList;

  constructor() {
    super();
    this.#itemList = ITEM_LIST.map((item) => new CarouselItem(item).target);

    this.#listContainer = createElement('ul', 'carousel__list');
    this.#listContainer.ariaLabel =
      '목록 8개 항목 포함 서울/인천 로스앤젤레스 일반석 왕복 1,481,800 대한민국 원 링크 목록 항목';
    this.#listContainer.append(...this.#itemList);

    this.#minusButton = new CarouselButton({
      id: 'minus__button',
      onClick: () => {
        this.element.scrollLeft -= this.#itemList[0].clientWidth;
      },
      ariaLabel: '이전',
    });
    this.#plusButton = new CarouselButton({
      id: 'plus__button',
      onClick: () => {
        this.element.scrollLeft += this.#itemList[0].clientWidth;
      },
      ariaLabel: '다음',
    });
    this.#buttonContainer = createElement('div', 'carousel__button__container');
    this.#buttonContainer.append(
      this.#minusButton.target,
      this.#plusButton.target
    );

    this.element.classList.add('carousel__list__container');
    this.element.append(this.#listContainer, this.#buttonContainer);
    this.element.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.#plusButton.disabled =
      this.element.scrollLeft >
      this.#itemList[0].clientWidth * (this.#itemList.length - 2);
    this.#minusButton.disabled = this.element.scrollLeft === 0;
  };
}
