import React from "react";
import photo from "../../images/ava.jpg";
import "../AboutMe/AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 id="AboutMe" className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <div className="aboutMe__personal-info">
          <h2 className="aboutMe__name">Артем</h2>
          <h3 className="aboutMe__job">Фронтенд-разработчик, 33 года</h3>
          <p className="aboutMe__text">
            Я живу в Московской области, закончил юридический факультет ННГУ им.
            Н.И. Лобачевского У меня есть жена и двое сыновей. Люблю кино, рок
            музыку и увлекаюсь историей. С 2010 года работал в юридических
            подразделениях различных компаний. Сейчас заканчиваю курс по
            веб-разработке от Яндекс.Практикум и хочу развиваться в этом
            направлении дальше.
          </p>
          <ul className="aboutMe__list">
            <li>
              <a
                href="https://ru-ru.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="aboutMe__list-link"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Artem-Belokonny"
                target="_blank"
                rel="noreferrer"
                className="aboutMe__list-link"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img src={photo} alt="Фотография" className="aboutMe__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
