import COUNTER from 'src/constants';
import counterStore from 'src/store/CounterStore';
import Component from '../Component';

const REGEXP = {
  NOT_NUMBER_IN_NUMBER_INPUT: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|e\-+\.~!@#$%^&*()]/,
  NOT_NUMBER: /[^0-9]/g,
  KOREAN: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
  NOT_ZERO: /[1-9]/,
};
export default class Input extends Component {
  #input;
  #span;
  #label;
  #keyOnKeyDown;
  #valueAfterKeyDown;

  constructor() {
    super();
    this.element.classList.add('counter__value__container');

    this.#keyOnKeyDown = '';
    this.#valueAfterKeyDown = '';

    this.#input = document.createElement('input');
    this.#input.type = 'text';
    this.#input.value = counterStore.number.toString();
    this.#input.min = `${COUNTER.MINIMUM_PASSENGER}`;
    this.#input.max = `${COUNTER.MAXIMUM_PASSENGER}`;
    this.#input.step = '1';
    this.#input.id = 'counter__value';

    this.#span = document.createElement('span');
    this.#span.id = 'counter__value__line';

    this.#label = document.createElement('label');
    this.#label.ariaLive = 'polite';
    this.#label.htmlFor = 'counter__value';
    this.#label.id = 'counter__value__label';
    this.#label.classList.add('hide-element');

    this.#input.addEventListener('keydown', this.handleKeyDown);
    this.#input.addEventListener<'change'>('change', this.handleInput);
    this.#input.addEventListener('keypress', this.handleKeypress);
    this.element.append(this.#input, this.#span, this.#label);

    this.render();

    counterStore.subscribe('updateInput', () => {
      this.render();
    });
  }

  handleKeyDown = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.#keyOnKeyDown = (e as any).key;
    const value = target.value;
    this.#input.value = '';

    if (
      !REGEXP.NOT_NUMBER_IN_NUMBER_INPUT.test(this.#keyOnKeyDown) &&
      this.#keyOnKeyDown.length === 1
    ) {
      this.#valueAfterKeyDown = value;
      return;
    }
    return false;
  };

  handleKeypress = (e: Event) => {
    const event = e as KeyboardEvent;

    if (event.keyCode < 48 || event.keyCode > 57) {
      try {
        counterStore.setCounter(Number(this.#valueAfterKeyDown));
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    try {
      if (
        REGEXP.NOT_NUMBER_IN_NUMBER_INPUT.test(this.#keyOnKeyDown) &&
        this.#keyOnKeyDown.length === 1
      ) {
        counterStore.setCounter(Math.floor(Number(this.#valueAfterKeyDown)));
        return;
      }

      if (target.value[0] === '0') {
        counterStore.setCounter(Number(target.value));
      }

      const number = Number(target.value);
      if (number % 1 !== 0) {
        target.value = Math.floor(number).toString();
      }

      counterStore.setCounter(Number(target.value));
    } catch ({ message }) {
      alert(message);
    }
  };

  render() {
    this.#input.value = counterStore.number.toString();
    this.#label.textContent = `${counterStore.status}`;
  }
}
