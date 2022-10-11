import Component from 'src/abstract/Component';

export default class Button extends Component {
  constructor({
    onClick,
    text,
    ariaLabel,
  }: {
    onClick: (e: MouseEvent) => void;
    text: string;
    ariaLabel: string;
  }) {
    super('button');
    this.element.classList.add('counter__button', 'flex', 'flex__center');
    this.element.addEventListener('click', onClick);
    this.element.textContent = text;
    this.element.ariaLabel = ariaLabel;
  }
}
