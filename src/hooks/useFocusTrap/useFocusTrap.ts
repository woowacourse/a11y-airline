import { type RefCallback, useCallback, useEffect, useRef } from 'react';
import { scopeTab } from './scopeTab';
import { FOCUS_SELECTOR, focusable, tabbable } from './tabbable';

export const focusNode = (node: HTMLElement) => {
  let focusElement: HTMLElement | null = node.querySelector('[data-autofocus]');

  if (!focusElement) {
    const children = Array.from<HTMLElement>(node.querySelectorAll(FOCUS_SELECTOR));

    focusElement = children.find(tabbable) ?? children.find(focusable) ?? null;

    if (!focusElement && focusable(node)) {
      focusElement = node;
    }
  }

  if (focusElement) {
    focusElement.focus({ preventScroll: true });
  }
};

export const useFocusTrap = (active = true): RefCallback<HTMLElement | null> => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) {
      return;
    }

    setTimeout(() => ref.current && focusNode(ref.current), 300);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && ref.current) {
        scopeTab(ref.current, event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [active]);

  return useCallback(
    (node: HTMLElement | null) => {
      if (!active) {
        return;
      }

      if (node === null) {
        return;
      }

      setTimeout(() => {
        if (node.getRootNode()) {
          focusNode(node);
        }
      }, 300);

      ref.current = node;
    },
    [active]
  );
};
