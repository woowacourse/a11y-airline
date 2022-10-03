import Component from '../Component';

export default class Button extends Component {
  constructor({
    onClick,
    children,
  }: {
    onClick: (e: Event) => unknown;
    children: string;
  }) {
    super('button');
    this.element.classList.add('counter__button', 'flex', 'flex__center');
    this.element.addEventListener('click', onClick);
    this.element.textContent = children;
  }
}
