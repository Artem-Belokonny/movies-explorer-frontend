import React from "react";
import "../PromoHeader/PromoHeader.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="promo-header">
      <div className="promo-header__container">
        <a href="/" className="promo-header__link">
          <img src={logo} alt="Логотип" className="promo-header__logo" />
        </a>
        <div className="promo-header__auth-container">
          <Link to="/signup" className="promo-header__link">
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="promo-header__link promo-header__link_login"
          >
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
