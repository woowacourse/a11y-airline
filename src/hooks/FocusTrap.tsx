import { useCallback, useLayoutEffect, useRef } from 'react';

function FocusTrap({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // https://allyjs.io/data-tables/focusable.html
  // https://html.spec.whatwg.org/multipage/interaction.html#focusable-area
  // HTML 스펙 기준으로 포커스 가능한 요소를 찾는 함수

  const getFocusableElements = useCallback((element: HTMLElement) => {
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex="-1"])'
    ];

    const focusableElements = Array.from(
      element.querySelectorAll<HTMLElement>(focusableSelectors.join(','))
    ).filter((el) => {
      // aria-hidden이나 hidden 속성이 있는 요소 제외
      return (
        !el.getAttribute('aria-hidden') &&
        !el.getAttribute('aria-disabled') &&
        !el.getAttribute('disabled') &&
        !el.getAttribute('readonly') &&
        !el.hasAttribute('hidden') &&
        el.style.display !== 'none' &&
        el.style.visibility !== 'hidden'
      );
    });

    return focusableElements;
  }, []);

  useLayoutEffect(() => {
    const element = modalRef.current;
    if (!element) return;

    const focusableElements = getFocusableElements(element);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // 초기 포커스 설정
    firstElement.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          // Shift + Tab: 첫 번째 요소에서 마지막 요소로
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: 마지막 요소에서 첫 번째 요소로
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [getFocusableElements]);

  return <div ref={modalRef}>{children}</div>;
}

export default FocusTrap;
