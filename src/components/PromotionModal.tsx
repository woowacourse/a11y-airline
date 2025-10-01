import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const previouslyFocusedElementRef = useRef<Element | null>(null);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement;
      // 텍스트만 읽히도록 제목으로 포커스 이동
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.focus();
          return;
        }
        const container = modalContainerRef.current;
        if (!container) return;
        const focusable = container.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusable?.focus();
      }, 0);
    } else {
      // 닫을 때 이전 포커스로 복귀
      (previouslyFocusedElementRef.current as HTMLElement | null)?.focus?.();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  // 포커스 트랩: Tab/Shift+Tab 시 모달 내부에서만 순환
  useEffect(() => {
    if (!isOpen) return;
    const container = modalContainerRef.current;
    if (!container) return;

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = Array.from(
        container.querySelectorAll<HTMLElement>('a[href], button, textarea, input, select')
      ).filter(
        (el) =>
          !el.hasAttribute('disabled') &&
          !el.hasAttribute('hidden') &&
          !el.getAttribute('aria-hidden') &&
          el.tabIndex !== -1
      );

      if (focusableElements.length === 0) {
        container.focus();
        e.preventDefault();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const isShift = e.shiftKey;
      const active = document.activeElement as HTMLElement | null;

      if (!isShift && active === last) {
        e.preventDefault();
        first.focus();
      } else if (isShift && (active === first || active === container)) {
        e.preventDefault();
        last.focus();
      }
    };

    container.addEventListener('keydown', keydownHandler as unknown as EventListener);
    return () =>
      container.removeEventListener('keydown', keydownHandler as unknown as EventListener);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div
        className={styles.modalContainer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promotion-modal-title"
        aria-describedby="promotion-modal-desc"
        ref={modalContainerRef}
        tabIndex={-1}
      >
        <article className={styles.modalContent}>
          <header>
            <h2
              id="promotion-modal-title"
              className={`${styles.modalTitle} heading-2-text`}
              ref={titleRef}
              tabIndex={-1}
            >
              여행할 땐 A11Y AIRLINE 앱
            </h2>
          </header>
          <section>
            <p id="promotion-modal-desc" className={`${styles.modalDescription} body-text`}>
              체크인, 탑승권 저장, 수하물 알림까지
              <br />- 앱으로 더욱 편하게 여행하세요!
            </p>
          </section>
          <footer>
            <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
            <button
              className={`${styles.modalCloseButton} heading-2-text`}
              onClick={closeModal}
              aria-label="프로모션 모달 닫기"
            >
              <img src={close} alt="" />
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default PromotionModal;
