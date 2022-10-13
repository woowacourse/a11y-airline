import Component from 'src/abstract/Component';

export default class CarouselButton extends Component<'button'> {
  constructor({
    id,
    onClick,
    ariaLabel,
  }: {
    id: string;
    onClick: (e: MouseEvent) => void;
    ariaLabel: string;
  }) {
    super('button');

    this.element.id = id;
    this.element.classList.add('carousel__button');
    this.element.ariaLabel = ariaLabel;
    this.element.addEventListener('click', onClick);
  }

  set disabled(isDisabled: boolean) {
    this.element.ariaDisabled = `${isDisabled}`;
    this.element.disabled = isDisabled;
  }
}
