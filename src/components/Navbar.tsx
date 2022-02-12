import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="navbar__logo">Meaning</p>
      <ul className="navbar__items">
        <li className="navbar__item">
          <Link to={"/"} className="navbar__link">
            Dictionary
          </Link>
        </li>
        <li className="navbar__item">
          <Link to={"/card"} className="navbar__link">
            Flashcard
          </Link>
        </li>
        <li className="navbar__item">
          <button type="button" className="navbar__btn">
            Create Flashcard
          </button>
        </li>
      </ul>
    </nav>
  );
};
