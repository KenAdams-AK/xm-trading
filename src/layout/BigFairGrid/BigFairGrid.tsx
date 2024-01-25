import { ICONS } from "./icons";

import "./BigFairGrid.scss";

const cardsData = [
  {
    title: "Authorised and Regulated",
    text: "At XM, we adhere to all regulatory standards and are fully authorised and regulated by FSC.",
    icon: ICONS.authorised,
  },
  {
    title: "Committed and Fair",
    text: "We operate with complete transparency and adhere to the highest professional and ethical standards.",
    icon: ICONS.committed,
  },
  {
    title: "Multi-Award-Winning",
    text: "Over the years we have received over 40 awards for the quality of our products and services.",
    icon: ICONS.award,
  },
  {
    title: "24/7 Support",
    text: "Our support agents are on hand 24/7 to answer your questions or assist you with any issues.",
    icon: ICONS.support,
  },
];

function BigFairGrid() {
  return (
    <div className="big-fair-grid">
      {cardsData.map(({ title, text, icon }) => {
        return (
          <div key={title} className="big-fair-grid__card">
            <div className="big-fair-grid__icon">
              <img src={icon} alt={title} />
            </div>
            <h4 className="big-fair-grid__title">{title}</h4>
            <div className="big-fair-grid__text">{text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BigFairGrid;
