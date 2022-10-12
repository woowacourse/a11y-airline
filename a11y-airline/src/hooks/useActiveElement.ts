import { useState, useEffect } from "react";

const useActiveElement = (selectors: string) => {
  const [active, setActive] = useState(document.activeElement);

  const handleFocusIn = () => {
    const focusElement = document.activeElement?.closest(selectors);
    if (focusElement) {
      setActive(focusElement);
    }
  };

  useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, []);

  return active;
};

export default useActiveElement;
