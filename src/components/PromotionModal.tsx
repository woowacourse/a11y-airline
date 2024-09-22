import { useState } from 'react';

import close from '../assets/close.svg';

import './PromotionModal.css';

const PromotionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`modal ${isOpen ? 'modal--open' : ''}`}>
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="modal-content">
          <h2 className="modal-title heading-2-text">여행할 땐 A11Y AIRLINE 앱</h2>
          <p className="modal-description body-text">
            체크인, 탑승권 저장, 수하물 알림까지
            <br />- 앱으로 더욱 편하게 여행하세요!
          </p>
          <button className="modal-action-button button-text">앱에서 열기</button>
          <button className="modal-close-button heading-2-text" onClick={closeModal}>
            <img src={close} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
