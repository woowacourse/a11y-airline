export default class ComponentWithFragment implements ComponentProps {
  protected container;

  constructor() {
    this.container = document.createDocumentFragment();
  }

  get target() {
    return this.container;
  }
}
