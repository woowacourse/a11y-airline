import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import close from '../assets/close.svg';
import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableEl = useRef<HTMLElement | null>(null);
  const lastFocusableEl = useRef<HTMLElement | null>(null);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      firstFocusableEl.current = focusableElements[0];
      lastFocusableEl.current = focusableElements[focusableElements.length - 1];
      firstFocusableEl.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen || event.key !== 'Tab') return;

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableEl.current) {
        event.preventDefault();
        lastFocusableEl.current?.focus();
      }
    } else {
      if (document.activeElement === lastFocusableEl.current) {
        event.preventDefault();
        firstFocusableEl.current?.focus();
      }
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label="여행 프로모션 팝업"
      ref={modalRef}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 id="modal-title" className={`${styles.modalTitle} heading-2-text`}>
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
          <button
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
            aria-label="모달 닫기"
          >
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
