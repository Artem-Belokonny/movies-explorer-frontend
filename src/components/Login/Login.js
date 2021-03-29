import React from "react";
import Welcome from "../Welcome/Welcome.js";
import { useHistory, withRouter, Link } from 'react-router-dom';
import '../Login/Login.css';

function Login({ handleLogin }) {
  const history = useHistory();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(data)
    .then(() => history.push('/movies'))
    .catch((err) => {
      alert(err);
    });
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <>
      <Welcome
      onSubmit={handleSubmit}
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
