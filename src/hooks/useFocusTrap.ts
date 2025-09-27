import { useEffect } from 'react';

const useFocusTrap = (containerRef: React.RefObject<HTMLElement>, onClose: () => void) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    const focusableElements = container.querySelectorAll<HTMLElement>(focusableSelectors.join(','));
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    if (firstEl) {
      firstEl.focus();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }

      if (e.key === 'Tab') {
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        if (e.shiftKey) {
          // Shift + Tab → 첫 요소에서 마지막으로
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          // Tab → 마지막에서 첫 요소로
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [containerRef, onClose]);
};

export default useFocusTrap;
