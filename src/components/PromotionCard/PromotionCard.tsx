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
  return (
    <a
      rel='noreferrer'
      href={link}
      target='_blank'
      className='promotion-card-link'
    >
      <li
        className='promotion-card'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='promotion-info'>
          <p className='promotion-route'>{`${departure} - ${destination}`}</p>
          <p className='promotion-flight'>{`${seat} ${trip}`}</p>
          <p className='promotion-price'>{`KRW ${addThousandUnitComma(
            lowestPrice
          )} ~`}</p>
        </div>
      </li>
    </a>
  );
}

export default PromotionCard;
