import { useLayoutEffect, useRef } from 'react';
import { getFocusableElements } from '../utils/getFocusableElements';

function FocusTrap({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDivElement | null>(null);

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
  }, []);

  return <div ref={modalRef}>{children}</div>;
}

export default FocusTrap;
