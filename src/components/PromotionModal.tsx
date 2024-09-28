import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import { createPortal } from 'react-dom';

const portalElement = document.getElementById('modal') as HTMLElement;

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef(null);

  const closeModal = () => {
    setIsOpen(false);
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
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal} ref={dialogRef}>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
          <button className={`${styles.modalCloseButton} heading-2-text`} onClick={closeModal}>
            <img src={close} alt="창 닫기" />
          </button>
        </div>
      </div>
    </div>,
    portalElement
  );
};

export default PromotionModal;
