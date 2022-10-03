class Counter {
  #number;
  constructor(initialNumber: number) {
    this.#number = initialNumber;
  }

  plus() {
    if (this.#number >= 3) throw Error('3이상은 안됩니다.');
    this.#number++;
  }

  minus() {
    if (this.#number <= 0) throw Error('0이하는 안됩니다.');
    this.#number--;
  }

  get number() {
    return this.#number;
  }
}

export default Counter;
