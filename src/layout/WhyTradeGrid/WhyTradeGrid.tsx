import { ICONS } from "./icons";

import "./WhyTradeGrid.scss";

const cardsData = [
  {
    title: "Superior Trade Execution",
    text: "99% of trades are executed in less than a second, with no requotes or rejections.",
    icon: ICONS["fast-execusion"],
  },
  {
    title: "Competitive Pricing",
    text: "We offer some of the lowest spreads and we don’t charge commissions.",
    icon: ICONS["competitive-pricing"],
  },
  {
    title: "Advanced Technology",
    text: "Trade on MT4 or MT5, with expert tools, across desktop, web and mobile.",
    icon: ICONS.tech,
  },
  {
    title: "Start with $5",
    text: "Start trading your preferred instruments with as little as a $5 minimum deposit.",
    icon: ICONS.dollar,
  },
];

function WhyTradeGrid() {
  return (
    <div className="why-trade-grid">
      {cardsData.map(({ title, text, icon }) => {
        return (
          <div key={title} className="why-trade-grid__card">
            <div className="why-trade-grid__head">
              <div className="why-trade-grid__title">{title}</div>
              <div className="why-trade-grid__icon">
                <img src={icon} alt={title} />
              </div>
            </div>

            <hr className="why-trade-grid__hr hr" />

            <div className="why-trade-grid__text">{text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default WhyTradeGrid;
