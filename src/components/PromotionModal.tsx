import { useEffect, useRef } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby="promotion-title"
      aria-describedby="promotion-description"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return;

        // shortcut: 현재 포커스 대상은 버튼뿐임, 링크나 입력 필드 추가 시 선택자 확장
        const buttons = event.currentTarget.querySelectorAll('button');
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];

        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton.focus();
        }
      }}
      onClose={() => document.getElementById('main-content')?.focus()}
    >
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <button
            type="button"
            className={`${styles.modalCloseButton} heading-2-text`}
            aria-label="홍보 팝업 닫기"
            onClick={closeModal}
          >
            <img src={close} alt="" />
          </button>
          <h2 id="promotion-title" className={`${styles.modalTitle} heading-2-text`}>
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p id="promotion-description" className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          {/* shortcut: 실제 앱 URL이 없어 실행 버튼은 미연결, 앱 배포 시 링크 연결 */}
          <button type="button" className={`${styles.modalActionButton} button-text`}>
            앱에서 열기
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PromotionModal;
