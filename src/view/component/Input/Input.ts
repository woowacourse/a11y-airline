import store from '../../../store';
import Component from '../Component';

export default class Input extends Component {
  constructor() {
    super();
    this.element.classList.add('counter__value__container');
    this.render();

    store.subscribe('updateInput', this.render);
  }

  render() {
    this.element.innerHTML = `<input type="number" value="${store.count}" min="0" max="3" step="1" id="counter__value" />
      <span id="counter__value__line" />`;
  }
}
