import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import { useFocusTrap } from '../hooks/useFocusTrap';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(modalRef);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div role="status" aria-live="assertive" className="visually-hidden">
        프로모션 모달이 열렸습니다.
      </div>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promotion-modal-title"
        aria-describedby="promotion-modal-description"
      >
        <div aria-hidden="true" className={styles.modalBackdrop} onClick={closeModal}></div>
        <div ref={modalRef} className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h2 id="promotion-modal-title" className={`${styles.modalTitle} heading-2-text`}>
              여행할 땐 A11Y AIRLINE 앱
            </h2>
            <p className={`${styles.modalDescription} body-text`}>
              체크인, 탑승권 저장, 수하물 알림까지
              <br />- 앱으로 더욱 편하게 여행하세요!
            </p>
            <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
            <button
              aria-label="프로모션 모달 닫기"
              className={`${styles.modalCloseButton} heading-2-text`}
              onClick={closeModal}
            >
              <img src={close} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionModal;
