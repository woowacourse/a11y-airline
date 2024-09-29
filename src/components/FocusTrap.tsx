import { KeyboardEventHandler, MutableRefObject, ReactElement, useEffect } from 'react';

interface Props {
  children: ReactElement;
  childRef: MutableRefObject<HTMLElement | null>;
}

const FocusTrap = ({ children, childRef }: Props) => {
  const keyDownHandler: KeyboardEventHandler<HTMLElement> = (e) => {
    // only execute if tab is pressed
    if (e.key !== 'Tab') return;

    // here we query all focusable elements, customize as your own need
    if (childRef.current == null) return;
    const focusableModalElements = childRef.current.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [aria-*]'
    );

    const firstElement = focusableModalElements[0];
    const lastElement = focusableModalElements[focusableModalElements.length - 1];

    // if going forward by pressing tab and lastElement is active shift focus to first focusable element
    if (!e.shiftKey && document.activeElement === lastElement) {
      (firstElement as HTMLDivElement).focus();
      return e.preventDefault();
    }

    // if going backward by pressing tab and firstElement is active shift focus to last focusable element
    if (e.shiftKey && document.activeElement === firstElement) {
      (lastElement as HTMLDivElement).focus();
      e.preventDefault();
    }
  };

  // 모달이 열리면 첫 번째 요소에 포커스
  useEffect(() => {
    const firstElement = childRef.current?.querySelector(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    (firstElement as HTMLElement)?.focus();
  }, [childRef]);

  return (
    <div aria-modal="true" onKeyDown={keyDownHandler}>
      {children}
    </div>
  );
};
export default FocusTrap;
