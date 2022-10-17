import { useRef } from 'react';

import './PromotionPage.css';

import { promotions } from '../../data';

import { PROMOTION } from '../../constants';

import PromotionCard from '../../components/PromotionCard/PromotionCard';

function PromotionPage() {
  const promotionListRef = useRef<HTMLUListElement>(null);

  const handleClickControlButton = (direction: string) => {
    const promotionList = promotionListRef.current;

    if (!(promotionList instanceof HTMLUListElement)) return;

    const offset =
      direction === 'prev' ? -PROMOTION.MOVE_OFFSET : PROMOTION.MOVE_OFFSET;

    promotionList.scrollBy({
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
          onClick={() => handleClickControlButton('prev')}
        >
          ＜
        </button>
        <button
          className='control-button next-button'
          onClick={() => handleClickControlButton('next')}
        >
          ＞
        </button>
      </div>
    </div>
  );
}

export default PromotionPage;
