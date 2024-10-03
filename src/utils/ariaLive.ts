import { RefObject } from 'react';

type AriaLiveType = 'off' | 'polite' | 'assertive';

export const setAriaLive = (ref: RefObject<HTMLElement>, option: AriaLiveType) => {
  if (!ref.current) return;
  ref.current.setAttribute('aria-live', option);
};

export const removeAriaLive = (ref: RefObject<HTMLElement>) => {
  if (!ref.current) return;
  ref.current.removeAttribute('aria-live');
};
