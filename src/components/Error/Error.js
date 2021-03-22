import React from "react";
import { Link } from "react-router-dom";
import "../Error/Error.css";

function Error({ link = "#" }) {
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <h2 className="error__subtitle">Страница не найдена</h2>
      </div>
      <p className="error__text">
        <Link to={link} className="error__link">
          Назад
        </Link>
      </p>
    </div>
  );
}

export default Error;
