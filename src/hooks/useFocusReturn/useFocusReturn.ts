import { useRef } from 'react';
import { useDidUpdate } from '../useDidUpdate/useDidUpdate';
import { focusNode } from '../useFocusTrap/useFocusTrap';

export interface UseFocusReturnOptions {
  opened: boolean;
  shouldReturnFocus?: boolean;
}

export type UseFocusReturnReturnValue = () => void;

export function useFocusReturn({
  opened,
  shouldReturnFocus = true
}: UseFocusReturnOptions): UseFocusReturnReturnValue {
  const lastActiveElement = useRef<HTMLElement>(
    typeof document !== 'undefined' ? (document.activeElement as HTMLElement) : null
  );

  const returnFocus = () => {
    if (!lastActiveElement.current) {
      return;
    }

    if (lastActiveElement.current === document.body) {
      focusNode(document.body);
      return;
    }

    if (
      'focus' in lastActiveElement.current &&
      typeof lastActiveElement.current.focus === 'function'
    ) {
      lastActiveElement.current.focus({ preventScroll: true });
    }
  };

  useDidUpdate(() => {
    let timeout = -1;

    const clearFocusTimeout = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        window.clearTimeout(timeout);
      }
    };

    document.addEventListener('keydown', clearFocusTimeout);

    if (!opened && shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, 10);
    }

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener('keydown', clearFocusTimeout);
    };
  }, [opened, shouldReturnFocus]);

  return returnFocus;
}
