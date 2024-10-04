import { MutableRefObject } from 'react';

const getFocusableElementList = <T = HTMLElement>(ref: MutableRefObject<T>) => {
  const current = ref.current;

  if (!(current instanceof HTMLElement)) return null;

  return current.querySelectorAll(
    'button, a, input, textarea, select, details, p, h2, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;
};

export default getFocusableElementList;
