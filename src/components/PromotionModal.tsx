import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modal = useRef<null | HTMLDivElement>(null);
  const openInAppButton = useRef<null | HTMLButtonElement>(null);
  const closeButton = useRef<null | HTMLButtonElement>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const openInAppButtonElement = openInAppButton.current;
    const closeButtonElement = closeButton.current;

    const focusCloseButton = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonElement?.focus();
      }
    };

    const focusOpenInAppButton = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && openInAppButtonElement) {
        event.preventDefault();
        openInAppButtonElement?.focus();
      }
    };

    if (openInAppButtonElement && closeButtonElement) {
      closeButtonElement.addEventListener('keydown', focusOpenInAppButton);
      openInAppButtonElement.addEventListener('keydown', focusCloseButton);
    }

    if (isOpen) {
      [...(document.getElementById('app') as HTMLDivElement).children].forEach((element) => {
        if (modal.current !== element) {
          element.setAttribute('aria-hidden', 'true');
        }
      });
    } else {
      [...(document.getElementById('app') as HTMLDivElement).children].forEach((element) => {
        if (modal.current !== element) {
          element.removeAttribute('aria-hidden');
        }
      });
    }

    return () => {
      if (openInAppButtonElement && closeButtonElement) {
        closeButtonElement.removeEventListener('keydown', focusOpenInAppButton);
        openInAppButtonElement.removeEventListener('keydown', focusCloseButton);
      }
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={modal} role="dialog" className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button ref={openInAppButton} className={`${styles.modalActionButton} button-text`}>
            앱에서 열기
          </button>
          <button
            ref={closeButton}
            autoFocus
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
          >
            <img src={close} alt="닫기" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
