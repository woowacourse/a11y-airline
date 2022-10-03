import store from '../../../store';
import Button from './Button';

export default class PlusButton extends Button {
  constructor() {
    super({
      children: '+',
      onClick: () => {
        try {
          store.addCounter();
        } catch ({ message }) {
          alert(message);
        }
      },
    });
  }
}
