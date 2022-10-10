import Component from '../Component';

export default class Button extends Component {
  constructor({
    onClick,
    children,
    ariaLabel,
  }: {
    onClick: (e: MouseEvent) => void;
    children: string;
    ariaLabel: string;
  }) {
    super('button');
    this.element.classList.add('counter__button', 'flex', 'flex__center');
    this.element.addEventListener('click', onClick);
    this.element.textContent = children;
    this.element.ariaLabel = ariaLabel;
  }
}
