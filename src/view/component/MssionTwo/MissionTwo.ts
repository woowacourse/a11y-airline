import Component from 'src/abstract/Component';

export default class MissionTwo extends Component {
  #title;

  constructor() {
    super();
    this.#title = document.createElement('h2');
    this.#title.textContent = 'hello mission 2';

    this.element.append(this.#title);
  }
}
