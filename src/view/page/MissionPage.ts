import ComponentWithFragment from 'src/abstract/ComponentWithFragment';
import MissionOne from '../component/MissionOne/MissionOne';
import MissionTwo from '../component/MssionTwo/MissionTwo';

export default class MissionPage extends ComponentWithFragment {
  #tabButton;
  #tabStatus: '1단계' | '2단계';
  #MissionOne;
  #MissionTwo;
  #missionContainer;

  constructor() {
    super();
    this.#tabButton = document.createElement('button');
    this.#tabStatus = '1단계';

    this.#tabButton.textContent = '2단계로';
    this.#tabButton.classList.add('tab__button');
    this.#tabButton.addEventListener('click', this.handleTabButton);
    this.#missionContainer = document.createElement('div');

    this.#MissionOne = new MissionOne();
    this.#MissionTwo = new MissionTwo();
    this.container.append(this.#tabButton, this.#missionContainer);
    this.#render();
  }

  handleTabButton = () => {
    this.#reverseTabButton();
    this.#render();
  };

  #reverseTabButton() {
    const reverseObj = {
      '1단계로': () => {
        this.#tabStatus = '1단계';
        this.#tabButton.textContent = '2단계로';
      },
      '2단계로': () => {
        this.#tabStatus = '2단계';
        this.#tabButton.textContent = '1단계로';
      },
    };

    reverseObj[this.#tabButton.textContent as '1단계로' | '2단계로']();
  }

  #render() {
    this.#missionContainer.innerHTML = '';

    const reverseRender = {
      '1단계': () => {
        this.#missionContainer.appendChild(this.#MissionOne.target);
      },
      '2단계': () => {
        this.#missionContainer.appendChild(this.#MissionTwo.target);
      },
    };

    reverseRender[this.#tabStatus]();
  }
}
