import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const nextFocusIndexRef = useRef(0);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleKeydownTab = (event: KeyboardEvent) => {
    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements) return;

    const firstElement = focusableElements[nextFocusIndexRef.current];
    const nextElement = focusableElements[nextFocusIndexRef.current + 1];

    if (event.key === 'Tab') {
      event.preventDefault();
      nextFocusIndexRef.current = (nextFocusIndexRef.current + 1) % focusableElements.length;

      if (document.activeElement === firstElement) {
        nextElement?.focus();
      } else {
        firstElement?.focus();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydownTab);

    return () => {
      document.removeEventListener('keydown', handleKeydownTab);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} role="dialog" aria-modal="true" ref={modalRef}>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`} tabIndex={0}>
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
          <button className={`${styles.modalCloseButton} heading-2-text`} onClick={closeModal}>
            <img src={close} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
