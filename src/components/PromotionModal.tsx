import { useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import useEscapeClose from '../hooks/useEscapeClose';
import FocusTrap from '../hooks/FocusTrap';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEscapeClose(closeModal);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <FocusTrap>
        <div className={styles.modalBackdrop} onClick={closeModal}></div>
        <div className={styles.modalContainer}>
          <div
            className={styles.modalContent}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <h2 className={`${styles.modalTitle} heading-2-text`} id="modal-title">
              여행할 땐 A11Y AIRLINE 앱
            </h2>
            <p className={`${styles.modalDescription} body-text`} id="modal-description">
              체크인, 탑승권 저장, 수하물 알림까지
              <br />- 앱으로 더욱 편하게 여행하세요!
            </p>

            <button
              className={`${styles.modalCloseButton} heading-2-text`}
              onClick={closeModal}
              aria-label="닫기"
            >
              <img src={close} alt="" />
            </button>
            <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
};

export default PromotionModal;
