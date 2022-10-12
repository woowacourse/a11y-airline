import Component from 'src/abstract/Component';

export default class CarouselButton extends Component {
  constructor({
    id,
    onClick,
  }: {
    id: string;
    onClick: (e: MouseEvent) => void;
  }) {
    super('button');
    this.element.id = id;
    this.element.addEventListener('click', onClick);
    this.element.classList.add('carousel__button');
  }
}
