import ComponentWithFragment from 'src/abstract/ComponentWithFragment';

export default class TextView extends ComponentWithFragment {
  constructor() {
    super();
    this.container = document.createDocumentFragment();
    const titleElement = document.createElement('h1');
    titleElement.textContent = '승객 선택';
    const subTitleElement = document.createElement('div');
    subTitleElement.innerHTML = `<div class="flex flex__center sub-title__container">
    <h2>성인</h2>
    <span title="성인 승객은 총 3명까지 등록할 수 있습니다." id="tooltip" class="flex flex__center" role="tooltip" aria-label="성인 승객은 총 3명까지 등록할 수 있습니다.">?</span>
    </div>`;
    this.container.append(titleElement, subTitleElement);
  }
}
