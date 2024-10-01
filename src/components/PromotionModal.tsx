import React, { useRef } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import FocusTrap from './FocusTrap';

const PromotionModal = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <FocusTrap onEscapeFocusTrap={closeModal}>
      <div className={styles.modal} tabIndex={0} role="dialog" aria-modal="true">
        <div className={styles.modalBackdrop} onClick={closeModal}></div>
        <div className={styles.modalContainer}>
          <div className={styles.modalContent} ref={modalRef}>
            <h2 className={`${styles.modalTitle} heading-2-text`} id="modal-title">
              여행할 땐 A11Y AIRLINE 앱
            </h2>
            <p className={`${styles.modalDescription} body-text`} id="modal-description">
              체크인, 탑승권 저장, 수하물 알림까지
              <br />- 앱으로 더욱 편하게 여행하세요!
            </p>
            <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>

            <button
              className={`${styles.modalCloseButton} heading-2-text`}
              onClick={closeModal}
              aria-label="모달 끄기"
            >
              <img src={close} alt="모달 끄기 버튼" />
            </button>
          </div>
        </div>

        <div role="alert" aria-live="assertive" className="visually-hidden">
          {isOpen ? '팝업이 열렸습니다.' : ''}
        </div>
      </div>
    </FocusTrap>
  );
};

export default PromotionModal;
