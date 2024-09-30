import { RefObject, useEffect, useRef } from 'react';

export const useFocusTrap = <
  T extends HTMLElement,
  U extends HTMLElement,
  V extends HTMLElement
>(): [RefObject<T>, RefObject<U>, RefObject<V>] => {
  const containerRef = useRef<T>(null);
  const firstFocusableRef = useRef<U>(null);
  const lastFocusableRef = useRef<V>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const trapFocus = (e: KeyboardEvent) => {
      const firstFocusableElement = firstFocusableRef.current;
      const lastFocusableElement = lastFocusableRef.current;

      if (!firstFocusableElement || !lastFocusableElement) {
        return;
      }

      if (e.key !== 'Tab') {
        return;
      }

      if (e.shiftKey && document.activeElement === firstFocusableElement) {
        e.preventDefault();
        lastFocusableElement.focus();
      }

      if (!e.shiftKey && document.activeElement === lastFocusableElement) {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    };

    container.addEventListener('keydown', trapFocus);

    return () => {
      container.removeEventListener('keydown', trapFocus);
    };
  }, []);

  return [containerRef, firstFocusableRef, lastFocusableRef];
};
