import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <nav className="header__navbar navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/">XM Homepage</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/support">Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
