import WhyTradeGrid from "../../layout/WhyTradeGrid/WhyTradeGrid";
import { bgImages } from "./bg-images";

import "./WhyTrade.scss";

function WhyTrade() {
  return (
    <section className="why-trade">
      <h1 className="why-trade__title">
        Why <span>Trade</span> with XM?
      </h1>

      <hr className="why-trade__hr hr" />

      <p className="why-trade__text">
        We have been providing traders around the world with the same{" "}
        <span>premium experience</span> for over a decade. As an{" "}
        <span>industry-leader,</span> we know what the modern trader needs to be{" "}
        <span>successful</span> in the markets.
      </p>

      <WhyTradeGrid />

      {bgImages.map(({ modifier, src, alt }) => (
        <div
          className={`why-trade__bg-img-wrapper why-trade__bg-img-wrapper--${modifier}`}
          key={src}
        >
          <img src={src} alt={alt} />
        </div>
      ))}
    </section>
  );
}

export default WhyTrade;
