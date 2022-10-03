import COUNTER from 'src/constants';
import counterStore from 'src/store/CounterStore';
import Component from '../Component';

export default class Input extends Component {
  #input;
  #span;
  constructor() {
    super();
    this.element.classList.add('counter__value__container');

    this.#input = document.createElement('input');
    this.#input.type = 'number';
    this.#input.value = counterStore.number.toString();
    this.#input.min = `${COUNTER.MINIMUM_PASSENGER}`;
    this.#input.max = `${COUNTER.MAXIMUM_PASSENGER}`;
    this.#input.step = '1';
    this.#input.id = 'counter__value';

    this.#span = document.createElement('span');
    this.#span.id = 'counter__value__line';

    this.#input.addEventListener('keyup', this.handleKeyup);
    this.#input.addEventListener<'change'>('change', this.handleInput);
    this.#input.addEventListener('keypress', this.handleKeypress);
    this.element.append(this.#input, this.#span);
    this.render();

    counterStore.subscribe('updateInput', () => {
      this.render();
    });
  }

  handleKeyup(this: HTMLInputElement) {
    if (/[ㄱ-하-ㅡ가-힣]/.test(this.value)) {
      this.value = '';
    }
  }

  handleKeypress(this: HTMLInputElement, e: Event) {
    const event = e as KeyboardEvent;
    const code = event.which ? event.which : event.keyCode;

    const _value = this.value;
    if (event.keyCode < 48 || event.keyCode > 57) {
      if (event.keyCode === 46) {
        return this.value;
      }

      return _value;
    }
  }

  handleInput(this: HTMLInputElement) {
    const number = Number(this.value);
    if (number % 1 !== 0) {
      this.value = Math.floor(number).toString();
    }
    try {
      counterStore.setCounter(Number(this.value));
    } catch ({ message }) {
      alert(message);
    }
  }

  render() {
    this.#input.value = counterStore.number.toString();
  }
}
