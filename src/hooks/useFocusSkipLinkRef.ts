import { useRef, useCallback } from 'react';

const useFocusSkipLinkRef = () => {
  const ref = useRef<HTMLAnchorElement>(null);

  const restoreFocus = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
      return;
    }
    document.body.focus();
  }, []);

  return { ref, restoreFocus };
};

export default useFocusSkipLinkRef;
