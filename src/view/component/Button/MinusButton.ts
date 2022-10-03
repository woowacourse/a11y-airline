import counterStore from 'src/store/CounterStore';
import Button from './Button';

export default class MinusButton extends Button {
  constructor() {
    super({
      children: '-',
      onClick: () => {
        try {
          counterStore.minus();
        } catch ({ message }) {
          alert(message);
        }
      },
    });
  }
}
