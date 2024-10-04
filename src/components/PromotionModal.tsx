import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // focus 가능하도록 설정할 elements 선택
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
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

      const trapFocus = (e: KeyboardEvent) => {
        // 모달 닫기
        if (e.key === 'Escape') {
          closeModal();
        }
      };

      // 처음 열릴 때 포커스를 첫 번째 요소로 이동
      firstElement?.focus();
      document.addEventListener('keydown', handleTabKey);
      document.addEventListener('keydown', trapFocus);

      return () => {
        document.removeEventListener('keydown', handleTabKey);
        document.removeEventListener('keydown', trapFocus);
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.modal}
      role="dialog"
      aria-label="프로모션 모달"
      aria-live="polite"
      ref={modalRef}
    >
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button type="button" className={`${styles.modalActionButton} button-text`}>
            앱에서 열기
          </button>
          <button
            type="button"
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
          >
            <img src={close} alt="닫기 아이콘" aria-label="모달 닫기" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
