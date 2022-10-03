import Observer from '.';

class Counter extends Observer {
  #number;
  constructor(initialNumber: number) {
    super();
    this.#number = initialNumber;
  }

  plus() {
    if (this.#number >= 3) {
      this.#number = 3;
      this.notify();
      throw new Error('승객의 최대 인원은 3명입니다.');
    }
    this.#number++;
    this.notify();
  }

  setCounter(value: number): void {
    if (value > 3 || value < 0 || value % 1 !== 0) {
      this.notify();
      throw new Error(
        '성인 승객은 최소 0명 이상 3명의 자연수 이하여야 합니다.'
      );
    }
    this.#number = value;
    this.notify();
  }

  minus() {
    if (this.#number <= 0) {
      this.#number = 0;
      this.notify();
      throw new Error('승객의 최소 인원은 0명입니다.');
    }
    this.#number--;
    this.notify();
  }

  get number() {
    return this.#number;
  }
}

const counterStore = new Counter(0);

export default counterStore;
