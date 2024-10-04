import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import { createPortal } from 'react-dom';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const rootElement = document.getElementById('root');
      const outsideElements = rootElement?.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      outsideElements?.forEach((el) => {
        el.setAttribute('data-original-tabindex', el.getAttribute('tabindex') || '0');
        el.setAttribute('tabindex', '-1');
        el.setAttribute('aria-hidden', 'true');
      });

      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };
      document.addEventListener('keydown', handleEscapeKey);

      return () => {
        outsideElements?.forEach((el) => {
          const originalTabIndex = el.getAttribute('data-original-tabindex');
          if (originalTabIndex) {
            el.setAttribute('tabindex', originalTabIndex);
          } else {
            el.removeAttribute('tabindex');
          }
          el.removeAttribute('data-original-tabindex');
          el.removeAttribute('aria-hidden');
        });

        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      id="promotion-modal"
      ref={modalRef}
      className={styles.modal}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalBackdrop} onClick={closeModal} aria-hidden></div>
      <div className={styles.modalContainer}>
        <div
          className={styles.modalContent}
          id="promotion-modal-content"
          tabIndex={0}
          aria-describedby="modalTitle modalDescription"
        >
          <h2 className={`${styles.modalTitle} heading-2-text`} id="modalTitle">
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p
            className={`${styles.modalDescription} body-text ${styles.modalDescription}`}
            id="modalDescription"
            aria-hidden
          >
            체크인, 탑승권 저장, 수하물 알림까지
            <br /> - 앱으로 더욱 편하게 여행하세요!
          </p>
          <button className={`${styles.modalActionButton} button-text`} aria-label="앱 설치 하기">
            앱에서 열기
          </button>
          <button
            className={`${styles.modalCloseButton} heading-2-text`}
            aria-label="앱 설치 안내 닫기"
            onClick={closeModal}
          >
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PromotionModal;
