import { useRef } from 'react';

import './PromotionPage.css';

import { promotions } from '../../data';

import { PROMOTION } from '../../constants';

import PromotionCard from '../../components/PromotionCard/PromotionCard';

function PromotionPage() {
  const promotionListRef = useRef<HTMLUListElement>(null);

  const offset = (PROMOTION.CARD_WIDTH + PROMOTION.CARD_GAP) * 4;

  const handleClickPrevButton = () => {
    if (!(promotionListRef.current instanceof HTMLUListElement)) return;

    promotionListRef.current.scrollBy({
      left: -offset,
      behavior: 'smooth',
    });
  };

  const handleClickNextButton = () => {
    if (!(promotionListRef.current instanceof HTMLUListElement)) return;

    promotionListRef.current.scrollBy({
      left: offset,
      behavior: 'smooth',
    });
  };

  return (
    <div className='promotion-page'>
      <h1 className='promotion-header'>지금 떠나기 좋은 여행</h1>
      <div className='promotion-list-container'>
        <ul className='promotion-list' ref={promotionListRef}>
          {promotions.map((promotion) => (
            <PromotionCard key={promotion.id} {...promotion} />
          ))}
        </ul>
        <button
          className='control-button prev-button'
          aria-label='이전'
          onClick={handleClickPrevButton}
        >
          ＜
        </button>
        <button
          className='control-button next-button'
          aria-label='다음'
          onClick={handleClickNextButton}
        >
          ＞
        </button>
      </div>
    </div>
  );
}

export default PromotionPage;
