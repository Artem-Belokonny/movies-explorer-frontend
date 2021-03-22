import "../Navigation/Navigation.css";
import profile from "../../images/profile.svg";
import { Link } from "react-router-dom";

function Navigation({ isOpen, onClose }) {
  return (
    <section className="navigation">
      <div
        className={`${
          isOpen
            ? "navigation__popup navigation__popup_opened"
            : "navigation__popup"
        }`}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="close"
          className="navigation__close-button"
        />
        <nav className="navigation__menu">
          <div className="navigation__container">
            <Link
              to="/"
              className="navigation__link navigation__link_main-page"
            >
              Главная
            </Link>
            <Link to="/movies" className="navigation__link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="navigation__link">
              Сохранённые фильмы
            </Link>
          </div>
          <Link to="/profile" className="navigation__account">
            <p className="navigation__link navigation__link_profile">Аккаунт</p>
            <img
              src={profile}
              alt="Профиль"
              className="navigation__account-image"
            />
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
