import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SocialIcons.scss";

function SocialIcons() {
  return (
    <>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="social-icon"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="social-icon"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="social-icon"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="social-icon"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="social-icon"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </>
  );
}

export default SocialIcons;
