import Component from 'src/abstract/Component';
import CounterComponent from '../Counter';
import TextView from '../TextView';

export default class MissionOne extends Component {
  #counter;
  #textView;

  constructor() {
    super();
    this.#counter = new CounterComponent('counter');
    this.#textView = new TextView();
    this.element.append(this.#textView.target, this.#counter.target);
  }
}
