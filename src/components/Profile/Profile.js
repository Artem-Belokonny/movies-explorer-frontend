import "../Profile/Profile.css";
import Header from "../Header/Header.js";
import { withRouter } from 'react-router-dom';

function Profile({ name, email }) {
  return (
    <>
      <Header />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, Артем!</h1>
          <form className="profile__form">
            <p className="register__text">Имя</p>
            <input
              className="profile__input"
              type="text"
              name="name"
              required
              id="name"
              placeholder="Введите имя"
              value={name}
              minlength="2" 
              maxlength="30"
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
            />
          </form>
            <button type="submit" className="profile__button">
              Редактировать
            </button>
            <button className="profile__button profile__button_signout">
              Выйти из аккаунта
            </button>
        </div>
      </section>
    </>
  );
}

export default withRouter(Profile);
