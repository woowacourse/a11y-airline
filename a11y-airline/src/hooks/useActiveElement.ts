import { useState, useEffect, useCallback } from "react";

const useActiveElement = (selectors: string) => {
  const [active, setActive] = useState(document.activeElement);

  const handleFocusIn = useCallback(() => {
    const focusElement = document.activeElement?.closest(selectors);
    if (focusElement) {
      setActive(focusElement);
    }
  }, [selectors]);

  useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [handleFocusIn]);

  return active;
};

export default useActiveElement;
