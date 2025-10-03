import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const getFocusableElements = () => {
    if (!modalRef.current) return [];

    return Array.from(modalRef.current.querySelectorAll('button:not([disabled])')) as HTMLElement[];
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusableElements = focusableElementsRef.current;
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      focusableElementsRef.current = getFocusableElements();

      const timer = setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        }
      }, 0);

      document.addEventListener('keydown', handleKeyDown);

      document.body.style.overflow = 'hidden';

      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer} ref={modalRef}>
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
            ref={closeButtonRef}
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
            aria-label="프로모션 팝업 닫기"
          >
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
