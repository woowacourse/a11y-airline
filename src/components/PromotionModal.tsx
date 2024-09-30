import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import close from '../assets/close.svg';
import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const openAppButtonRef = useRef<HTMLButtonElement>(null);
  const closeModalButtonRef = useRef<HTMLButtonElement>(null);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && openAppButtonRef.current) {
      openAppButtonRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (!modalRef.current || !openAppButtonRef.current || !closeModalButtonRef.current) {
      return;
    }

    if (event.key === 'Escape') {
      closeModal();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const openAppButton = openAppButtonRef.current;
    const closeModalButton = closeModalButtonRef.current;

    if (event.shiftKey && document.activeElement === openAppButton) {
      event.preventDefault();
      closeModalButton.focus();

      return;
    }

    if (!event.shiftKey && document.activeElement === closeModalButton) {
      event.preventDefault();
      openAppButton.focus();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} ref={modalRef} onKeyDown={handleKeyDown}>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div
        className={styles.modalContainer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className={styles.modalContent}>
          <h2 id="modalTitle" className={`${styles.modalTitle} heading-2-text`}>
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button ref={openAppButtonRef} className={`${styles.modalActionButton} button-text`}>
            앱에서 열기
          </button>
          <button
            ref={closeModalButtonRef}
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
