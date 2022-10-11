import counterStore from 'src/store/CounterStore';
import Button from './Button';

export default class MinusButton extends Button {
  constructor() {
    super({
      text: '-',
      onClick: () => {
        try {
          counterStore.minus();
        } catch ({ message }) {
          alert(message);
        }
      },
      ariaLabel: '성인 탑승자 한명 줄이기',
    });
  }
}
