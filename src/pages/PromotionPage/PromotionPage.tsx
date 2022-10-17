import './PromotionPage.css';

import { promotions } from '../../data';

import { usePromotion } from '../../hooks/usePromotion';

import PromotionCard from '../../components/PromotionCard/PromotionCard';

function PromotionPage() {
  const {
    buttonDisabled,
    promotionListRef,
    handleClickControlButton,
    handleScrollPromotionList,
  } = usePromotion();

  return (
    <div className='promotion-page'>
      <h1 className='promotion-header'>지금 떠나기 좋은 여행</h1>
      <div className='promotion-list-container'>
        <ul
          className='promotion-list'
          onScroll={handleScrollPromotionList}
          ref={promotionListRef}
        >
          {promotions.map((promotion) => (
            <PromotionCard key={promotion.id} {...promotion} />
          ))}
        </ul>
        <button
          className='control-button prev-button'
          disabled={buttonDisabled.prev}
          onClick={() => handleClickControlButton('prev')}
        >
          ＜
        </button>
        <button
          className='control-button next-button'
          disabled={buttonDisabled.next}
          onClick={() => handleClickControlButton('next')}
        >
          ＞
        </button>
      </div>
    </div>
  );
}

export default PromotionPage;
