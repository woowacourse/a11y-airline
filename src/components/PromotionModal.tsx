import { useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import { useKeyDown } from '../hooks/useKeyDown/useKeyDown';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll/useLockBodyScroll';
import { useOutsideClick } from '../hooks/useOutsideClick/useOutsideClick';
import { useFocusTrap } from '../hooks/useFocusTrap/useFocusTrap';
import { useFocusReturn } from '../hooks/useFocusReturn/useFocusReturn';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const returnFocus = useFocusReturn({ opened: isOpen });
  const closeModal = () => {
    setIsOpen(false);
    returnFocus();
  };

  useKeyDown({
    Escape: closeModal
  });
  const addToSafeZone = useOutsideClick(closeModal);

  useLockBodyScroll(isOpen);

  const modalRef = useFocusTrap(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.modal}
      tabIndex={-1}
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className={styles.modalContainer} ref={addToSafeZone}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`} id="modal-title">
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p className={`${styles.modalDescription} body-text`} id="modal-description">
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button
            type="button"
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
            aria-label="프로모션 모달 닫기"
          >
            <img src={close} alt="" />
          </button>
          <button type="button" className={`${styles.modalActionButton} button-text`}>
            앱에서 열기
          </button>
        </div>
      </div>
      <div className={styles.modalBackdrop} />
    </div>
  );
};

export default PromotionModal;
