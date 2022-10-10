export default abstract class ComponentWithFragment implements ComponentImpl {
  protected container;

  constructor() {
    this.container = document.createDocumentFragment();
  }

  get target() {
    return this.container;
  }
}
