import { KeyboardEventHandler, MutableRefObject, ReactElement, useEffect } from 'react';

interface Props {
  children: ReactElement;
  childRef: MutableRefObject<HTMLElement | null>;
}
const FOCUSABLE_CHILDREN_SELECTOR = 'a[href], button:not([disabled]), textarea, input, select';
const FocusTrap = ({ children, childRef }: Props) => {
  const keyDownHandler: KeyboardEventHandler<HTMLElement> = (e) => {
    // 탭키 클릭시만 동작
    if (e.key !== 'Tab') return;

    // ref 존재시에만 동작
    if (childRef.current == null) return;

    // 자식들을 모두 얻기위해 querySelectorAll 사용
    const focusableModalElements = childRef.current.querySelectorAll(FOCUSABLE_CHILDREN_SELECTOR);

    const firstElement = focusableModalElements[0];
    const lastElement = focusableModalElements[focusableModalElements.length - 1];

    // 마지막요소에서 탭 할 시 첫 요소로 이동
    if (!e.shiftKey && document.activeElement === lastElement) {
      (firstElement as HTMLDivElement).focus();
      return e.preventDefault();
    }

    // 첫 요소에서 Shift 탭 할 시 마지막 요소로 이동
    if (e.shiftKey && document.activeElement === firstElement) {
      (lastElement as HTMLDivElement).focus();
      e.preventDefault();
    }
  };

  // 모달이 열리면 첫 번째 요소에 포커스
  useEffect(() => {
    const firstElement = childRef.current?.querySelector(FOCUSABLE_CHILDREN_SELECTOR);
    console.log(firstElement);
    (firstElement as HTMLElement)?.focus();
  }, [childRef]);

  return (
    <div aria-modal="true" onKeyDown={keyDownHandler}>
      {children}
    </div>
  );
};
export default FocusTrap;
