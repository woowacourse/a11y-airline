import { RefObject, useEffect } from 'react';

/**
 *
 * @param condition : 해당 focus control 동작을 실행 시킬 조건입니다.
 * @param ref : focus를 control할 HTMLElement의 ref 입니다.
 */
export const useFocusControlWithRef = (condition: boolean, ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref || !ref.current) return;

    const focusableElements = ref.current?.querySelectorAll('button');
    const firstElement = ref.current;
    const lastFocusableElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleTabKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !focusableElements) return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    if (condition) {
      firstElement?.focus();
      document.addEventListener('keydown', handleTabKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleTabKeyDown);
    };
  }, [condition]);
};
