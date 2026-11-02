import { KeyboardEvent, useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previouslyFocusedElement.current = document.activeElement as HTMLElement | null;

    const pageElements = document.querySelectorAll<HTMLElement>(
      '#root > div > a, #root header, #root main, #root footer'
    );

    pageElements.forEach((element) => {
      element.inert = true;
    });
    closeButtonRef.current?.focus();

    return () => {
      pageElements.forEach((element) => {
        element.inert = false;
      });

      const previousElement = previouslyFocusedElement.current;

      if (previousElement && previousElement !== document.body) {
        previousElement.focus();
        return;
      }

      document.getElementById('main-content')?.focus();
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ) ?? []
    );

    if (focusableElements.length === 0) {
      event.preventDefault();
      dialogRef.current?.focus();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={closeModal} aria-hidden="true"></div>
      <div
        ref={dialogRef}
        className={styles.modalContainer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promotion-modal-title"
        aria-describedby="promotion-modal-description"
        tabIndex={-1}
        onKeyDown={trapFocus}
      >
        <div className={styles.modalContent}>
          <h2 id="promotion-modal-title" className={`${styles.modalTitle} heading-2-text`}>
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p
            id="promotion-modal-description"
            className={`${styles.modalDescription} body-text`}
          >
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button type="button" className={`${styles.modalActionButton} button-text`}>
            앱에서 열기
          </button>
          <button
            ref={closeButtonRef}
            type="button"
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
            aria-label="앱 홍보 팝업 닫기"
          >
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
