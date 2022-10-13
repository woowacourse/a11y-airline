import './index.css';

import Component from 'src/abstract/Component';
import { ITEM_LIST } from 'src/constants/carousel';
import { createElement } from 'src/util/dom';
import CarouselButton from '../CarouselItem/CarouselButton';
import CarouselItem from '../CarouselItem/CarouselItem';

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
