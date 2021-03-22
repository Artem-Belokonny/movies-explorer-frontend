import React from "react";
import arrow from "../../images/arrow.svg";
import "../Portfolio/Portfolio.css";

function Portfolio({ link = "#" }) {
  return (
    <section className="portfolio">
      <ul className="portfolio__list">
        <li>
          <h2 className="portfolio__title">Портфолио</h2>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__text">Статичный сайт</p>
          <a
            href="https://github.com/Artem-Belokonny/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <img src={arrow} alt="Стрелочка" className="portfolio__arrow" />
          </a>
        </li>
        <li className="portfolio__list-item portfolio__list-item_borders">
          <p className="portfolio__text">Адаптивный сайт</p>
          <a
            href="https://github.com/Artem-Belokonny/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <img src={arrow} alt="Стрелочка" className="portfolio__arrow" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__text">Одностраничное приложение</p>
          <a
            href="https://github.com/Artem-Belokonny/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <img src={arrow} alt="Стрелочка" className="portfolio__arrow" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
