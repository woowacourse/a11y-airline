import { useEffect, useLayoutEffect, useRef } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import useElementId from '../hooks/useElementId';
import getFocusableElementList from '../utils/focusableElementListFinder';

interface PromotionModalProps {
  closePromotionModal: () => void;
}
const PromotionModal = ({ closePromotionModal }: PromotionModalProps) => {
  const modalRef = useRef<HTMLTableSectionElement | null>(null);
  const focusableElementList = useRef<NodeListOf<HTMLElement> | null>(null);
  const elementId = useElementId({ childrenNameList: ['description'] });

  const handleTabKey = (e: KeyboardEvent) => {
    if (!modalRef.current) return;
    if (e.code !== 'Tab') return;
    if (!focusableElementList.current) return;

    const firstFocusableEl = focusableElementList.current[0];
    const lastFocusableEl = focusableElementList.current[focusableElementList.current.length - 1];

    //마지막 요소 ->첫번째 요소로 이동
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      return firstFocusableEl.focus();
    }
  };

  const handleButtonKeydown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') closePromotionModal();
  };

  useLayoutEffect(() => {
    if (!modalRef.current) return;
    const list = getFocusableElementList({ targetElement: modalRef.current });

    focusableElementList.current = list;
  }, [modalRef]);

  useEffect(() => {
    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [modalRef, focusableElementList]);

  return (
    <section
      ref={modalRef}
      aria-modal="true"
      role="dialog"
      aria-labelledby={elementId.description}
      className={styles.modal}
    >
      <div className={styles.modalBackdrop} onClick={closePromotionModal}></div>
      <p id={elementId.description} className="visually-hidden">
        A11Y AIRLINE 앱에 대한 정보를 제공하는 웹 대화상자
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
            <span className="visually-hidden">닫기</span>
            <img src={close} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionModal;
