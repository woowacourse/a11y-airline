import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLElement | null>(null);
  const modalFocusableElements = useRef<HTMLElement[]>([]);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!modalRef.current) return;

    modalFocusableElements.current = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>('button, [tabindex]:not([tabindex="-1"])')
    );

    previousActiveElement.current = document.activeElement as HTMLElement;

    const handleTabKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const firstFocusableElement = modalFocusableElements.current[0];
      const lastFocusableElement =
        modalFocusableElements.current[modalFocusableElements.current.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    };

    const handleFocusTrap = (event: FocusEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        modalFocusableElements.current[0].focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleTabKeyDown);
      document.addEventListener('focusin', handleFocusTrap);
      modalFocusableElements.current[0].focus();
    }

    return () => {
      document.removeEventListener('keydown', handleTabKeyDown);
      document.removeEventListener('focusin', handleFocusTrap);
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleCloseModalWithKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    if (isOpen) document.addEventListener('keydown', handleCloseModalWithKey);

    return () => document.removeEventListener('keydown', handleCloseModalWithKey);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <section
      ref={modalRef}
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label="A11Y AIRLINE 서비스 안내 모달"
    >
      <div className={styles.modalBackdrop} onClick={closeModal} aria-hidden="true"></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <header>
            <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
          </header>
          <main>
            <p className={`${styles.modalDescription} body-text`}>
              체크인, 탑승권 저장, 수하물 알림까지
              <br />- 앱으로 더욱 편하게 여행하세요!
            </p>
            <button type="button" className={`${styles.modalActionButton} button-text`}>
              앱에서 열기
            </button>
          </main>
          <footer>
            <button
              type="button"
              className={`${styles.modalCloseButton} heading-2-text`}
              onClick={closeModal}
            >
              <img src={close} alt="모달 닫기" />
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default PromotionModal;
