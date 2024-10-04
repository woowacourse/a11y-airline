import { useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import FocusTrap from './FocusTrap';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <FocusTrap>
      <div className={styles.modal} aria-modal="true" role="dialog">
        <div className={styles.modalBackdrop} onClick={closeModal}></div>
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h1
              id="modal-title"
              className={`${styles.modalTitle} heading-2-text`}
              aria-hidden="true"
            >
              여행할 땐 A11Y AIRLINE 앱
            </h1>
            <p
              id="modal-description"
              className={`${styles.modalDescription} body-text`}
              aria-hidden="true"
            >
              체크인, 탑승권 저장, 수하물 알림까지
              <br />- 앱으로 더욱 편하게 여행하세요!
            </p>
            <div
              role="document"
              aria-labelledby="modal-title"
              aria-describedby="modal-title modal-description"
            >
              <button className={`${styles.modalActionButton} button-text`} autoFocus>
                앱에서 열기
              </button>
            </div>
            <button
              className={`${styles.modalCloseButton} heading-2-text`}
              onClick={closeModal}
              aria-label="창 닫기"
            >
              <img src={close} alt="" />
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};

export default PromotionModal;
