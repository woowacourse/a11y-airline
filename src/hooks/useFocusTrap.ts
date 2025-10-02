import { useEffect, useRef, useCallback } from 'react';

interface UseFocusTrapOptions {
  isActive: boolean;
  onClose?: () => void;
  restoreFocus?: boolean;
}

export const useFocusTrap = <T extends HTMLElement = HTMLElement>({
  isActive,
  onClose,
  restoreFocus = true
}: UseFocusTrapOptions) => {
  const containerRef = useRef<T>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const focusFirstElement = useCallback(() => {
    if (!containerRef.current) return;

    const firstFocusableElement = containerRef.current.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;

    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
        return;
      }

      if (event.key === 'Tab' && containerRef.current) {
        const focusableElements = containerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isActive) {
      if (restoreFocus) {
        previousFocusRef.current = document.activeElement as HTMLElement;
      }

      setTimeout(focusFirstElement, 0);

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);

        if (restoreFocus && previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isActive, handleKeyDown, focusFirstElement, restoreFocus]);

  return containerRef;
};
