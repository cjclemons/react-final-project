import React from "react";
import RMR_logo from "../movie assets/RMR_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({
  homeRed,
  homeWhite,
  homeContact,
  searchWhite,
  searchContact,
}) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  
  return (
    <div className="nav">
      <figure>
        <img src={RMR_logo} className="homepage__logo" alt="" />
      </figure>
      <ul className="nav__links">
        <li className="nav__link">
          <Link to="/" className={`${homeRed} ${searchWhite}`}>
            Home
          </Link>
        </li>
        <li className="nav__link">
          <Link
            to={`/s/${localStorage.getItem("lastKeyword") || ""}`}
            className={`${homeWhite} ${searchWhite}`}
          >
            Rent your flick
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#" className={`${homeContact} ${searchContact}`}>
            Contact
          </Link>
        </li> 
      </ul>
      <button className="btn__menu" onClick={openMenu}>
        <FontAwesomeIcon icon="bars" />
      </button>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link
              to={`/s/${localStorage.getItem("lastKeyword") || ""}`}
              className="menu__link" onClick={closeMenu}
            >
              Rent your flick
            </Link>
          </li>
          <li className="menu__list">
            <Link to="#" className="menu__link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
