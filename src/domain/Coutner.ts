class Counter {
  #number;
  constructor(initialNumber: number) {
    this.#number = initialNumber;
  }

  plus() {
    this.#number++;
  }

  minus() {
    this.#number--;
  }

  get number() {
    return this.#number;
  }
}

export default Counter;
