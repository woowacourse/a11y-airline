import { forwardRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = forwardRef<HTMLDivElement, object>(function (_props, ref) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div ref={ref} className={styles.modal} aria-live="polite">
      <div> A11y airline 앱 홍보 팝업</div>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
            aria-label="팝업 닫기"
          >
            <img src={close} />
          </button>
          <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
        </div>
      </div>
    </div>
  );
});

export default PromotionModal;
