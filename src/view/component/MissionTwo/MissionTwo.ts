import Component from 'src/abstract/Component';
import { createElement } from 'src/util/dom';
import CarouselList from '../CarouselList/CarouselList';

export default class MissionTwo extends Component {
  #list;

  constructor() {
    super('div', 'carousel__page');
    const title = createElement('h1', 'carousel__title');
    title.textContent = '지금 떠나는 여행';
    this.#list = new CarouselList();

    this.element.append(title, this.#list.target);
  }
}
