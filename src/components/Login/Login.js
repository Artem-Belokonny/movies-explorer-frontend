import React from "react";
import Welcome from "../Welcome/Welcome.js";
import { withRouter, Link } from 'react-router-dom';
import '../Login/Login.css';

function Login() {
  return (
    <>
      <Welcome
        name="login"
        title="Рады видеть!"
        textBtn="Войти"
        childrenInput={
          <>
						<p className="login__subtext">E-mail</p>
            <input
              className="welcome__input"
              type="email"
              name="email"
              required
              placeholder="Email"
            />
						<p className="login__subtext">Пароль</p>
            <input
              className="welcome__input"
              type="password"
              name="password"
              required
              placeholder="Пароль"
              minlength="2" 
              maxlength="20"
            />
          </>
        }
				childrenSubtitle={
          <span className="welcome__subtitle">
            Еще не зарегистрированы?{" "}
            <Link to="/signup" className="welcome__subtitle-link">Регистрация</Link>
          </span>
        }
      />
    </>
  );
}

export default withRouter(Login);
