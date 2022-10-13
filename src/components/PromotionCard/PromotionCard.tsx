import './PromotionCard.css';

import { addThousandUnitComma } from '../../utils';

interface PromotionCardProps {
  link: string;
  image: string;
  destination: string;
  lowestPrice: number;
  departure?: '서울/인천' | string;
  seat?: '일반석' | '프레스티지석';
  trip?: '왕복' | '편도';
}

function PromotionCard({
  link,
  image,
  destination,
  lowestPrice,
  departure = '서울/인천',
  seat = '일반석',
  trip = '왕복',
}: PromotionCardProps) {
  const handleClickPromotionCard = () => {
    window.open(link);
  };

  return (
    <li
      className='promotion-card'
      style={{ backgroundImage: `url(${image})` }}
      onClick={handleClickPromotionCard}
    >
      <div className='promotion-info'>
        <p className='promotion-route'>{`${departure} - ${destination}`}</p>
        <p className='promotion-flight'>{`${seat} ${trip}`}</p>
        <p className='promotion-price'>{`KRW ${addThousandUnitComma(
          lowestPrice
        )} ~`}</p>
      </div>
    </li>
  );
}

export default PromotionCard;
