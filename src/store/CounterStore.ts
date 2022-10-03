import COUNTER from 'src/constants';
import Observer from '.';

class Counter extends Observer {
  #number;
  constructor(initialNumber: number) {
    super();
    this.#number = initialNumber;
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
    this.notify();
  }

  setCounter(value: number): void {
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
    this.notify();
  }

  get number() {
    return this.#number;
  }
}

const counterStore = new Counter(COUNTER.MINIMUM_PASSENGER);

export default counterStore;
