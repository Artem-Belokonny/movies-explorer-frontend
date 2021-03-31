import React from "react";
import "../Profile/Profile.css";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile({ handleSignOut, onUpdateUser, loggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

    // Монтирование эффекта установки данных пользователя
    React.useEffect(() => {
      setName(currentUser.name || '');
      setEmail(currentUser.email || '');
    }, [currentUser]);

      // Управляемые компоненты input полей формы
  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

    // Обработчик сабмита формы
    function handleSubmit(evt) {
      evt.preventDefault();
      onUpdateUser({
        name,
        email,
      });
    }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <p className="register__text">Имя</p>
            <input
              className="profile__input"
              type="text"
              name="name"
              required
              id="name"
              placeholder="Введите имя"
              value={name}
              minLength="2"
              maxLength="30"
              onChange={handleNameChange}
            />
          </form>
          <form className="profile__form">
            <p className="register__text">Почта</p>
            <input
              className="profile__input"
              type="email"
              name="email"
              required
              id="email"
              placeholder="Введите email"
              value={email}
              onChange={handleEmailChange}
            />
            {/* <button type="submit" className="profile__button">
              Редактировать
            </button> */}
          </form>
          <button type="submit" className="profile__button">
              Редактировать
            </button>
          <button
            onClick={handleSignOut}
            className="profile__button profile__button_signout"
          >
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default withRouter(Profile);
