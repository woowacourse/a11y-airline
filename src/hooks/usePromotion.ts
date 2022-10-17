import { useRef, useState } from 'react';

import { PROMOTION } from '../constants';

function usePromotion() {
  const promotionListRef = useRef<HTMLUListElement>(null);

  const [buttonDisabled, setButtonDisabled] = useState({
    prev: true,
    next: false,
  });

  const handleClickControlButton = (direction: string) => {
    const promotionList = promotionListRef.current;

    if (!(promotionList instanceof HTMLUListElement)) return;

    const offset =
      direction === 'prev' ? -PROMOTION.MOVE_OFFSET : PROMOTION.MOVE_OFFSET;

    promotionList.scrollBy({
      left: offset,
      behavior: 'smooth',
    });

    setButtonDisabled({
      prev: !(promotionList.scrollLeft + offset),
      next:
        promotionList.scrollLeft + offset ===
        promotionList.scrollWidth - promotionList.offsetWidth,
    });
  };

  const handleScrollPromotionList = () => {
    const promotionList = promotionListRef.current;

    if (!(promotionList instanceof HTMLUListElement)) return;

    setButtonDisabled({
      prev: !promotionList.scrollLeft,
      next:
        promotionList.scrollLeft ===
        promotionList.scrollWidth - promotionList.offsetWidth,
    });
  };

  return {
    buttonDisabled,
    promotionListRef,
    handleClickControlButton,
    handleScrollPromotionList,
  };
}

export { usePromotion };
