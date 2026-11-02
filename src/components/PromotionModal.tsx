import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    // showModal()로 열면 바깥 영역이 inert 처리되어 포커스가 팝업 안에 머물고, Esc로 닫을 수 있다
    if (isOpen && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [isOpen]);

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.modalContainer}
      aria-labelledby="promotion-modal-title"
      aria-describedby="promotion-modal-description"
      onClose={() => setIsOpen(false)}
      onClick={handleBackdropClick}
    >
      <div className={styles.modalContent}>
        <h2 id="promotion-modal-title" className={`${styles.modalTitle} heading-2-text`}>
          여행할 땐 A11Y AIRLINE 앱
        </h2>
        <p id="promotion-modal-description" className={`${styles.modalDescription} body-text`}>
          체크인, 탑승권 저장, 수하물 알림까지
          <br />- 앱으로 더욱 편하게 여행하세요!
        </p>
        <button type="button" className={`${styles.modalActionButton} button-text`}>
          앱에서 열기
        </button>
        <button
          type="button"
          className={styles.modalCloseButton}
          onClick={closeModal}
          aria-label="팝업 닫기"
        >
          <img src={close} alt="" />
        </button>
      </div>
    </dialog>
  );
};

export default PromotionModal;
