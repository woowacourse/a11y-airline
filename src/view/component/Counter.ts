import Component from './Component';
import Input from './Input/Input';
import MinusButton from './Button/MinusButton';
import PlusButton from './Button/PlusButton';

export default class CounterComponent extends Component {
  #minusButton;
  #plusButton;
  #input;

  constructor() {
    super();
    this.#minusButton = new MinusButton();
    this.#plusButton = new PlusButton();
    this.#input = new Input();
    this.element.id = 'counter';
    this.element.classList.add('counter', 'flex', 'flex__center');
    this.element.appendChild(this.#minusButton.target);
    this.element.appendChild(this.#input.target);
    this.element.appendChild(this.#plusButton.target);
  }
}
