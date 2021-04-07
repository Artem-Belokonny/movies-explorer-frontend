import React from "react";
import landingLogo from "../../images/landing-logo.svg";
import "../Promo/Promo.css";

function Promo() {
  return (
    <section className="promo">
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
