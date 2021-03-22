import "../Footer/Footer.css";

function Footer({ link = "#" }) {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <nav className="footer__menu">
        <p className="footer__copyright">&copy; 2020</p>
        <ul className="footer__list">
          <li>
            <a
              href="https://praktikum.yandex.ru/profile/web-career/"
              target="_blank"
              rel="noreferrer"
              className="footer__list-link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Artem-Belokonny"
              target="_blank"
              rel="noreferrer"
              className="footer__list-link"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://ru-ru.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__list-link"
            >
              Facebook
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
