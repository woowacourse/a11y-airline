import { COUNTER, ERROR_MESSAGE } from 'src/constants';
import Observer from '.';

class CounterStore extends Observer {
  #value;
  #status;
  constructor(initialNumber: number) {
    super();
    this.#value = initialNumber;
    this.#status = '';
  }

  plus() {
    if (this.#value >= COUNTER.MAXIMUM_PASSENGER) {
      this.#value = COUNTER.MAXIMUM_PASSENGER;
      this.#status = ERROR_MESSAGE.EXCEED_PASSENGER;
      this.notify();
      throw new Error(ERROR_MESSAGE.EXCEED_PASSENGER);
    }
    this.#value++;
    this.#status = `성인 승객 추가 ${this.#value}`;
    this.notify();
  }

  setValue(input: number): void {
    if (input > COUNTER.MAXIMUM_PASSENGER) {
      this.#value = 3;
    }
    if (input < COUNTER.MINIMUM_PASSENGER) {
      this.#value = 0;
    }
    if (
      input > COUNTER.MAXIMUM_PASSENGER ||
      input < COUNTER.MINIMUM_PASSENGER ||
      input % 1 !== 0
    ) {
      this.#status = ERROR_MESSAGE.OUT_OF_BOUNDS;
      this.notify();
      throw new Error(ERROR_MESSAGE.OUT_OF_BOUNDS);
    }
    this.#value = input;
    this.#status = `성인 승객 ${this.#value} 텍스트`;
    this.notify();
  }

  minus() {
    if (this.#value <= COUNTER.MINIMUM_PASSENGER) {
      this.#value = COUNTER.MINIMUM_PASSENGER;
      this.#status = ERROR_MESSAGE.FALL_SHORT_OF_MIN_PASSENGER;
      this.notify();
      throw new Error(ERROR_MESSAGE.FALL_SHORT_OF_MIN_PASSENGER);
    }
    this.#value--;
    this.#status = `성인 승객 감소 ${this.#value}`;
    this.notify();
  }

  get value() {
    return this.#value;
  }

  get status() {
    return this.#status;
  }
}

const counterStore = new CounterStore(COUNTER.MINIMUM_PASSENGER);

export default counterStore;
