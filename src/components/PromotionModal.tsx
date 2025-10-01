import { useState, useEffect, useRef } from 'react';

import close from '../assets/close.svg';

import styles from './PromotionModal.module.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      const skipLink = document.querySelector('a[href="#main-content"]') as HTMLElement;
      if (skipLink) {
        skipLink.focus();
      }
    }, 0);
  };

  // 모달이 열릴 때 포커스를 모달로 이동
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  // 포커스 트랩: Tab/Shift+Tab 시 모달 내부에서만 순환
  useEffect(() => {
    if (!isOpen) return;
    const container = modalRef.current;
    if (!container) return;

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusableSelector =
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const focusableElements = Array.from(
        container.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((el) => !el.hasAttribute('hidden') && el.getAttribute('aria-hidden') !== 'true');

      if (focusableElements.length === 0) {
        container.focus();
        e.preventDefault();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const active = document.activeElement;

      // Tab 순환 로직 개선
      if (e.shiftKey) {
        // Shift + Tab: 역방향
        if (active === first || active === container) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab: 정방향
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener('keydown', keydownHandler);
    return () => container.removeEventListener('keydown', keydownHandler);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div
        className={styles.modalContainer}
        role="dialog"
        aria-modal="true"
        aria-label="프로모션 모달"
        tabIndex={-1}
        ref={modalRef}
      >
        <div className={styles.modalContent}>
          <header>
            <h2 className={`${styles.modalTitle} heading-2-text`}>여행할 땐 A11Y AIRLINE 앱</h2>
          </header>
          <section>
            <p className={`${styles.modalDescription} body-text`}>
              체크인, 탑승권 저장, 수하물 알림까지
              <br />- 앱으로 더욱 편하게 여행하세요!
            </p>
          </section>
          <footer>
            <button className={`${styles.modalActionButton} button-text`}>앱에서 열기</button>
            <button
              className={`${styles.modalCloseButton} heading-2-text`}
              onClick={closeModal}
              aria-label="모달 닫기"
            >
              <img src={close} alt="" />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
