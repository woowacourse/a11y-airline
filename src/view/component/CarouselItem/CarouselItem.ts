import Component from 'src/abstract/Component';
import { createElement } from 'src/util/dom';

export default class CarouselItem extends Component {
  #imageContainer;
  #paragraphContainer;
  #container;

  constructor({ imageSrc, startingPoint, departure, price }: CarouselItemImpl) {
    super('li');

    this.#container = createElement('a');
    this.#imageContainer = createElement('div', 'carousel__image__container');
    this.#paragraphContainer = createElement(
      'div',
      'carousel__item__paragraph__container'
    );

    this.#imageContainer.innerHTML = `
    <img alt="${departure} 이미지" src="${imageSrc}" class="carousel__image" aria-hidden=true>`;

    this.#paragraphContainer.innerHTML = `
        <p class="carousel__item__location">
            ${startingPoint}                           
            <span aria-hidden="true">-</span>
            ${departure}
        </p>
        <p class="carousel__item__seat">일반석 왕복</p>
        <p class="carousel__item__price">
            <span class="carousel__item__price__text">KRW ${price.toLocaleString(
              'ko-KR'
            )} </span>
            <span aria-hidden="true">~</span>
        </p>
    `;

    this.element.classList.add('carousel__item');
    this.#container.append(this.#imageContainer, this.#paragraphContainer);

    this.element.tabIndex = 0;
    this.element.append(this.#container);
    this.element.addEventListener('focusin', this.handleFocus);
  }

  handleFocus = (e: FocusEvent) => {
    const target = e.target as HTMLLIElement;
    target.scrollIntoView({ inline: 'end' });
  };
}
