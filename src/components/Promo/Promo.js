import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import landingLogo from "../../images/landing-logo.svg";
import "../Promo/Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__header-container">
        <a href="/" className="promo__logo-link">
          <img src={logo} alt="Логотип" className="promo__logo" />
        </a>
        <div className="promo__auth-container">
          <Link to="/signup" className="promo__link">
            Регистрация
          </Link>
          <Link to="/signin" className="promo__link promo__link_login">
            Войти
          </Link>
        </div>
      </div>
      <div className="promo__container">
        <img src={landingLogo} alt="Логотип" className="promo__landing-logo" />
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
