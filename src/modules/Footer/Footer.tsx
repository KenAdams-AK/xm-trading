import { Link } from "react-router-dom";

import TradeIcon from "../../assets/icons-footer/trading-point.png";
import BrandIcons from "../../layout/BrandIcons/BrandIcons";
import SocialIcons from "../../layout/SocialIcons/SocialIcons";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__desktop">
        <div className="footer__brands">
          <BrandIcons />
        </div>
        <div className="footer__social-icons">
          Follow us on
          <SocialIcons />
        </div>
      </div>
      <hr />
      <div className="footer__mobile">
        <nav className="footer__navbar navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="navbar__item">
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
            <li className="navbar__item">
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </nav>
        <div className="footer__trade-icon">
          <img src={TradeIcon} alt="trading-point" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
