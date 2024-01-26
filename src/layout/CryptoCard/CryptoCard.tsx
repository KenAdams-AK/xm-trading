import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ICONS } from "../../components/CryptoList/icons";

import "./CryptoCard.scss";

type Props = {
  name: string;
  symbol: string;
  price: number | string;
  change: number | string;
};

function CryptoCard({
  name = "Bitcoin",
  symbol = "BTN",
  price = "$87,193.00",
  change = "12.95%",
}: Partial<Props>) {
  return (
    <div className="crypto-card">
      <div className="crypto-card__head">
        <div className="crypto-card__icon">
          <img src={ICONS[name as keyof typeof ICONS]} alt={name} />
        </div>
        <div className="crypto-card__abbr">{symbol}</div>
        <div className="crypto-card__name">{name}</div>
      </div>
      <hr />
      <div className="crypto-card__price">{price}</div>
      <div className="crypto-card__change">
        <FontAwesomeIcon icon={faChevronUp} />
        {change}
      </div>
    </div>
  );
}

export default CryptoCard;
