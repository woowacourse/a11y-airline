import COUNTER from 'src/constants';
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
      this.notify();
      throw new Error(
        `승객의 최대 인원은 ${COUNTER.MAXIMUM_PASSENGER}명입니다.`
      );
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
      this.notify();
      throw new Error(
        `성인 승객은 최소 ${COUNTER.MINIMUM_PASSENGER}명 이상 ${COUNTER.MAXIMUM_PASSENGER}명의 자연수 이하여야 합니다.`
      );
    }
    this.#value = input;
    this.#status = `성인 승객 ${this.#value}`;
    this.notify();
  }

  minus() {
    if (this.#value <= COUNTER.MINIMUM_PASSENGER) {
      this.#value = COUNTER.MINIMUM_PASSENGER;
      this.notify();
      throw new Error(
        `승객의 최소 인원은 ${COUNTER.MINIMUM_PASSENGER}명입니다.`
      );
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
