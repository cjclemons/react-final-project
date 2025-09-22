import React from "react";
import RMR_logo from "../movie assets/RMR_logo.png";
import { Link, Links } from "react-router-dom";

const Nav = ({ homeRed, homeWhite, homeContact, searchWhite, searchContact }) => {
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
          <Link to="/s=keyword" className={`${homeWhite} ${searchWhite}`}>
            Rent your flick
          </Link>
        </li>
        <li className="nav__link">
          <Link to="#" className={`${homeContact} ${searchContact}`}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
