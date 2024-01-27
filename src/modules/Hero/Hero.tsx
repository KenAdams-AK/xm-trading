import { useMediaQuery } from "react-responsive";
import { bgImagesMobileOnly, bgImages } from "./bg-images";
import Button from "../../layout/Button/Button";
import TermsAndConditions from "../../layout/TermsAndConditions/TermsAndConditions";

import "./Hero.scss";

function Hero() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__title">
          <span className="first-line">trade with</span>
          <br />
          <span className="highlight">Zero Swaps</span> on All XM Ultra Low
          Accounts for more than 25 instruments!
        </h2>

        <p className="hero__text">
          Enjoy spreads <span>as low as 0.6 pips</span> and{" "}
          <span>leverage up to 1000:1</span> on instruments like{" "}
          <span>EURUSD, USDJPY, EURJPY, GBPUSD,</span> and <span>Gold.</span>
        </p>

        <Button type="button">open account</Button>

        <div className="hero__demo">
          New to trading? Try a <a href="#!">Demo account.</a>
        </div>

        <TermsAndConditions />
      </div>

      {bgImagesMobileOnly.map(({ modifier, src, alt }) => (
        <div
          className={`hero__bg-img-wrapper hero__bg-img-wrapper--${modifier}`}
          key={src}
        >
          <img src={src} alt={alt} />
        </div>
      ))}

      {!isMobile &&
        bgImages.map(({ modifier, src, alt }) => (
          <div
            className={`hero__bg-img-wrapper hero__bg-img-wrapper--${modifier}`}
            key={src}
          >
            <img src={src} alt={alt} loading="lazy" decoding="async" />
          </div>
        ))}
    </section>
  );
}

export default Hero;
