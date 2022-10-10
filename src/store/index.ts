class Observer {
  #callback: { key: string; func: FunctionType }[];

  constructor() {
    this.#callback = [];
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
}

export default Observer;
