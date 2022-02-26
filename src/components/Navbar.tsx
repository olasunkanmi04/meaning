import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/icons/menu.svg";
import menuClose from "../assets/icons/menu-close.svg";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__wrap">
        <p className="navbar__logo">Meaning</p>
        <button
          className="navbar__menu"
          onClick={() => {
            showMenu ? setShowMenu(false) : setShowMenu(true);
          }}
        >
          {!showMenu && <img src={menu} alt="menu" />}
          {showMenu && <img src={menuClose} alt="close menu" />}
        </button>
        <ul className={showMenu ? "show navbar__items" : "navbar__items"}>
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
      </div>
    </nav>
  );
};
