class Observer {
  #callbacks: { key: string; func: FunctionType }[];

  constructor() {
    this.#callbacks = [];
  }

  subscribe(key: string, func: FunctionType) {
    this.#callbacks.push({ key, func });
  }

  unsubscribe(key: string) {
    this.#callbacks = this.#callbacks.filter((funcObj) => funcObj.key !== key);
  }

  notify() {
    this.#callbacks.forEach(({ func }) => {
      func();
    });
  }
}

export default Observer;
