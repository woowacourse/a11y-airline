import Component from '../Component';

export default class Button extends Component {
  constructor({
    onClick,
    children,
    label,
  }: {
    onClick: (e: Event) => unknown;
    children: string;
    label: string;
  }) {
    super('button');
    this.element.classList.add('counter__button', 'flex', 'flex__center');
    this.element.addEventListener('click', onClick);
    this.element.textContent = children;
    this.element.ariaLabel = label;
    this.element.ariaLive = 'assertive';
  }
}
