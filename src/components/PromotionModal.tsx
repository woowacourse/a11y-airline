import { useState, useCallback } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const modalRef = useFocusTrap<HTMLDivElement>({
    isActive: isOpen,
    onClose: closeModal,
    restoreFocus: true
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <button
        type="button"
        className={styles.modalBackdrop}
        onClick={closeModal}
        aria-label="모달 닫기"
      />
      <div
        ref={modalRef}
        className={styles.modalContainer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={styles.modalContent}>
          <h2 id="modal-title" className={`${styles.modalTitle} heading-2-text`}>
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p id="modal-description" className={`${styles.modalDescription} body-text`}>
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
