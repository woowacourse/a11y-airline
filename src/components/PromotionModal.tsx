import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const closeOnBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
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
      className={styles.modal}
      aria-labelledby="promotion-modal-title"
      onClose={() => setIsOpen(false)}
      onClick={closeOnBackdropClick}
    >
      <div className={styles.modalContent}>
        <h2 id="promotion-modal-title" className={`${styles.modalTitle} heading-2-text`}>
          여행할 땐 A11Y AIRLINE 앱
        </h2>
        <p className={`${styles.modalDescription} body-text`}>
          체크인, 탑승권 저장, 수하물 알림까지
          <br />- 앱으로 더욱 편하게 여행하세요!
        </p>
        <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
        <button className={`${styles.modalCloseButton} heading-2-text`} onClick={closeModal}>
          <img src={close} alt="닫기" />
        </button>
      </div>
    </dialog>
  );
};

export default PromotionModal;
