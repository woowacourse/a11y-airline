import { useEffect } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import { useFocusTrap } from '../hooks/useFocusTrap';

const PromotionModal = () => {
  const [dialogRef, firstFocusableRef, lastFocusableRef] = useFocusTrap<
    HTMLDialogElement,
    HTMLButtonElement,
    HTMLButtonElement
  >();

  const closeModal = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      id="promotion-dialog"
      ref={dialogRef}
      className={styles.modalContainer}
      aria-label="여행할 땐 A11Y AIRLINE 앱. 체크인, 탑승권 저장, 수하물 알림까지 앱으로 더욱 편하게 여행하세요."
    >
      <div className={styles.modalContent}>
        <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
        <p className={`${styles.modalDescription} body-text`}>
          체크인, 탑승권 저장, 수하물 알림까지 <br />- 앱으로 더욱 편하게 여행하세요!
        </p>
        <button ref={firstFocusableRef} className={`${styles.modalActionButton} button-text`}>
          앱에서 열기
        </button>
        <button
          ref={lastFocusableRef}
          className={`${styles.modalCloseButton} heading-2-text`}
          onClick={closeModal}
          aria-label="앱 전환 대화상자 닫기"
        >
          <img src={close} alt="" />
        </button>
      </div>
    </dialog>
  );
};

export default PromotionModal;
