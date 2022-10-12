export const createElement = (type: string, ...classList: string[]) => {
  const element = document.createElement(type);

  if (classList.length !== 0) element.classList.add(...classList);
  return element;
};
