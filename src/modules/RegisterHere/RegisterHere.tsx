import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./RegisterHere.scss";

function RegisterHere() {
  return (
    <section className="register-here">
      <h3 className="register-here__title">&#45; Register Here &#45;</h3>
      <div className="register-here__subtitle">
        Join us to celebrate our biggest night of the year.
      </div>
      <div className="register-here__info info">
        <div className="info__item">
          <FontAwesomeIcon icon={faCalendarCheck} />
          <div className="info__text">05 NOVEMBER 2022</div>
        </div>
        <div className="info__item">
          <FontAwesomeIcon icon={faClock} />
          <div className="info__text">16:00 – 23:00</div>
        </div>
        <div className="info__item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <div className="info__text">
            Centara Grand & Bangkok Convention Centre, Bangkok
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterHere;
