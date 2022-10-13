export const createElement = <T extends keyof HTMLElementTagNameMap>(
  type: keyof HTMLElementTagNameMap,
  ...classList: string[]
) => {
  const element = document.createElement(type) as HTMLElementTagNameMap[T];

  if (classList.length !== 0) element.classList.add(...classList);
  return element;
};
