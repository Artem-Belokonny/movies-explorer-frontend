import React from "react";
import Welcome from "../Welcome/Welcome.js";
import { useHistory, withRouter, Link } from "react-router-dom";
import "../Register/Register.css";

function Register({ onRegister }) {
  const history = useHistory();


  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(data)
      .then(() => history.push("/movies"))
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <Welcome
        onSubmit={handleSubmit}
        isValid={isValid}
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
              minLength="2"
              maxLength="30"
              value={data.name}
              onChange={handleChange}
            />
            <p className="register__error-text">{errors.name}</p>
            <p className="register__subtext">E-mail</p>
            <input
              className="welcome__input"
              type="email"
              name="email"
              required
              placeholder="Email"
              id="email"
              value={data.email}
              onChange={handleChange}
            />
            <p className="register__error-text">{errors.email}</p>
            <p className="register__subtext">Пароль</p>
            <input
              className="welcome__input"
              type="password"
              name="password"
              required
              placeholder="Пароль"
              id="password"
              minLength="2"
              maxLength="20"
              value={data.password}
              onChange={handleChange}
            />
            <p className="register__error-text">{errors.password}</p>
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
