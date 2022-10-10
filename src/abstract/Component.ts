export default abstract class Component implements ComponentProps {
  protected element;

  constructor(type = 'div') {
    this.element = document.createElement(type);
  }

  get target() {
    return this.element;
  }
}
