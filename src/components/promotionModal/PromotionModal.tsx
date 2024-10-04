import { useEffect, useRef, useState } from 'react';

import close from '../../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const previouslyFocusedElement = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }

        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements) return;
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        previouslyFocusedElement?.focus();
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <section
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-live="assertive"
      ref={modalRef}
    >
      <div className="visually-hidden">
        모달 창이 열렸습니다. 닫기 버튼 또는 esc 버튼을 눌러 이 창을 닫을 수 있습니다.
      </div>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <section className={styles.modalContent}>
          <h2 id="modal-title" className={`${styles.modalTitle} heading-2-text`}>
            여행할 땐 SUNDAY AIRLINE 앱
          </h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
          <button
            ref={closeButtonRef}
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
            aria-label="닫기"
          >
            <img src={close} alt="닫기" />
          </button>
        </section>
      </div>
    </section>
  );
};

export default PromotionModal;
