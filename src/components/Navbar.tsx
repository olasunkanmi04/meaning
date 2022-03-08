import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/icons/menu.svg";
import menuClose from "../assets/icons/menu-close.svg";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar__wrap">
        <p className="navbar__logo">
          <Link to={"/"}>Meaning</Link>
        </p>
        <button
          className="navbar__menu"
          onClick={() => {
            toggleMenu();
          }}
        >
          {!showMenu && <img src={menu} alt="menu" />}
          {showMenu && <img src={menuClose} alt="close menu" />}
        </button>
        <ul className={showMenu ? "show navbar__items" : "navbar__items"}>
          <li className="navbar__item">
            <Link
              to={"/"}
              onClick={() => {
                setShowMenu(false);
              }}
              className="navbar__link"
            >
              Dictionary
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to={"/card"}
              onClick={() => {
                setShowMenu(false);
              }}
              className="navbar__link"
            >
              Flashcard
            </Link>
          </li>
          <li className="navbar__item">
            <button type="button" className="cta_btn navbar__btn">
              Create Flashcard
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
