import { createElement } from 'src/util/dom';

export default abstract class Component<
  T extends keyof HTMLElementTagNameMap = 'div'
> implements ComponentImpl
{
  protected element;

  constructor(type: keyof HTMLElementTagNameMap = 'div') {
    this.element = createElement<T>(type);
  }

  get target() {
    return this.element;
  }
}
