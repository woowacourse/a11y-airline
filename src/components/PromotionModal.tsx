import { useEffect, useRef, useState } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';
import getFocusableElementList from '../utils/getFocusableElementList';
import isPressedKey from '../utils/isPressedKey';
import getActiveElement from '../utils/getActiveElement';

type PromotionModalProps = {
  closeModal: () => void;
  isOpen: boolean;
};

const PromotionModal = ({ isOpen, closeModal }: PromotionModalProps) => {
  const modalRef = useRef<HTMLAnchorElement | null>(null);

  const handleEnterKeyDown = () => {
    closeModal();
  };

  const handleKeyDown = (event: KeyboardEvent, focusableElementList: NodeListOf<HTMLElement>) => {
    const { key } = event;

    if (isPressedKey(key, 'Escape')) {
      handleEnterKeyDown();
      return;
    }

    if (!isPressedKey(key, 'Tab')) return;

    const firstFocusableElement = focusableElementList[0];
    const lastFocusableElement = focusableElementList[focusableElementList.length - 1];

    const activeElement = getActiveElement();
    const currentElementIndex = [...focusableElementList].indexOf(activeElement!);

    if (event.shiftKey) {
      // shift도 함께 눌렸다면
      if (activeElement === firstFocusableElement || currentElementIndex === -1) {
        event.preventDefault();
        lastFocusableElement.focus(); // 첫 번째 요소에서 Shift + Tab을 누르면 마지막 요소로
      } else {
        const prevIndex = [...focusableElementList].indexOf(activeElement!);
        event.preventDefault();
        focusableElementList[prevIndex - 1].focus(); // 이전 요소로 포커스 이동
      }
    } else {
      const activeElement = document.activeElement as HTMLElement | null;
      const currentIndex = [...focusableElementList].indexOf(activeElement!);

      if (activeElement === lastFocusableElement || currentIndex == -1) {
        event.preventDefault();
        firstFocusableElement.focus(); // 마지막 요소에서 Tab을 누르면 첫 번째 요소로
      } else {
        // 0또는 무언가로 잡혔다면
        const nextIndex = [...focusableElementList].indexOf(activeElement!) + 1;
        event.preventDefault();
        focusableElementList[nextIndex].focus(); // 다음 요소로 포커스 이동
      }
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const focusableElementList = getFocusableElementList(modalRef);

    if (!focusableElementList) return;

    window.addEventListener('keydown', (e) => handleKeyDown(e, focusableElementList));

    return () =>
      window.removeEventListener('keydown', (e) => handleKeyDown(e, focusableElementList));
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <article
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-label="앱 설치 안내"
      id="dialogPopup"
      tabIndex={0}
    >
      {/* role로 이 영역이 모달임을 알리고, aria-modal로 접근성 트리에 이 영역만 표시! */}
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <h2 className={`${styles.modalTitle} heading-2-text`} autoFocus tabIndex={0}>
            여행할 땐 A11Y AIRLINE 앱
          </h2>
          <p className={`${styles.modalDescription} body-text`} tabIndex={0}>
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
          <button
            className={`${styles.modalCloseButton} heading-2-text`}
            onClick={closeModal}
            aria-label="닫기"
          >
            <img src={close} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PromotionModal;
