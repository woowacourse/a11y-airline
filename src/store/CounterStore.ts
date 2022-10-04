import COUNTER from 'src/constants';
import Observer from '.';

class Counter extends Observer {
  #number;
  #status;
  constructor(initialNumber: number) {
    super();
    this.#number = initialNumber;
    this.#status = '';
  }

  plus() {
    if (this.#number >= COUNTER.MAXIMUM_PASSENGER) {
      this.#number = COUNTER.MAXIMUM_PASSENGER;
      this.notify();
      throw new Error(
        `승객의 최대 인원은 ${COUNTER.MAXIMUM_PASSENGER}명입니다.`
      );
    }
    this.#number++;
    this.#status = `성인 승객 추가 ${this.#number}`;
    this.notify();
  }

  setCounter(value: number): void {
    if (value > COUNTER.MAXIMUM_PASSENGER) {
      this.#number = 3;
    }
    if (value < COUNTER.MINIMUM_PASSENGER) {
      this.#number = 0;
    }
    if (
      value > COUNTER.MAXIMUM_PASSENGER ||
      value < COUNTER.MINIMUM_PASSENGER ||
      value % 1 !== 0
    ) {
      this.notify();
      throw new Error(
        `성인 승객은 최소 ${COUNTER.MINIMUM_PASSENGER}명 이상 ${COUNTER.MAXIMUM_PASSENGER}명의 자연수 이하여야 합니다.`
      );
    }
    this.#number = value;
    this.#status = `성인 승객 ${this.#number}`;
    this.notify();
  }

  minus() {
    if (this.#number <= COUNTER.MINIMUM_PASSENGER) {
      this.#number = COUNTER.MINIMUM_PASSENGER;
      this.notify();
      throw new Error(
        `승객의 최소 인원은 ${COUNTER.MINIMUM_PASSENGER}명입니다.`
      );
    }
    this.#number--;
    this.#status = `성인 승객 감소 ${this.#number}`;
    this.notify();
  }

  get number() {
    return this.#number;
  }

  get status() {
    return this.#status;
  }
}

const counterStore = new Counter(COUNTER.MINIMUM_PASSENGER);

export default counterStore;
