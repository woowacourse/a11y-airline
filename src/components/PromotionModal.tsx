import { useEffect, useRef } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

// showModal()이 포커스 이동·배경 inert(포커스 트랩)·Esc 닫기·닫힌 뒤 포커스 복귀를 기본으로 처리한다
const PromotionModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.modalContainer}
      aria-labelledby="promotion-modal-title"
      // 콘텐츠 바깥(::backdrop)을 클릭하면 target이 dialog 자신이다
      onClick={(event) => event.target === event.currentTarget && closeModal()}
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
