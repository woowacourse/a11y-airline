import { useEffect, useRef } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import useElementId from '../hooks/useElementId';

interface PromotionModalProps {
  closePromotionModal: () => void;
}
const PromotionModal = ({ closePromotionModal }: PromotionModalProps) => {
  const modalRef = useRef<HTMLTableSectionElement | null>(null);
  const elementId = useElementId({ childrenNameList: ['description'] });

  const handleTabKey = (e: KeyboardEvent) => {
    if (!modalRef.current) return;
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (e.code !== 'Tab') return;

    // 첫번째 요소로 이동
    if (
      document.activeElement?.tagName === 'BODY' ||
      document.activeElement === lastFocusableElement
    ) {
      e.preventDefault();
      return firstFocusableElement.focus(); // 첫 번째 요소로 이동
    }

    // Shift + Tab (이전 요소로 이동)
    if (e.shiftKey && document.activeElement === firstFocusableElement) {
      e.preventDefault();
      lastFocusableElement.focus(); // 마지막 요소로 이동
      return;
    }
  };

  const handleButtonKeydown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') closePromotionModal();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [modalRef]);

  return (
    <section
      ref={modalRef}
      aria-modal="true"
      role="dialog"
      aria-label="A11Y AIRLINE 앱에 대한 정보 제공 모달"
      aria-describedby={elementId.description}
      className={styles.modal}
    >
      <div className={styles.modalBackdrop} onClick={closePromotionModal}></div>
      <p aria-live="assertive" id={elementId.description} className="screen-only">
        A11Y AIRLINE 앱에 대한 정보 제공 모달이 열렸습니다.
      </p>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
          <p className={`${styles.modalDescription} body-text`}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button type="button" className={`${styles.modalActionButton} button-text`}>
            앱에서 열기
          </button>
          <button
            type="button"
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closePromotionModal}
            onKeyDown={handleButtonKeydown}
          >
            <span className="screen-only">닫기</span>
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionModal;
