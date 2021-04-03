import React from "react";
import { useHistory } from "react-router-dom";
import "../Error/Error.css";

function Error() {
  const history = useHistory();
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <h2 className="error__subtitle">Страница не найдена</h2>
      </div>
      <p onClick={history.goBack} className="error__text">
        Назад
      </p>
    </div>
  );
}

export default Error;
