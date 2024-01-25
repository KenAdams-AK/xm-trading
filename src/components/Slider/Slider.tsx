import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import EventSlide from "../../layout/EventSlide/EventSlide";

import "./Slider.scss";

const events = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Slider() {
  return (
    <div className="slider">
      <button className="slider__btn" type="button" aria-label="Previous">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <ul className="slider__list">
        {events.map((item) => (
          <li key={item} className="slider__item">
            <EventSlide />
          </li>
        ))}
      </ul>

      <button className="slider__btn" type="button" aria-label="Next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Slider;
