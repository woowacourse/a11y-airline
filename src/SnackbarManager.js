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

  show(message = '오류가 발생했습니다', onHide = null) {
    this.#check();
    this.#element.classList.add('show');
    this.#element.textContent = message;
    this.#timer && clearTimeout(this.#timer);
    this.#timer = setTimeout(() => {
      this.hide(onHide);
    }, this.#delay);
  }

  hide(onHide = null) {
    this.#check();
    this.#element.classList.remove('show');
    this.#element.textContent = '';
    onHide && onHide();
  }
}

export default SnackbarManager;
