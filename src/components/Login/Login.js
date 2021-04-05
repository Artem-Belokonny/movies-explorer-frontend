import React from "react";
import Welcome from "../Welcome/Welcome.js";
import { useHistory, withRouter, Link } from "react-router-dom";
import "../Login/Login.css";

function Login({ onLogin, loggedIn }) {
  const history = useHistory();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, [history, loggedIn]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(data)
      .then(() => history.push("/movies"))
      .catch((err) => {
        alert(err);
        console.log(err);
      });
    setIsValid(false);
  }

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  return (
    <>
      <Welcome
        onSubmit={handleSubmit}
        isValid={isValid}
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
              value={data.email}
              onChange={handleChange}
            />
            <p className="login__error-text">{errors.email}</p>
            <p className="login__subtext">Пароль</p>
            <input
              className="welcome__input"
              type="password"
              name="password"
              required
              placeholder="Пароль"
              minLength="2"
              maxLength="20"
              value={data.password}
              onChange={handleChange}
            />
            <p className="login__error-text">{errors.password}</p>
          </>
        }
        childrenSubtitle={
          <span className="welcome__subtitle">
            Еще не зарегистрированы?{" "}
            <Link to="/signup" className="welcome__subtitle-link">
              Регистрация
            </Link>
          </span>
        }
      />
    </>
  );
}

export default withRouter(Login);
