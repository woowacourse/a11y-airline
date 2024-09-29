import { useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // keyCode 대신 key 사용
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <article className={styles.modal} role="dialog" aria-modal="true" aria-label="앱 설치 안내">
      {/* role로 이 영역이 모달임을 알리고, aria-modal로 접근성 트리에 이 영역만 표시! */}
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`} autoFocus tabIndex={0}>
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
          <button className={`${styles.modalCloseButton} heading-2-text`} onClick={closeModal}>
            <img src={close} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
