import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import { createPortal } from 'react-dom';

const portalElement = document.getElementById('modal') as HTMLElement;

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const firstFocusableElementRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  const trapFocus = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey && document.activeElement === firstFocusableElementRef.current) {
      event.preventDefault();
      lastFocusableElementRef.current?.focus();
    }

    if (document.activeElement === lastFocusableElementRef.current) {
      event.preventDefault();
      firstFocusableElementRef.current?.focus();
    }
  };

  useEffect(() => {
    [...document.body.children].forEach((element) => {
      if (element.id === 'modal') {
        element.removeAttribute('aria-hidden');
        return;
      }

      if (isOpen) {
        element.setAttribute('aria-hidden', 'true');
        return;
      }

      element.removeAttribute('aria-hidden');
    });

    document.addEventListener('keydown', trapFocus);

    return () => document.removeEventListener('keydown', trapFocus);
  }, [isOpen]);

  useEffect(() => {
    firstFocusableElementRef.current?.focus();
  }, []);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button
            className={`${styles.modalActionButton} button-text`}
            onClick={closeModal}
            ref={firstFocusableElementRef}
          >
            앱에서 열기
          </button>
          <button
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
            ref={lastFocusableElementRef}
          >
            <img src={close} alt="창 닫기" />
          </button>
        </div>
      </div>
    </div>,
    portalElement
  );
};

export default PromotionModal;
