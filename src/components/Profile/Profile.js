import React from "react";
import "../Profile/Profile.css";
import Header from "../Header/Header.js";
import { withRouter } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile({ handleSignOut, onUpdateUser, loggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [data, setData] = React.useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState("");

  const profileButtonClassName = `${
    isValid ? "profile__button" : "profile__button_disabled"
  }`;

    React.useEffect(() => {
      setData({
        name: (currentUser.name || ''),
        email: (currentUser.email || '')
      })
    }, [currentUser]);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

    // Обработчик сабмита формы
    function handleSubmit(evt) {
      evt.preventDefault();
      onUpdateUser(data);
      setIsSuccess("Данные успешно изменены")
    }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form className="profile__form" onSubmit={handleSubmit} id="edit">
            <p className="profile__text">Имя</p>
            <input
              className="profile__input"
              type="text"
              name="name"
              required
              id="name"
              placeholder="Введите имя"
              value={data.name}
              minLength="2"
              maxLength="30"
              onChange={handleChange}
            />
          </form>
          <p className="profile__error-text">{errors.name}</p>
          <form className="profile__form">
            <p className="profile__text">Почта</p>
            <input
              className="profile__input"
              type="email"
              name="email"
              required
              id="email"
              placeholder="Введите email"
              value={data.email}
              onChange={handleChange}
            />
          </form>
          <p className="profile__error-text">{errors.email}</p>
          <p className="profile__error-text">{isSuccess}</p>
          <button form="edit" type="submit" className={profileButtonClassName}>
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
