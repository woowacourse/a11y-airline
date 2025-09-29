// https://allyjs.io/data-tables/focusable.html
// https://html.spec.whatwg.org/multipage/interaction.html#focusable-area
// HTML 스펙 기준으로 포커스 가능한 요소를 찾는 함수

export const getFocusableElements = (element: HTMLElement) => {
  const focusableSelectors = [
    'a[href]',
    'area[href]',
    'input',
    'select',
    'textarea',
    'button',
    'iframe',
    'object',
    'embed',
    '[contenteditable]'
  ];

  const focusableElements = Array.from(
    element.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
  ).filter((el) => {
    // aria-hidden이나 hidden 속성이 있는 요소 제외
    return (
      !el.getAttribute('aria-hidden') &&
      !(el.getAttribute('aria-disabled') === 'true') &&
      !el.hasAttribute('disabled') &&
      !(el.getAttribute('readonly') === 'true') &&
      !el.hasAttribute('hidden') &&
      el.style.display !== 'none' &&
      el.style.visibility !== 'hidden'
    );
  });

  return focusableElements;
};
