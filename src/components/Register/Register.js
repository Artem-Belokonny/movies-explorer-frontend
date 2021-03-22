import React from "react";
import Welcome from "../Welcome/Welcome.js";
import { withRouter, Link } from "react-router-dom";
import "../Register/Register.css";

function Register() {
  return (
    <>
      <Welcome
        name="register"
        title="Добро пожаловать!"
        textBtn="Зарегистрироваться"
        childrenInput={
          <>
            <p className="register__subtext">Имя</p>
            <input
              className="welcome__input"
              type="text"
              name="name"
              required
              placeholder="Имя"
              id="name"
              minlength="2" 
              maxlength="30"
            />
            <p className="register__subtext">E-mail</p>
            <input
              className="welcome__input"
              type="email"
              name="email"
              required
              placeholder="Email"
              id="email"
            />
            <p className="register__subtext">Пароль</p>
            <input
              className="welcome__input"
              type="password"
              name="password"
              required
              placeholder="Пароль"
              id="password"
              minlength="2" 
              maxlength="20"
            />
          </>
        }
        childrenSubtitle={
          <span className="welcome__subtitle">
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="welcome__subtitle-link">
              Войти
            </Link>
          </span>
        }
      />
    </>
  );
}

export default withRouter(Register);
