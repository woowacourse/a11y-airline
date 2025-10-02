import { useState, useEffect, useRef } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import useEscapeClose from '../hooks/useEscapeClose';
import FocusTrap from '../hooks/FocusTrap';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEscapeClose(closeModal);

  // 모달 열릴 때 포커스를 dialog로 이동
  useEffect(() => {
    if (isOpen && modalContentRef.current) {
      modalContentRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <FocusTrap>
        <div className={styles.modalBackdrop} onClick={closeModal}></div>
        <div className={styles.modalContainer}>
          <div
            ref={modalContentRef}
            className={styles.modalContent}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            aria-labelledby="promotion-modal-title"
            aria-describedby="promotion-modal-desc"
          >
            <h2 id="promotion-modal-title" className={`${styles.modalTitle} heading-2-text`}>
              여행할 땐 A11Y AIRLINE 앱
            </h2>
            <p id="promotion-modal-desc" className={`${styles.modalDescription} body-text`}>
              체크인, 탑승권 저장, 수하물 알림까지
              <br />- 앱으로 더욱 편하게 여행하세요!
            </p>
            <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
            <button
              className={`${styles.modalCloseButton} heading-2-text`}
              onClick={closeModal}
              aria-label="닫기"
            >
              <img src={close} alt="" />
            </button>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
};

export default PromotionModal;
