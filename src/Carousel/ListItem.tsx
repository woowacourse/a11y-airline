import { forwardRef } from 'react';
import './ListItem.css';

type Props = {
  link: string;
  description: string;
  seat: string;
  price: string;
  img: string;
};

const ListItem = forwardRef<HTMLLIElement, Props>((item: Props, ref) => {
  const { link, img, description, seat, price } = item;

  return (
    <li className="list-item" ref={ref}>
      <a
        href={link}
        className="list-item-link"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <div>
            <img src={img} className="list-item-image" alt="" />
          </div>
          <div className="list-description">
            <p className="list-location" aria-label={description}>
              {description}
            </p>
            <p className="list-seat" aria-label={seat}>
              {seat}
            </p>
            <p className="list-price">
              <span aria-label={price}>{price}</span>
            </p>
          </div>
        </div>
      </a>
    </li>
  );
});

export default ListItem;
