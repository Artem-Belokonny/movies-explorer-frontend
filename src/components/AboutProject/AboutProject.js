import React from "react";
import "../AboutProject/AboutProject.css";

function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 id="AboutProject" className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__container">
        <article className="aboutProject__paragraph">
          <h3 className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__text">
            Составление плана, работа над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="aboutProject__paragraph">
          <h3 className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__text">
            У каждого этапа были мягкий и жесткий дедлайны, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="aboutProject__week-container">
        <p className="aboutProject__subtext aboutProject__subtext_green">
          1 неделя
        </p>
        <p className="aboutProject__subtext aboutProject__subtext_grey">
          4 недели
        </p>
        <p className="aboutProject__subtext">Back-end</p>
        <p className="aboutProject__subtext">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
