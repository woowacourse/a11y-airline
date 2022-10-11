import Component from 'src/abstract/Component';
import TextField from './textField/TextField';
import MinusButton from './Button/MinusButton';
import PlusButton from './Button/PlusButton';

export default class CounterComponent extends Component {
  #minusButton;
  #plusButton;
  #input;

  constructor(id: string) {
    super();
    this.#minusButton = new MinusButton();
    this.#plusButton = new PlusButton();
    this.#input = new TextField();
    this.element.id = id;
    this.element.classList.add('counter', 'flex', 'flex__center');
    this.element.append(
      this.#minusButton.target,
      this.#input.target,
      this.#plusButton.target
    );
  }
}
