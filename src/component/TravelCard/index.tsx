import "./index.css";

interface TravelCardProps {
  src: string;
  alt: string;
  href: string;
  title: string;
  option?: string;
  lowestPrice: string;
}

const TravelCard = ({
  src,
  alt,
  href,
  title,
  option = "일반석 왕복",
  lowestPrice,
}: TravelCardProps) => {
  return (
    <li className="travel-card-list">
      <a className="link" href={href}>
        <div>
          <img className="item-img" src={src} alt={alt} />
        </div>
        <div className="text-info">
          <p className="title">{title}</p>
          <p className="option">{option}</p>
          <p className="lowestPrice">
            KRW {lowestPrice} <span aria-hidden>~</span>
          </p>
        </div>
      </a>
    </li>
  );
};

export default TravelCard;
