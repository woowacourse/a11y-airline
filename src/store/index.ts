import Counter from '../domain/Coutner';

type FunctionType = (...arg: any[]) => any;

class Store {
  #callback: { key: string; func: FunctionType }[];
  #counter;

  constructor() {
    this.#callback = [];
    this.#counter = new Counter(0);
  }

  subscribe(key: string, func: FunctionType) {
    this.#callback.push({ key, func });
  }

  unsubscribe(key: string) {
    this.#callback = this.#callback.filter((funcObj) => funcObj.key !== key);
  }

  notify() {
    this.#callback.forEach(({ func }) => {
      func();
    });
  }

  addCounter() {
    this.#counter.plus();
    this.notify();
  }

  minusCounter() {
    this.#counter.minus();
    this.notify();
  }

  get count() {
    return this.#counter.number;
  }
}

const store = new Store();

export default store;
