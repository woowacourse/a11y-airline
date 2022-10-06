class SnackbarManager {
  #element = null;
  #timer = null;
  #delay = 3000;
  #queue = [];

  constructor(snackbarSelector = '#snackbar') {
    this.#element = document.querySelector(snackbarSelector);
    if (this.#element === null) {
      throw new Error('Snackbar를 찾을 수 없습니다');
    }
  }

  #check() {
    if (this.#element === null) {
      throw new Error('Snackbar를 찾을 수 없습니다');
    }
  }

  show(message = '오류가 발생했습니다') {
    this.#check();
    this.#element.classList.add('show');
    this.#element.textContent = message;
    this.#timer && clearTimeout(this.#timer);
    this.#timer = setTimeout(() => {
      this.hide();
    }, this.#delay);
  }

  hide() {
    this.#check();
    this.#element.classList.remove('show');
  }
}

export default SnackbarManager;
