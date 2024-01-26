import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ICONS } from "../../components/CryptoList/icons";

import "./CryptoCard.scss";

type Props = {
  name: string;
  symbol: string;
  price: string;
  change: string;
};

function CryptoCard({
  name = "Bitcoin",
  symbol = "BTN",
  price = "87,193.00",
  change = "12.95",
}: Partial<Props>) {
  const isNegative = change.startsWith("-");

  return (
    <div className="crypto-card">
      <div className="crypto-card__head">
        <div className="crypto-card__icon">
          <img src={ICONS[name as keyof typeof ICONS]} alt={name} />
        </div>
        <div className="crypto-card__symbol">{symbol}</div>
        <div className="crypto-card__name">{name}</div>
      </div>
      <hr />
      <div className="crypto-card__price">${price}</div>
      <div
        className={`crypto-card__change ${isNegative && "crypto-card__change--negative"}`}
      >
        <FontAwesomeIcon icon={isNegative ? faChevronDown : faChevronUp} />
        {change}%
      </div>
    </div>
  );
}

export default CryptoCard;
