import React from "react";
import "../Techs/Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 id="Techs" className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__container">
        <article className="techs__icon">
          <p className="techs__text techs__text_icon">HTML</p>
        </article>
        <article className="techs__icon">
          <p className="techs__text techs__text_icon">CSS</p>
        </article>
        <article className="techs__icon">
          <p className="techs__text techs__text_icon">JS</p>
        </article>
        <article className="techs__icon">
          <p className="techs__text techs__text_icon">React</p>
        </article>
        <article className="techs__icon">
          <p className="techs__text techs__text_icon">Git</p>
        </article>
        <article className="techs__icon">
          <p className="techs__text techs__text_icon">Express.js</p>
        </article>
        <article className="techs__icon">
          <p className="techs__text techs__text_icon">mongoDB</p>
        </article>
      </div>
    </section>
  );
}

export default Techs;
