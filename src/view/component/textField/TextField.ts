import { COUNTER } from 'src/constants';
import counterStore from 'src/store/CounterStore';
import Component from 'src/abstract/Component';

const REGEXP = {
  NOT_NUMBER_IN_NUMBER_INPUT: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|e\-+\.~!@#$%^&*()]/,
  NOT_NUMBER: /[^0-9]/g,
  KOREAN: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
  NOT_ZERO: /[1-9]/,
};
export default class TextField extends Component {
  #input;
  #span;
  #label;

  constructor() {
    super();
    this.element.classList.add('counter__value__container');

    this.#input = document.createElement('input');
    this.#input.type = 'text';
    this.#input.value = counterStore.value.toString();
    this.#input.min = `${COUNTER.MIN_PASSENGER}`;
    this.#input.max = `${COUNTER.MAX_PASSENGER}`;
    this.#input.step = '1';
    this.#input.id = 'counter__value';
    this.#input.addEventListener('input', this.handleInput);

    this.#span = document.createElement('span');
    this.#span.id = 'counter__value__line';

    this.#label = document.createElement('label');
    this.#label.ariaLive = 'polite';
    this.#label.htmlFor = 'counter__value';
    this.#label.id = 'counter__value__label';
    this.#label.classList.add('hide-element');

    this.element.append(this.#input, this.#span, this.#label);

    this.render();

    counterStore.subscribe('updateInput', () => {
      this.render();
    });
  }

  handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (!target) return;
    if (target.localName !== 'input') return;

    target.value = target.value.replace(/[^0-9]/g, '');

    try {
      counterStore.setValue(Number(target.value));
    } catch ({ message }) {
      alert(message);
    }
  };

  render() {
    this.#input.value = counterStore.value.toString();
    this.#label.textContent = `${counterStore.status}`;
  }
}
