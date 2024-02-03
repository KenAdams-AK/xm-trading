import { faCaretRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./RegistrationBanner.scss";

function RegistrationBanner() {
  return (
    <div className="registration-banner">
      <div className="registration-banner__head">
        <FontAwesomeIcon icon={faCheckCircle} />
        <h5 className="registration-banner__title">Registration successful</h5>
      </div>
      <div className="registration-banner__text">
        <FontAwesomeIcon icon={faCaretRight} />
        Thank you for registering for our event with XM. You will receive an
        email shortly with confirmation of your registration.
      </div>
    </div>
  );
}

export default RegistrationBanner;
