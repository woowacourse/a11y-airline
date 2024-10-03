import { useState } from 'react';
import { useEscapeKeyDown } from '../hooks/useEscapeKeyDown';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEscapeKeyDown(isOpen, closeModal);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} role="dialog" aria-modal="true" tabIndex={0}>
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
            aria-label="앱에서 열기"
          >
            앱에서 열기
          </button>
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
